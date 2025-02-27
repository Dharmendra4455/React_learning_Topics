import ProtoTypes from 'Prop-types';
function Student(props){
    return(
        <div className="student">
            <div>Name : {props.Names}</div>
            <div>Age : {props.age}</div>
            <div>Gender : {props.gender}</div>
            <div>Is Student : {props.isstud ? "YES":"NO"}</div>
        </div>
    );
    } 
Student.ProtoTypes={
    Names: ProtoTypes.string,
    age: ProtoTypes.number,
    gender: ProtoTypes.string,
    isstud: ProtoTypes.bool,

}
 Student.defaultProps={
    Names:"Guest",
    age:20,
    gender:"Male",
    isstud:true,

}

export default Student;