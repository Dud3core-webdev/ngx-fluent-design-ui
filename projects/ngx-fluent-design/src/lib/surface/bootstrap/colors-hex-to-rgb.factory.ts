/**
 * This is going to be used to set the correct rgb values for surface sheet style backgrounds as right now
 * the user has to set them themselves and it's a little poop
 */

export function colorsHexToRgbFactory(): Promise<void> {
    console.log(document);
    return new Promise<void>((reject, resolve) => {
        reject();
        resolve();
    })
        .then(() => {
            console.log('Hello there');
        });
}
