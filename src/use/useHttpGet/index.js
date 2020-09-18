import { reactive, toRefs } from "vue";
import axios from "axios";

const useHttpGet = (endpoint) => {
  const state = reactive({
    data: {},
    loading: true,
    error: null,
  });

  axios
    .get(endpoint)
    .then((res) => (state.data = res.data))
    .catch((err) => (state.error = err.response.data))
    .finally(() => (state.loading = false));

  return toRefs(state);
};

export default useHttpGet;
