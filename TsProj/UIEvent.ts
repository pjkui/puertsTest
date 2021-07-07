import {UnityEngine} from 'csharp'
import {$typeof} from 'puerts'
import "./UI_testFairyTS"

function init(monoBehaviour: UnityEngine.MonoBehaviour): void {
    let button  = monoBehaviour.GetComponent($typeof(UnityEngine.UI.Button)) as UnityEngine.UI.Button;
    let input = monoBehaviour.transform.parent.GetComponentInChildren($typeof(UnityEngine.UI.InputField)) as UnityEngine.UI.InputField;
    let toggle = monoBehaviour.transform.parent.GetComponentInChildren($typeof(UnityEngine.UI.Toggle)) as UnityEngine.UI.Toggle;
    button.onClick.AddListener(() =>{
        console.log("button pressed, input is: " + input.text);
        if(input.text.endsWith("ts")){
           input.text = input.text.replace("ts","xxx");
        }else{
            input.text+="ts"
        }
    });

    toggle.onValueChanged.AddListener((b) => {
        console.log("toggle.value=" + b);
    });

}

export {init};
