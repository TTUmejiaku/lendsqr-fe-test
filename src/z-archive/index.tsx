// useEffect(() => {
//   const handleEscapePress = (event: KeyboardEvent) => {
//     if (event.key === "Escape") {
//       setActiveColumnId(null);
//     }
//   };

//   if (isColumnActive) {
//     document.addEventListener("keydown", handleEscapePress);
//   }

//   return () => {
//     document.removeEventListener("keydown", handleEscapePress);
//   };
// }, [isColumnActive, setActiveColumnId]);

{
  /* {isColumnActive && (
        <div ref={filterRef} className='table__filter'>
          filter content
        </div>
      )} */
}
// const rowsArray = Object.values(table.getRowModel().rowsById);

// useLayoutEffect(() => {
//   const orgColumn = table.getColumn("orgName");
//   const statusColumn = table.getColumn("status");

//   if (orgColumn?._getFacetedUniqueValues) {
//     setCachedOrgUniqueValues(
//       Array.from(orgColumn._getFacetedUniqueValues().keys())
//     );
//   }

//   if (statusColumn?._getFacetedUniqueValues) {
//     setCachedStatusUniqueValues(
//       Array.from(statusColumn._getFacetedUniqueValues().keys())
//     );
//   }
// }, []);

// export const useColumnUniqueValues = <TData>({
//   rowsArray,
//   columnKey,
// }: {
//   rowsArray: Row<TData>[];
//   columnKey: keyof TData;
// }) => {
//   const uniqueValues = useMemo(() => {
//     return rowsArray.reduce((acc: string[], curr) => {
//       const rowData = curr.original;
//       const value = rowData[columnKey];

//       // Ensure the value is a string before including it
//       if (typeof value === "string" && !acc.includes(value)) {
//         acc.push(value);
//       }

//       return acc;
//     }, []);
//   }, [rowsArray, columnKey]);

//   return uniqueValues;
// };
