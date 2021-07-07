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
import { FairyGUI } from 'csharp'


export class UI_testFairyTS extends FairyGUI.GComponent {

    public m_bg: FairyGUI.GGraph;
    public m_info: FairyGUI.GRichTextField;
    public readonly URL: string = "ui://05o0wvyppkgz0";

    public static CreateInstance(): UI_testFairyTS {
        return FairyGUI.UIPackage.CreateObject("testff", "testFairy") as UI_testFairyTS;
    }

    public ConstructFromXML(xml: FairyGUI.Utils.XML): void {
        super.ConstructFromXML(xml);

        this.m_bg = this.GetChild("bg") as FairyGUI.GGraph;
        this.m_info = this.GetChild("info") as FairyGUI.GRichTextField;
    }
}

