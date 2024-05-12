// const useURL = () => {
//   const url = "http://localhost:5000";
//   return url;
// };

// export default useURL;

// function MyDatePicker() {
//   const [selectedDate, setSelectedDate] = useState(null); // Initially null, or you can set it to a default date

//   useEffect(() => {
//     // Assuming you get the date value from somewhere and it's in string format
//     const fetchedDate = '2024-05-12'; // Example date in ISO format (YYYY-MM-DD)
//     setSelectedDate(new Date(fetchedDate)); // Convert the string to a Date object
//   }, []);
// return (
//     <DatePicker
//       selected={selectedDate}
//       onChange={date => setSelectedDate(date)}
//     />
//   );
