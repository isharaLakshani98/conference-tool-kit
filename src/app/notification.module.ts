import { NgModule } from '@angular/core';
// @ts-ignore
import { NotifierModule, NotifierOptions } from 'angular-notifier';


/**
 * Custom angular notifier options
 */
const customNotifierOptions: NotifierOptions = {
    position: {
        horizontal: {
            position: 'right',
            distance: 12
        },
        vertical: {
            position: 'top',
            distance: 10,
            gap: 10
        }
    },
    theme: 'material',
    behaviour: {
        autoHide: 5000,
        onClick: 'hide',
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 4
    },
    animations: {
        enabled: true,
        show: {
            preset: 'slide',
            speed: 300,
            easing: 'ease'
        },
        hide: {
            preset: 'fade',
            speed: 300,
            easing: 'ease',
            offset: 50
        },
        shift: {
            speed: 300,
            easing: 'ease'
        },
        overlap: 150
    }
};

@NgModule({
    imports: [NotifierModule.withConfig(customNotifierOptions)],
    exports: [NotifierModule]
})
export class NotificationModule { }
