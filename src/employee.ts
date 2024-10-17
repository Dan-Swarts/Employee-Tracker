

class Employee{
    first_name: string;
    last_name: string;
    role_id: number;
    manager_id: number;

    constructor(
        first_name: string,
        last_name: string,
        role_id: number,
        manager_id: number,
    )
    {
        this.first_name = first_name;
        this.last_name = last_name;
        this.role_id = role_id;
        this.manager_id = manager_id;
    }
}

export { Employee }