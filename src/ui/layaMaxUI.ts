/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import View=Laya.View;
import Dialog=Laya.Dialog;
import Scene=Laya.Scene;
export module ui {
    export class Page1UI extends Laya.Scene {
		public btn_page4:Laya.Button;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Page1");
        }
    }
    export class Page2UI extends Laya.Scene {
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Page2");
        }
    }
    export class Page3UI extends Laya.Scene {
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Page3");
        }
    }
    export class Page4UI extends Laya.Scene {
		public btn_close:Laya.Button;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Page4");
        }
    }
    export class TabbarUI extends Laya.View {
		public tab:Laya.Tab;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Tabbar");
        }
    }
}