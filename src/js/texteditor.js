import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'; 
import List from '@editorjs/list'; 
import ImageTool from '@editorjs/image';
import Marker from '@editorjs/marker'
import Embed from "@editorjs/embed";
// import Table from "@editorjs/table";
import Warning from "@editorjs/warning";
import Code from "@editorjs/code";
// import LinkTool from "@editorjs/link";
// import Raw from "@editorjs/raw";
import Quote from "@editorjs/quote";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
// import InlineCode from "@editorjs/inline-code";
import SimpleImage from "@editorjs/simple-image";

// import edjsHTML from "editorjs-html";
// const edjsParser = edjsHTML();
// const html = edjsParser.parse(editorjs_clean_data);

// console.log(html);

/**
 * Used for preparing editir.js object for both New and Exitsing post
 * @param {Data} data Data from existing blogs for updating.
 */
export function editor(data) {
    const editorjs = new EditorJS({
        holder: 'editor',
        autofocus: true,
        placeholder: "Let`s write an awesome prompt here!",
        header: {
            class: Header, 
            inlineToolbar: ['link'] 
          }, 
        list: { 
            class: List, 
            inlineToolbar: true 
        },
        tools: {
            image: {
                class: ImageTool,
                config: {
                    endpoints: {
                        // byFile: 'http://localhost:3000',
                        byUrl: 'data:image/jpeg;base64,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'
                    }
                }
            },
            embed: Embed,
            // table: Table,
            marker: Marker,
            list: List,
            warning: Warning,
            // code: Code,
            // linkTool: LinkTool,
            // raw: Raw,   
            header: Header,
            quote: Quote,
            // checklist: CheckList,
            delimiter: Delimiter,
            // inlineCode: InlineCode,
            simpleImage: SimpleImage
        },
        data
    })
    // if(window?.editorjs) {
    //     return window.editorjs
    // }
    return editorjs
}
