$(document).ready(function() {
    // 이미지 영역 클릭 시 URL 입력받고 이미지 변경
    $('.profile-image').click(function() { // 원 안의 영역을 클릭
        // 사용자가 입력한 URL을 프롬프트로 받기
        var imageUrl = prompt("새로운 이미지 URL을 입력하세요:", "");

        // URL이 입력된 경우에만 이미지 변경
        if (imageUrl) {
            var $this = $(this).find('img'); // 클릭된 원 안의 이미지를 변수에 저장

            // 이미지 URL을 새로운 이미지로 변경
            $this.attr('src', imageUrl);
            $this.attr('alt', ''); // alt 텍스트를 비워서 대체 텍스트가 보이지 않도록 설정

            // 이미지가 로딩되지 않았을 때 대체 텍스트를 표시
            $this.on('load', function() {
                $(this).siblings('.profile-initials').hide(); // 대체 텍스트 숨기기
            }).on('error', function() {
                $(this).siblings('.profile-initials').css('display', 'flex'); // 대체 텍스트 보이기
            });

            // 대체 텍스트가 보이는 상태로 초기화
            $(this).find('.profile-initials').css('display', 'none'); // 대체 텍스트 숨기기
        } else {
            alert("URL을 입력해야 이미지를 변경할 수 있습니다.");
        }
    });

    // 아이디 변경 아이콘 클릭 시
    $('.fa-gear').click(function() {
        // 경고창을 띄워서 새로운 아이디 입력 받기
        var newId = prompt("새로운 아이디를 입력하세요:", "");

        // 아이디가 입력되었을 경우
        if (newId) {
            // 아이디를 변경 (아이디 부분에 있는 요소를 찾아서 변경)
            $(".user-id").text("@" + newId);
        } else {
            alert("아이디를 입력해야 변경할 수 있습니다.");
        }
    });
});
