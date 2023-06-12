export async function  employeeLoader()
{
    const res= await fetch('http://localhost:4000/employees');
    return res.json();
}

