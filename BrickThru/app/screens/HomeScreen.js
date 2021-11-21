import covariance from 'compute-covariance/lib';
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  DeviceEventEmitter,
  Text,
  StatusBar,
  SafeAreaView,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import {CSI_DUMMY} from '../dummy-testing-data';
import {getToken, onLoadCallback} from '../services/MachineLearningService';
import {
  calculateAmplitudeFromCSI,
  calculateCovarriance,
  getArrayMax,
  getTrimmedMean,
  parseCSI,
} from '../utils/csi-utils';

const HomeScreen = (props) => {
  const {width, height} = useWindowDimensions();
  const [data, setData] = useState('CSI data testing');
  const [isScanning, setIsScanning] = useState(false);
  const [prediction, setPrediction] = useState('Unknown');
  const [csiRawValues, setCSIRawValues] = useState(CSI_DUMMY);
  const [ampValues, setAmpValues] = useState([]);
  const [globalAmps, setGlobalAmps] = useState([]);
  const [csiCounter, setCsiCounter] = useState(0);
  const [triggerFlag, setTriggerFlag] = useState(false);
  const [someOneIsMoving, setSomeOneIsMoving] = useState(false);
  const buffer = 50;
  const absoluteThreshold = 0.3;
  const relativeThreshold = 1.5;

  useEffect(() => {
    DeviceEventEmitter.addListener('csiReceived', function (e) {
      setCsiCounter((oldCounter) => oldCounter + 1);
      setData('DATA INCOMING');

      const parsedValue = parseCSI(e.csi);
      addCSIToValues(parsedValue);
      detectHumanMovement();
    });

    return () => {
      DeviceEventEmitter.removeAllListeners();
    };
  }, []);

  const getCov = (amps) => {
    if (csiCounter > buffer) {
      const cov = covariance(amps)[0];
      return cov;
    }
  };

  const addCSIToValues = (incomingValue) => {
    if (csiRawValues.length < 1000) {
      setCSIRawValues((oldArray) => {
        [...oldArray, incomingValue];
      });
    } else {
      return setCSIRawValues([incomingValue]);
    }
  };

  const detectHumanMovement = () => {
    if (csiCounter > buffer) {
      const [amps, phases] = calculateAmplitudeFromCSI(
        csiRawValues[csiCounter],
        csiRawValues[csiCounter - 1],
      );
      setAmpValues((old) => [...old, amps]);
      const ampCov = getCov(ampValues[csiCounter]);

      setGlobalAmps((old) => [...old, ampcov]);
      const ampCovMax = getArrayMax(ampCov);
      const ampCovAvg = getTrimmedMean(ampCov, 0.1);

      for (i = 1, count = 0; i < 6; ++i) {
        if (
          globalAmps[(csiCounter - i) % buffer] >
            ampCovAvg * relativeThreshold ||
          globalAmps[(csiCounter - i) % buffer] > ampCovMax
        ) {
          if (++count > 2) {
            setTriggerFlag(true);
            break;
          }
        }
      }
      if (ampCov > absoluteThreshold || triggerFlag) {
        setSomeOneIsMoving(true);

        setTimeout(() => {
          setSomeOneIsMoving(false);
        }, 3000);
        getToken(
          (err) => console.log(err),
          function () {
            onLoadCallback({
              csiRawValues: csiRawValues,
              responseText: this.responseText,
            });
          },
        );

        setTriggerFlag(false);
      }
    } else {
      setGlobalAmps((old) => [...old, []]);
      setAmpValues((old) => [...old, []]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#181A1C" />
      {/* <Text style={{fontSize: 32, color: 'white', fontWeight: 'bold'}}>
        BrickThru
      </Text> */}
      <Image
        source={require('../assets/logo.png')}
        style={{width: 100, height: 120, resizeMode: 'contain', marginTop: 30}}
      />
      <Text
        style={{
          fontSize: 20,
          color: '#ECEBED',
          marginTop: 80,
          marginBottom: 50,
        }}>
        {!isScanning
          ? 'Tap to start detection'
          : someOneIsMoving
          ? 'Someone is Moving!'
          : 'Waiting for activity...'}
      </Text>
      <View
        style={{
          marginBottom: 50,
          width: width,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {isScanning ? (
          someOneIsMoving ? (
            <View>
              <Image
                style={{
                  width: width * 0.7,
                  height: width * 0.7,
                  resizeMode: 'contain',
                }}
                source={require('../assets/MovingMan.gif')}
              />
            </View>
          ) : (
            <View />
          )
        ) : (
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => {
              setIsScanning(true);
            }}>
            <View
              style={{
                backgroundColor: 'white',
                opacity: 0.08,
                width: width * 0.7,
                height: width * 0.7,
                borderRadius: 500,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  opacity: 1,
                  width: width * 0.45,
                  height: width * 0.45,
                  borderRadius: 500,
                }}
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          flex: 1,
          width: '100%',
          paddingBottom: 50,
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        {isScanning ? (
          <Button
            onPress={() => {
              setIsScanning(false);
              setSomeOneIsMoving(false);
            }}
            style={{backgroundColor: '#E50914'}}
            title="Stop Scanning"
            color="red"
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#181A1C',
  },
});

export default HomeScreen;
