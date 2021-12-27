export interface INgxFluentDesignInput {
    id: string;
    label: string;
    placeholder: string;
    type?: NgxFluentDesignInputType;
    required: boolean;
    value: boolean;
    disabled: boolean;
    valueChanged(): void;
}

export declare type NgxFluentDesignInputType = 'number' | 'password' | 'text';
