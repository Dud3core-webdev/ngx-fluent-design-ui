import { NgxFluentDesignDialogHandler } from './dialog-handler.helper';
import DoneCallback = jest.DoneCallback;

describe('NgxFluentDesignDialogHandler', () => {
    let subject: NgxFluentDesignDialogHandler;

    describe('Given the handler is loaded with a falsy state', () => {
        beforeEach(() => {
            subject = new NgxFluentDesignDialogHandler(false);
        });

        it('Then the correct observable result is returned', (done: DoneCallback) => {
            subject.isOpenAsObservable.subscribe((isOpen) => {
                expect(isOpen).toBe(false);
                done();
            });
        });

        it('Then the correct result is returned', () => {
            expect(subject.isOpen).toBe(false);
        });

        describe('Toggling the state of isOpen', () => {
            beforeEach(() => {
                subject.open();
            });


            it('Then the correct observable result is returned', (done: DoneCallback) => {
                subject.isOpenAsObservable.subscribe((isOpen) => {
                    expect(isOpen).toBe(true);
                    done();
                });
            });

            it('Then the correct result is returned', () => {
                expect(subject.isOpen).toBe(true);
            });
        });
    });

    describe('Given the handler is loaded with a truthy state', () => {
        beforeEach(() => {
            subject = new NgxFluentDesignDialogHandler(true);
        });

        it('Then the correct observable result is returned', (done: DoneCallback) => {
            subject.isOpenAsObservable.subscribe((isOpen) => {
                expect(isOpen).toBe(true);
                done();
            });
        });

        it('Then the correct result is returned', () => {
            expect(subject.isOpen).toBe(true);
        });

        describe('Toggling the state of isOpen', () => {
            beforeEach(() => {
                subject.close();
            });


            it('Then the correct observable result is returned', (done: DoneCallback) => {
                subject.isOpenAsObservable.subscribe((isOpen) => {
                    expect(isOpen).toBe(false);
                    done();
                });
            });

            it('Then the correct result is returned', () => {
                expect(subject.isOpen).toBe(false);
            });
        });
    });
});
