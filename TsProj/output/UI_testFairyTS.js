"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UI_testFairyTS = void 0;
/**
 * File: e:\code\puerts\puerts_unity_demo\TsProj\UI_t1F.ts
 * Project: e:\code\puerts\puerts_unity_demo\TsProj
 * Created Date: Tuesday, July 6th 2021, 11:39:47 am
 * Author: quinnpan(潘敬奎)
 * -----
 * Last Modified: Wed Jul 07 2021
 * Modified By: quinnpan(潘敬奎)
 * -----
 * Copyright (c) 2021 Tencent
 * ------------------------------------
 * Javascript will save your soul!
 */
const csharp_1 = require("csharp");
class UI_testFairyTS extends csharp_1.FairyGUI.GComponent {
    m_bg;
    m_info;
    URL = "ui://05o0wvyppkgz0";
    static CreateInstance() {
        return csharp_1.FairyGUI.UIPackage.CreateObject("testff", "testFairy");
    }
    ConstructFromXML(xml) {
        super.ConstructFromXML(xml);
        this.m_bg = this.GetChild("bg");
        this.m_info = this.GetChild("info");
    }
}
exports.UI_testFairyTS = UI_testFairyTS;
//# sourceMappingURL=UI_testFairyTS.js.map