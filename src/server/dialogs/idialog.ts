import * as builder from 'botbuilder';

export interface IDialog {
    waterfall: builder.IDialogWaterfallStep[];
}