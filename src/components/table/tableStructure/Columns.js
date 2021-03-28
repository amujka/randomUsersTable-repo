//Defining table structure-----------
export const COLUMNS = [
  {
    Header: "#",
    accessor: "id",
    //index of row
    Cell: (row) => {
      return <div>{Number(row.row.id) + 1}</div>;
    },
  },
  {
    Header: "First name", //Name of header
    accessor: "name.first", //map data property to header
  },
  {
    Header: "Last name",
    accessor: "name.last",
  },
  {
    Header: "Age",
    accessor: "dob.age",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Country",
    accessor: "location.country",
  },
];
