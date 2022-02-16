import { Component } from '@angular/core';
import { NgxFluentDesignMessageBarHandler } from '../../../../projects/ngx-fluent-design/src/lib/notifications/message-bar/message-bar-handler.helper';

@Component({
    templateUrl: './mobile-test.page.component.html',
    styleUrls: ['./mobile-test.page.component.scss']
})
export class MobileTestPageComponent {
    public progressIndicatorCurrentValue: number = 0;
    public messageBarHandler: NgxFluentDesignMessageBarHandler = new NgxFluentDesignMessageBarHandler(false);

    sayHello() {
        alert('Hello');
    }
}
