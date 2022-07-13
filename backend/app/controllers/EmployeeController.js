import Employee from '../models/EmployeeModel.js';

// Tampilkan semua data Employee
export const getAllEmployees= async(req,res)=>{
    try {
        const employees = await Employee.findAll();
        res.json(employees);
    } catch (error) {
        res.json({msg:error.message})
        
    }
}

export const createEmployee=async(req,res)=>{
    try {
        await Employee.create(req.body);
        res.json({"msg" : "employee Created"})
    } catch (error) {
        res.json({msg:error.message})
        
    }
}
export const updateEmployee=async(req,res)=>{
    try {
        await Employee.update(req.body,{
            where:{
                id:req.params.id
            }
        });
        res.json({"msg":"Employee Updated"})
    } catch (error) {
        res.json({msg:error.msg})
    }
}

export const getAllEmployeesbyId=async(req,res)=>{
    try {
       const employees= await Employee.findAll({
            where:{
                nik:req.params.nik
            }
        });
        res.json(employees[0]);
    } catch (error) {
        res.json({msg:error.message});  
    }
}
export const deleteEmploye=async(req,res)=>{
    try {
        await Employee.destroy({
            where:{
                id:req.params.id
            }
        });
        res.json({"msg":"Employee telah di hapus"})
    } catch (error) {
        res.json({msg:error.message})
        
    }

}