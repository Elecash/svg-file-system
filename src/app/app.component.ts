import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    fileHandle;
    fileContents;
    fileArea = new FormControl('');

    constructor() {}

    ngOnInit() {}

    async onClickButton() {
        this.fileHandle = await (window as any).chooseFileSystemEntries({
            accepts: [{ mimeTypes: ['image/svg+xml'] }]
        });

        const file = await this.fileHandle.getFile();
        this.fileContents = await file.text();
        this.fileArea.setValue(this.fileContents);

        this.fileArea.valueChanges.subscribe(changes => {
            this.fileContents = changes;
        });
    }

    async onClickSave() {
        const opts = {
            type: 'saveFile',
            accepts: [{
                description: 'SVG',
                extensions: ['svg'],
                mimeTypes: ['image/svg+xml'],
            }],
        };

        const writer = await this.fileHandle.createWriter(opts);
        await writer.truncate(0);
        await writer.write(0, this.fileArea.value);
        await writer.close();
    }
}
