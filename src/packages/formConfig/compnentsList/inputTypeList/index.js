// 合并所有的输入类型组件
import inputCom from "./input/inputCom";
import selectCom from './select/selectCom';
import checkboxCom from './checkbox/checkboxCom';
import radioCom from './radio/radioCom';
import switchCom from './switch/switchCom';
import inputNumberCom from "./inputNumber/inputNumberCom";
import sliderCom from './slider/sliderCom';
import pickerCom from "./picker/pickerCom";
import uploadCom from "./upload/uploadCom";

export default [
    ...inputCom,
    selectCom,
    ...pickerCom,
    checkboxCom,
    radioCom,
    switchCom,
    inputNumberCom,
    sliderCom,
    uploadCom
]