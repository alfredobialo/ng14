import {Component} from "@angular/core";


@Component({
    template : `
        <h2>Reverse Text App</h2>
        <input type="text" name="txt" [(ngModel)]="txt">
        
        <p style="color:#1e55ff; font-weight:700;">{{reverseText(txt)}}</p>
    `,
    selector :"v-reverse-text"
    
})
export class ReverseTextComponent
{
    txt:string = "";
   
    reverseText(input : string )
    {
        let result = "";
        for( let i = 0 ; i < input.length; i++)
        {
           result = input[i] + result;
        }
        return  result;
    }
}
