-- Kartei Database
-- v0.0.1

USE kartei;

insert into DetailedRecord values (1,'Char1','Name1',20);
insert into DetailedRecord values (2,'Char2','Name2',20);
insert into DetailedRecord values (3,'Char3','Name3',20);
insert into DetailedRecord values (4,'Char4','Name4',20);

select * from DetailedRecord;

insert into ShortRecord values (1,'Char1','Name1','Hier koennte ihre Werbung stehen');
insert into ShortRecord values (2,'Char2','Name2','Hier koennte ihre Werbung stehen');
insert into ShortRecord values (3,'Char3','Name3','Hier koennte ihre Werbung stehen');
insert into ShortRecord values (4,'Char4','Name4','Hier koennte ihre Werbung stehen');

select * from ShortRecord;

insert into RecordEntry values (1,'29.11.2018','Dr. Angstquell','Schwere Verbrennungen durch Fel-Feuer','Fel-Feuer','Heilung durch Lichtmagie','Nein',1);
insert into RecordEntry values (2,'31.12.2018','Dr. Angstquell','Verbrennungen durch Fel-Feuer','Fel-Feuer','Heilung durch Lichtmagie','Nein',2);
insert into RecordEntry values (3,'11.11.2018','Dr. Angstquell','Brennendes Geroell durch Fel-Feuer','Fel-Feuer','Heilung durch Lichtmagie','Nein',3);
insert into RecordEntry values (4,'01.04.2018','Dr. Angstquell','Verbrennungen durch Feuer','Magie','Heilung durch Lichtmagie','Nein',4);
insert into RecordEntry values (5,'29.11.2018','Dr. Angstquell','Schwere Verbrennungen durch Fel-Feuer','Fel-Feuer','Heilung durch Lichtmagie','Nein',1);

select * from RecordEntry;

insert into Phobia values (1,'Besonderheit1','Net anfassen',1);
insert into Phobia values (2,'Besonderheit2','Net anfassen',2);
insert into Phobia values (3,'Besonderheit3','Net anfassen',3);
insert into Phobia values (4,'Besonderheit4','Net anfassen',4);

select * from Phobia;

insert into Permissions values (1,'Admin','Adminnutzer');
insert into Permissions values (2,'User','Normale Benutzer');

select * from Permissions;

insert into User values (1,'Xaxahl','asdf.asdf@asdf.asdf','Xaxahl',1);
insert into User values (2,'Zaera','asdf.asdf@asdf.asdf','Zaera',2);

select * from User;