// Api 호출을 처리하는 파일
import axios from 'axios';

// 회원가입
export const register = async (userData: any) => {
  console.log(userData);
  try {
    const response = await axios.post(
      process.env.REACT_APP_BACKSERVER + '/register',
      userData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('예상치 못한 오류가 발생했습니다!');
  }
};

// 로그인
export const login = async (userData: any) => {
  console.log(userData);
  console.log(process.env.REACT_APP_BACKSERVER);
  try {
    const response = await axios.post(
      process.env.REACT_APP_BACKSERVER + '/login',
      userData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('예상치 못한 오류가 발생했습니다!');
  }
};

export const idChecker = async (userData: any) => {
  console.log(userData);
  console.log(process.env.REACT_APP_BACKSERVER);
  try {
    const response = await axios.post(
      process.env.REACT_APP_BACKSERVER + '/idValidate',
      userData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('예상치 못한 오류가 발생했습니다!');
  }
};

export const nicknameChecker = async (userData: any) => {
  console.log(userData);
  console.log(process.env.REACT_APP_BACKSERVER);
  try {
    const response = await axios.post(
      process.env.REACT_APP_BACKSERVER + '/nicknameValidate',
      userData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('예상치 못한 오류가 발생했습니다!');
  }
};

export const FindId = async (userData: any) => {
  console.log(userData);
  try {
    const response = await axios.post(
      process.env.REACT_APP_BACKSERVER + '/findId',
      userData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('예상치 못한 오류가 발생했습니다!');
  }
};

export const FindPw = async (userData: any) => {
  console.log(userData);
  try {
    const response = await axios.post(
      process.env.REACT_APP_BACKSERVER + '/findPw',
      userData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('예상치 못한 오류가 발생했습니다!');
  }
};

export const ChangePw = async (userData: any) => {
  console.log(userData);
  try {
    const response = await axios.post(
      process.env.REACT_APP_BACKSERVER + '/changePw',
      userData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('예상치 못한 오류가 발생했습니다!');
  }
};

// 커뮤니티 게시글 생성
export const newPost = async (communityData: any) => {
  console.log('communityData>', communityData);
  console.log('Sending POST request to /community/write');
  try {
    const response = await axios.post(
      process.env.REACT_APP_BACKSERVER + '/community/write',
      communityData,
      {
        headers: {
          // form-data 전송
          // 'Content-Type': 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.log(process.env.REACT_APP_BACKSERVER + '/community/write');
    throw new Error('예상치 못한 오류가 발생했습니다! (게시글 입력)');
  }
};

// 커뮤니티 게시글 가져오기 (커뮤니티 메인 화면에 띄우기)
export const getCommunityPosts = async () => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_BACKSERVER + '/community/read'
    );
    return response.data;
  } catch (error) {
    console.error(error); // 에러 메시지를 콘솔에 출력
    throw new Error('예상치 못한 오류가 발생했습니다! (게시글 불러오기)');
  }
};

// 댓글 서버로 보내기
export const postComment = async (commentData: any) => {
  console.log('commentData >', commentData);
  console.log('Sending POST request to /community/comment');
  try {
    const response = await axios.post(
      process.env.REACT_APP_BACKSERVER + '/community/commentWrite',
      commentData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.log(process.env.REACT_APP_BACKSERVER + '/community/commentWrite');
    throw new Error('예상치 못한 오류가 발생했습니다!(댓글 입력)');
  }
};

// 댓글 가져오기
export const getComment = async (postId: any) => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_BACKSERVER + '/community/commentRead',
      { params: { postId } }
    );
    return response.data;
  } catch (error) {
    console.error(error); // 에러 메시지를 콘솔에 출력
    throw new Error('예상치 못한 오류가 발생했습니다! (댓글 불러오기)');
  }
};

// 좋아요
export const addLike = async (likeData: any) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_BACKSERVER + '/community/like',
      likeData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('예상치 못한 오류가 발생했습니다!');
  }
};

// 좋아요 순위로 5개 가져오기
export const getCommunityRank = async () => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_BACKSERVER + '/community/rank'
    );
    return response.data;
  } catch (error) {
    console.error(error); // 에러 메시지를 콘솔에 출력
    throw new Error('예상치 못한 오류가 발생했습니다! (게시글 불러오기)');
  }
};

// 대댓글 작성
export const postReply = async (replyData: any) => {
  console.log('replyData >', replyData);
  console.log('Sending POST request to /community/replyWrite');
  try {
    const response = await axios.post(
      process.env.REACT_APP_BACKSERVER + '/community/replyWrite',
      replyData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.log(process.env.REACT_APP_BACKSERVER + '/community/replyWrite');
    throw new Error('예상치 못한 오류가 발생했습니다!(댓글 입력)');
  }
};

// 대댓글 불러오기
export const getReply = async (data: any) => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_BACKSERVER + '/community/replyRead',
      { params: { data } }
    );
    return response.data;
  } catch (error) {
    console.error(error); // 에러 메시지를 콘솔에 출력
    throw new Error('예상치 못한 오류가 발생했습니다! (댓글 불러오기)');
  }
};

