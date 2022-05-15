/**
 * getTodayDate
 * @returns todays date dd/mm/yyyy
 */
export const getTodayDate = () => {
  let today = new Date(),
    date =
      today.getDate() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getFullYear();
  return date;
};
/**
 *
 * @returns corrent time
 */
export const getCorrentTime = () => {
  let time = new Date();
  // let correntTime=
};

// const [data, setData] = useState([]);
// let _localUrl = "http://localhost:4000/sqlgeneral";

// useEffect(() => {
//   axios
//     .get(_localUrl)
//     .then(function (response) {
//       setData(response.data);
//     })
//     .catch((err) => {
//       if (err.response) {
//         console.log(err.response);
//         console.log(err.response.headers);
//         console.log(err.response.status);
//       }
//     });
// }, []);
