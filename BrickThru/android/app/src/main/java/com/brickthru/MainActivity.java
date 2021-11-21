package com.brickthru;

import com.facebook.react.ReactActivity;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import android.util.Log;
import android.os.Bundle;
import com.stevenmhernandez.esp32csiserial.CSIDataInterface;
import com.stevenmhernandez.esp32csiserial.ESP32CSISerial;

public class MainActivity extends ReactActivity implements CSIDataInterface {

  private ESP32CSISerial csiSerial = new ESP32CSISerial();


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        csiSerial.setup(this, "BrickThru");
        csiSerial.onCreate(this);
    }

    @Override
    protected void onResume() {
        super.onResume();
        csiSerial.onResume(this);
    }

    @Override
    protected void onPause() {
        super.onPause();
        csiSerial.onPause(this);
    }

  int csiCounter = 0;
  @Override
  public void addCsi(String csi_string) {
      csiCounter++;
      // homeFragment.homeViewModel.setText(String.valueOf(csiCounter));
          WritableMap map = Arguments.createMap();
          map.putString("csi", csi_string);
        try {
              getReactInstanceManager().getCurrentReactContext()
              .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
              .emit("csiReceived", map);
            } catch (Exception e) {
              Log.e("ReactNative", "Caught Exception: " + e.getMessage());
            }
  }
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "BrickThru";
  }
}
