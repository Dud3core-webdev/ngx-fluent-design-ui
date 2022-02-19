import { INgxFluentDesignIcon } from '../../icons/shared/types/ngx-fluent-design-icon.interface';
import { MessageBarType } from '../types/message-bar.type';
import {
    NgxFluentDesignIconClearClose,
    NgxFluentDesignIconInfoBlocked,
    NgxFluentDesignIconInfoError,
    NgxFluentDesignIconInfoSevereWarn, NgxFluentDesignIconInfoSuccess,
    NgxFluentDesignIconInfoWarn
} from '../../icons/shared/constants/ngx-fluent-design-icons-list';

export interface INgxFluentDesignMessageBarIcon {
    icon: INgxFluentDesignIcon;
    iconFill?: string;
    ngxFluentDesignCssVariableIconFill?: string;
}

export class NgxFluentDesignMessageBarIconFactory {
    public static for(messageBarType: MessageBarType): INgxFluentDesignMessageBarIcon {
        switch (messageBarType) {
            case 'warning':
                return {
                    icon: NgxFluentDesignIconInfoWarn,
                    ngxFluentDesignCssVariableIconFill: '--ngx-fluent-design-status-warning'
                };
            case 'severe-warning':
                return {
                    icon: NgxFluentDesignIconInfoSevereWarn,
                    ngxFluentDesignCssVariableIconFill: '--ngx-fluent-design-status-severe-warning'
                };
            case 'error':
                return {
                    icon: NgxFluentDesignIconInfoError,
                    ngxFluentDesignCssVariableIconFill: '--ngx-fluent-design-status-error'
                };
            case 'blocked':
                return {
                    icon: NgxFluentDesignIconInfoBlocked,
                    ngxFluentDesignCssVariableIconFill: '--ngx-fluent-design-status-error'
                };
            case 'success':
                return {
                    icon: NgxFluentDesignIconInfoSuccess,
                    ngxFluentDesignCssVariableIconFill: '--ngx-fluent-design-status-success'
                };
            case 'info':
                return {
                    icon: NgxFluentDesignIconInfoWarn,
                    ngxFluentDesignCssVariableIconFill: '--ngx-fluent-design-status-warning'
                };
        }
    }

    public static forCloseIcon(messageBarType: MessageBarType): INgxFluentDesignMessageBarIcon {
        switch (messageBarType) {
            case 'info':
                return {
                    icon: NgxFluentDesignIconInfoWarn,
                    ngxFluentDesignCssVariableIconFill: '--ngx-fluent-design-foreground-neutral-primary'
                };
            default:
                return {
                    icon: NgxFluentDesignIconClearClose,
                    ngxFluentDesignCssVariableIconFill: '--ngx-fluent-design-status-warning'
                };
        }
    }
}
