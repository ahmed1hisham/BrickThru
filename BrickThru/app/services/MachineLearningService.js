import {IBM_API_KEY} from '../env';

const fields =
  'type,role,mac,rssi,rate,sig_mode,mcs,bandwidth,smoothing,not_sounding,aggregation,stbc,fec_coding,sgi,noise_floor,ampdu_cnt,channel,secondary_channel,local_timestamp,ant,sig_len,rx_state,real_time_set,real_timestamp,len,CSI_DATA\n';

export function onLoadCallback({csiRawValues, responseText}) {
  let tokenResponse;
  try {
    tokenResponse = JSON.parse(responseText);
  } catch (ex) {
    console.log(ex);
  }
  // NOTE: manually define and pass the array(s) of values to be scored in the next line

  const payload = JSON.stringify({
    input_data: [
      {
        fields: fields,
        values: csiRawValues,
      },
    ],
  });
  const scoring_url =
    'https://eu-gb.ml.cloud.ibm.com/ml/v4/deployments/33466c97-2ef7-4e7c-8956-9561f49be84e/predictions?version=2021-11-20';

  apiPost(
    scoring_url,
    tokenResponse?.access_token,
    payload,
    function (resp) {
      let parsedPostResponse;
      try {
        parsedPostResponse = JSON.parse(this.responseText);
      } catch (ex) {
        console.log(ex);
      }
      console.log('Scoring response');
      console.log(
        JSON.stringify(
          parsedPostResponse.predictions
            ? parsedPostResponse?.predictions[0].values[0][0]
            : 'QUOTA EXCEEDED',
        ),
      );
      return parsedPostResponse.predictions
        ? parsedPostResponse?.predictions[0].values[0][0]
        : 'QUOTA EXCEEDED';
    },
    function (error) {
      console.log(error);
    },
  );
}

export function getToken(errorCallback, loadCallback) {
  const req = new XMLHttpRequest();
  req.addEventListener('load', loadCallback);
  req.addEventListener('error', errorCallback);
  req.open('POST', 'https://iam.cloud.ibm.com/identity/token');
  req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  req.setRequestHeader('Accept', 'application/json');
  req.send(
    'grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=' + IBM_API_KEY,
  );
}

function apiPost(scoring_url, token, payload, loadCallback, errorCallback) {
  const oReq = new XMLHttpRequest();
  oReq.addEventListener('load', loadCallback);
  oReq.addEventListener('error', errorCallback);
  oReq.open('POST', scoring_url);
  oReq.setRequestHeader('Accept', 'application/json');
  oReq.setRequestHeader('Authorization', 'Bearer ' + token);
  oReq.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  oReq.send(payload);
}
