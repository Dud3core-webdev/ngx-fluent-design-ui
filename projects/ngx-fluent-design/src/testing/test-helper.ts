import { Predicate } from '@angular/core';
import { By } from '@angular/platform-browser';

export const bySpecAttribute = (name: string): Predicate<any> => {
    return By.css(`[data-spec="${name}"]`);
};