// 클릭한 단어의 설명 출력하기
export const GetWord = async (word: string) => {
  console.log(word);
  try {
    const response = await axios.get(
      process.env.REACT_APP_BACKSERVER + '/virtual/vocabulary',
      {
        params: {
          eng_word: word,
        },
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('예상치 못한 오류가 발생했습니다!');
  }
};

// 모의 투자
export const sell = async (userData: any) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_BACKSERVER + '/virtual/profit',
      userData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('예상치 못한 오류가 발생했습니다!');
  }
};

export const showRecord = async (useData: any) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_BACKSERVER + '/virtual/record',
      useData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('예상치 못한 오류가 발생했습니다!');
  }
};

export const calProfitAndLoss = async (useData: any) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_BACKSERVER + '/virtual/profitandloss',
      useData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error('P&L 전송 중 오류 발생');
  }
};

// 카카오
export const kakaoLogin = async (code: any) => {
  axios
    .get('http://localhost:8000/kakao/login', {
      params: { code },
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      console.log('카카오 로그인 성공');
      console.log(res.data);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const kakaoLogout = async (uri: any, data: any, headers: any) => {
  try {
    var rtn = await axios({
      method: 'POST',
      url: uri,
      data: data,
      headers: headers,
    });
    console.log('카카오 로그아웃 아이디', rtn.data);
  } catch (error) {
    console.log('카카오 로그아웃 실패');
    console.log(error);
  }
};

export const getKakaoId = async (token: String) => {
  try {
    console.log('카카오 아이디 찾기 시작');
    console.log(token);
    const uri = process.env.REACT_APP_API_HOST + '/v2/user/me';
    const param = {};
    const header = {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      Authorization: `Bearer ${token}`,
    };
    const rtn = await axios({
      method: 'POST',
      url: uri,
      data: param,
      headers: header,
    });
    console.log('카카오 토큰으로 아이디 찾기', rtn);
    // return rtn.data.id;
  } catch (error) {
    console.log('카카오 아이디 찾기 에러', error);
  }
};

export const deleteKakao = async (kakaoToken: String) => {
  try {
    const rtn = await axios.post(
      process.env.REACT_APP_BACKSERVER + '/kakao/exit',
      { kakaoToken },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(rtn.data);
    console.log('카카오 회원탈퇴');
    return rtn.data;
  } catch (error) {
    console.log(error);
  }
};

// 마이페이지
export const userInfo = async (userData: any) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_BACKSERVER + '/mypage/getUserInfo',
      userData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('예상치 못한 오류가 발생했습니다!');
  }
};

export const myNicknameChecker = async (
  userData: any,
  currentUserId: String
) => {
  console.log(userData);
  console.log(currentUserId);
  try {
    const response = await axios.post(
      process.env.REACT_APP_BACKSERVER + '/mypage/checkUserNickname',
      { userData, currentUserId },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('예상치 못한 오류가 발생했습니다!');
  }
};

export const myPwChecker = async (userData: any, currentUserId: String) => {
  console.log(userData);
  console.log(currentUserId);
  try {
    const response = await axios.post(
      process.env.REACT_APP_BACKSERVER + '/mypage/checkUserPassword',
      { userData, currentUserId },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('예상치 못한 오류가 발생했습니다!');
  }
};

export const modifyUser = async (userData: any, currentUserId: String) => {
  console.log(userData);
  try {
    const response = await axios.post(
      process.env.REACT_APP_BACKSERVER + '/mypage/modifyUserInfo',
      { userData, currentUserId },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.log('회원정보 수정 요청 실패');
  }
};

export const deleteUser = async (currentUserId: String) => {
  try {
    console.log('일반 회원 탈퇴 요청', currentUserId);
    const response = await axios.post(
      process.env.REACT_APP_BACKSERVER + '/mypage/deleteUserinfo',
      { currentUserId },
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.log('회원정보 삭제 요청 실패');
  }
};

// 뉴스
export const mainNews = async () => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_BACKSERVER + '/news/mainNews',
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('예상치 못한 오류가 발생했습니다!');
  }
};

export const mainBoards = async () => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_BACKSERVER + '/community/mainBoards',
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('예상치 못한 오류가 발생했습니다!');
  }
};

export const wordBook = async (userData: any) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_BACKSERVER + '/news/likedWords',
      userData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('예상치 못한 오류가 발생했습니다!');
  }
};
