import { Pipe } from "@angular/core";

@Pipe({
    name: "employeeFilter"
})
export class EmployeeFilterPipe {
    transform(value, filterText) {
        return value.filter((employee) => {
            return employee.name.indexOf(filterText) > -1;
        })
    }
}