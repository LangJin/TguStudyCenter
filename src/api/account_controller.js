import axios from '@/common/js/baseHttp.js';

//登录注册
export const postValicode = (phone) => {
  return axios.post(`/account/getValicode/${phone}`).then(res => res.data);
};

export const postRegister = (params) => {
  return axios.post('/account/saveRegister', params).then(res => res.data);
};

export const postLogin = (params) => {
  return axios.post('/account/getLogin', params).then(res => res.data);
};

export const postUpdatePwd = (params) => {
  return axios.post('/account/updateForgetPwd', params).then(res => res.data);
};

//个人中心
export const postStudentPersonalMessage = () => {
  return axios.post('/open/personal/getStudentPersonalMessage').then(res => res.data);
};

export const postAttentionList = (pageSize,pageNum) => {
  return axios.post(`/open/followRecord/getMyFollowRecordList/${pageSize}/${pageNum}`).then(res => res.data);
};

export const postCancelUserFollowRecord = (data) => {
  return axios.post('/open/followRecord/saveUserFollowRecord',data).then(res => res.data);
};

export const postGetMyArticleList = (pageSize,pageNum) => {
  return axios.post(`/open/article/getMyArticleList/${pageSize}/${pageNum}`).then(res => res.data);
};

export const postDeleteArticle = (articleId) => {
  return axios.post(`/open/article/deleteArticle/${articleId}`).then(res => res.data);
};


//文章详情
export const postGetArticle = (articleId) => {
  return axios.post(`/open/article/release/getArticle/${articleId}`).then(res => res.data);
};

export const postGetCommentList = (pageSize,pageNum,type,typeId) => {
  return axios.post(`/open/comment/release/getCommentList/${pageSize}/${pageNum}/${type}/${typeId}`).then(res => res.data);
};

export const postSaveComment = (data) => {
  return axios.post('/open/comment/saveComment',data).then(res => res.data);
};

export const postDeleteComment = (commentId) => {
  return axios.post(`/open/comment/deleteComment/${commentId}`).then(res => res.data);
};

export const postGetCommentReplyList = (pageSize,pageNum,commentId) => {
  return axios.post(`/open/commentReply/release/getCommentReplyList/${pageSize}/${pageNum}/${commentId}`).then(res => res.data);
};       

export const postSaveCommentReply = (data) => {
  return axios.post('/open/commentReply/saveCommentReply',data).then(res => res.data);
}; 

export const postDeleteCommentReply = (replyId) => {
  return axios.post(`/open/commentReply/deleteCommentReply/${replyId}`).then(res => res.data);
};   

//点赞
export const postSaveUserLikeRecord = (data) => {
  return axios.post('/open/likeRecord/saveUserLikeRecord',data).then(res => res.data);
};   

//问题详情
export const postGetQuestion = (questionId) => {
  return axios.post(`/open/question/release/getQuestion/${questionId}`).then(res => res.data);
}

//获取问题回答列表
export const getAnswerList = (questionId, pageSize, pageNum) => {
  return axios.get(`/open/question/release/getAnswerList/${questionId}/${pageSize}/${pageNum}`).then(res => res.data);
}

//删除回答
export const postDeleteAnswer = (answerId) => {
  return axios.post(`/open/question/deleteAnswer/${answerId}`).then(res => res.data);
}
