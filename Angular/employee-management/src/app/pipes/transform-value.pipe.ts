import { Pipe } from "@angular/core";

@Pipe({
    name: "transormValue"
})
export class TransformPipe {
    transform(value, replaceChar, replacement) {
        return value.replaceAll(replaceChar, replacement);
    }
}