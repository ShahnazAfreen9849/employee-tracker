INSERT INTO department(name)
values("Sales"),
("Engineering"),
("Finance"),
("Legal");

INSERT INTO role(title,salary,department_id)
values("Sales Lead",100000,1),
("Sales Person",80000,1),
("Lead Engineer", 150000,2),
("Software Engineer", 120000,2),
("Account Manger",1600000, 3),
("Accountant",1250000, 3),
("Legal Team Lead",250000, 4),
("Lawyer",190000,4);

INSERT INTO employee(first_name,last_name,role_id)
values("John","Doe",1),
("Mike","Chan",2),
("Ashley","Rodreuiz",3),
("Kevin", "Tupik",4),
("Tom","Allen",5),
("Sarah","Lourd",6),
("Malia","Brown",7),
("Kunal","Singh",8);

UPDATE employee SET manager_id=1 WHERE id=2;
UPDATE employee SET manager_id=3 WHERE id=4;
UPDATE employee SET manager_id=8 WHERE id=6;
UPDATE employee SET manager_id=5 WHERE id=8;
