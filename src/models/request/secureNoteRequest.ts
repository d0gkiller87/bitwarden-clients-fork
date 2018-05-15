import { SecureNoteType } from 'jslib/enums/secureNoteType';
import { SecureNoteView } from 'jslib/models/view/secureNoteView';

export class SecureNoteRequest {
    static template(): SecureNoteRequest {
        var req = new SecureNoteRequest();
        req.type = SecureNoteType.Generic;
        return req;
    }

    static toView(req: SecureNoteRequest) {
        const view = new SecureNoteView();
        view.type = req.type;
        return view;
    }

    type: SecureNoteType;
}
