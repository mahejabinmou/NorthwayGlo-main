const useGetMatcResult = (id, arr) => {
  const result = arr.filter((item) => item.id === Number(id));
  return result.length > 0 ? result[0] : null;
};

export default useGetMatcResult;
