import {NgModule} from '@angular/core';
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {InputMaskModule} from "primeng/inputmask";
import {DialogModule} from "primeng/dialog";
import {SkeletonModule} from "primeng/skeleton";
import {SidebarModule} from "primeng/sidebar";
import {DataViewModule} from "primeng/dataview";
import {TableModule} from "primeng/table";
import {DynamicDialogModule} from "primeng/dynamicdialog";
import {MenuModule} from "primeng/menu";
import {MenubarModule} from "primeng/menubar";
import {ProgressBarModule} from "primeng/progressbar";
import {SpinnerModule} from "primeng/spinner";
import {ChipsModule} from "primeng/chips";
import {InputNumberModule} from "primeng/inputnumber";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {KeyFilterModule} from "primeng/keyfilter";
import {RadioButtonModule} from "primeng/radiobutton";
import {MultiSelectModule} from "primeng/multiselect";
import {EditorModule} from "primeng/editor";
import {CheckboxModule} from "primeng/checkbox";
import {TreeSelectModule} from "primeng/treeselect";
import {PasswordModule} from "primeng/password";
import {SlideMenuModule} from "primeng/slidemenu";
import {RippleModule} from "primeng/ripple";
import {BadgeModule} from "primeng/badge";
import {AvatarModule} from "primeng/avatar";
import {TabMenuModule} from "primeng/tabmenu";
import {ChartModule} from "primeng/chart";
import {MessageModule} from "primeng/message";
import {ToastModule} from "primeng/toast";
import {TimelineModule} from "primeng/timeline";
import {ListboxModule} from "primeng/listbox";
import {MessageService} from "primeng/api";

const requiredModules  = [DropdownModule, InputTextModule, InputMaskModule, DynamicDialogModule, InputNumberModule,MultiSelectModule,
    DialogModule, SkeletonModule, SidebarModule, DataViewModule, TableModule, ChipsModule, RadioButtonModule,
    MenuModule, MenubarModule, ProgressBarModule, SpinnerModule, ProgressSpinnerModule, KeyFilterModule, BadgeModule,
    EditorModule,CheckboxModule, TreeSelectModule, PasswordModule, SlideMenuModule, RippleModule, BadgeModule, AvatarModule,
    TabMenuModule, ChartModule, MessageModule, ToastModule, TimelineModule, ListboxModule];

@NgModule({
    imports: requiredModules,
    exports: requiredModules,
    providers: [MessageService],
})
export class AppUiModule {
}
