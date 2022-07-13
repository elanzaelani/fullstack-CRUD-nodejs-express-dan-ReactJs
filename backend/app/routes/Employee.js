import express from 'express';
import { createEmployee, 
    deleteEmploye,
     getAllEmployees,
      getAllEmployeesbyId,
       updateEmployee } from '../controllers/EmployeeController.js';

const router = express.Router();

router.get('/',getAllEmployees);
router.post('/',createEmployee);
router.get('/:nik',getAllEmployeesbyId);
router.patch('/:id',updateEmployee);
router.delete('/:id',deleteEmploye);

export default router;