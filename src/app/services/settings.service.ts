import { Injectable } from '@angular/core';

export interface TimeSetting {
  showMills: boolean;
}
export interface Settings {
  timeSetting: TimeSetting;
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private settingsKey: string = 'settings';

  private defaultSetting: Settings = {
    timeSetting: {
      showMills: false
    }
  };

  constructor() { 
  }

  public getSettings(): Settings {
    const cache: string | null = localStorage.getItem(this.settingsKey);
    if (cache == null || cache == '') {
      return this.defaultSetting;
    } 
    try {
      return JSON.parse(cache)
    } catch (error) {
      return this.defaultSetting;
    }
  }

  public setSettings(key: string, value: any) {
    const currentSettings = this.getSettings();
    this.updateSettings(currentSettings, key, value);
    localStorage.setItem(this.settingsKey, JSON.stringify(currentSettings));
  }

  private updateSettings(currentSettings: any, key: string, value: any) {
    const index = key.indexOf('.');
    if (index > 0) {
      this.updateSettings(currentSettings[key.substring(0, index)], key.substring(index + 1), value);
    } else {
      currentSettings[key] = value;
    }
  }
}
