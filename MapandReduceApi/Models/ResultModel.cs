    public class ResultModel
    {
        public bool Success { get; set; }
        public dynamic Data { get; set; }
        public string ErrorMsg { get; set; }
        public ResultModel(dynamic data)
        {
            Success = true;
            Data = data;
        }
        public ResultModel(string error)
        {
            Success = false;
            ErrorMsg = error;
        }
    }