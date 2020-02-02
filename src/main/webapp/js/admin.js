// 기본설정
var basic = {
	// 저장
	save: function() {
		if(!confirm("저장하시겠습니까?")) return false;
		
		var form = document.configRegistForm;
		var title = document.configRegistForm.title;
		var copyright = document.configRegistForm.copyright;
		var regexTrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

		// 앞뒤 공백 제거
		title.value = title.value.replace(regexTrim, '');
		copyright.value = copyright.value.replace(regexTrim, '');

		if(title.value == ""){
			alert("홈페이지 제목은 필수 항목입니다.");
			title.focus();
			return false;
		}

		form.action = "";
		form.submit();
	}
}

// 메뉴설정
var menu = {
	// 리스트 페이지
	list: function() {
		location.href = "/setting/menu/list.html";
	},
	// 등록 페이지
	create: function() {
		location.href = "/setting/menu/regist.html";		
	},
	// 하위 메뉴 등록
	createChild: function( parentNo ) {
		if(typeof(parentNo) === "undefined") return;

		var form = document.menuListForm;
		
		form.parentNo.value = parentNo;
		form.action = "/setting/menu/regist.html";
		form.submit();	
	},
	// 수정 페이지
	update: function( menuNo ) {
		if(typeof(menuNo) === "undefined") return;

		var form = document.menuListForm;

		form.menuNo.value = menuNo;
		form.action = "/setting/menu/regist.html";
		form.submit();
	},
	// 저장
	save: function() {
		if(!confirm("저장하시겠습니까?")) return false;
		
		var form = document.menuRegistForm;
		var regexTrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
		var regexNumber = /^[0-9]*$/;

		// 앞뒤 공백 제거
		form.menuNo.value = form.menuNo.value.replace(regexTrim, '');
		form.menuName.value = form.menuName.value.replace(regexTrim, '');
		form.menuUrl.value = form.menuUrl.value.replace(regexTrim, '');

		if(form.menuNo.value == ""){
			alert("메뉴번호는 필수 항목입니다.");
			form.menuNo.focus();
			return false;
		}

		if(!regexNumber.test(form.menuNo.value) || form.menuNo.value.length < 6){
			alert("메뉴번호는 6자리 숫자만 입력 가능합니다.");
			form.menuNo.focus();
			return false;
		}

		if(form.menuName.value == ""){ 
			alert("메뉴명은 필수 항목입니다.");
			form.menuName.focus();
			return false;
		}

		if(form.menuUrl.value == ""){ 
			alert("경로는 필수 항목입니다.");
			form.menuUrl.focus();
			return false;
		}

		form.action = "";
		form.submit();
	},
	// 삭제
	delete: function( menuNo ) {
		if(!confirm("메뉴를 삭제하시겠습니까?")) return;
		if(typeof(menuNo) === "undefined") return;

		var form = document.menuListForm;

		form.menuNo.value = menuNo;
		form.action = "";
		form.submit();
	},
	// 선택 삭제
	deleteChecked: function() {
		var form = document.menuListForm;
		var checkboxs = document.getElementsByName('menuNos[]');
		var result = false;

		if(typeof(checkboxs) !== "undefined" || checkboxs.length > 0) {
			for(var i=0; i < checkboxs.length; i++) {
				if(checkboxs[i].checked) {
					result = true;
					break;
				}
			}
		}

		if(result == false) {
			alert("선택된 메뉴가 없습니다.");
			return;
		}

		if(!confirm("선택된 메뉴를 삭제하시겠습니까?")) return;

		form.action = "";
		form.submit();
	},
	// 체크박스 전체 선택
	checkAll: function() {
		var checkbox = document.getElementById('checkAll');
		var checkboxs = document.getElementsByName('menuNos[]');

		if(typeof(checkboxs) !== "undefined" || checkboxs.length > 0) {
			for(var i=0; i < checkboxs.length; i++) {
				checkboxs[i].checked = checkbox.checked;
			}
		}
	}
}

// 팝업설정
var popup = {
	// 리스트 페이지
	list: function() {
		location.href = "/setting/popup/list.html";
	},
	// 등록 페이지
	create: function() {
		location.href = "/setting/popup/regist.html";
	},
	// 수정 페이지
	update: function( popupNo ) {
		if(typeof(popupNo) === "undefined") return;

		var form = document.popupListForm;

		form.popupNo.value = popupNo;
		form.action = "/setting/popup/regist.html";
		form.submit();
	},
	// 저장
	save: function() {
		if(!confirm("저장하시겠습니까?")) return false;
		
		var form = document.popupRegistForm;
		var regexTrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
		var regexDatetime =  /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])\s([1-9]|[01][0-9]|2[0-3]):([0-5][0-9])$/;

		// 앞뒤 공백 제거
		form.popupName.value = form.popupName.value.replace(regexTrim, '');
		form.popupUrl.value = form.popupUrl.value.replace(regexTrim, '');
		form.popupStart.value = form.popupStart.value.replace(regexTrim, '');
		form.popupEnd.value = form.popupEnd.value.replace(regexTrim, '');

		if(form.popupName.value == ""){ 
			alert("팝업명은 필수 항목입니다.");
			form.popupName.focus();
			return false;
		}

		if(form.popupUrl.value == ""){ 
			alert("경로는 필수 항목입니다.");
			form.popupUrl.focus();
			return false;
		}

		if(form.popupFile.value == ""){ 
			alert("이미지는 필수 항목입니다.");
			form.popupFile.focus();
			return false;
		}

		if(form.popupStart.value == ""){ 
			alert("시작일시는 필수 항목입니다.");
			form.popupStart.focus();
			return false;
		}

		if(!regexDatetime.test(form.popupStart.value)){ 
			alert("시작일시를 바르게 입력해주세요.");
			form.popupStart.focus();
			return false;
		}

		if(form.popupEnd.value == ""){ 
			alert("종료일시는 필수 항목입니다.");
			form.popupEnd.focus();
			return false;
		}

		if(!regexDatetime.test(form.popupEnd.value)){ 
			alert("종료일시를 바르게 입력해주세요.");
			form.popupEnd.focus();
			return false;
		}

		form.action = "";
		form.submit();
	},
	delete: function( popupNo ) {
		if(!confirm("팝업을 삭제하시겠습니까?")) return;
		if(typeof(popupNo) === "undefined") return;

		var form = document.popupListForm;

		form.popupNo.value = popupNo;
		form.action = "";
		form.submit();
	},
	// 선택 삭제
	deleteChecked: function() {
		var form = document.popupListForm;
		var checkboxs = document.getElementsByName('popupNos[]');
		var result = false;

		if(typeof(checkboxs) !== "undefined" || checkboxs.length > 0) {
			for(var i=0; i < checkboxs.length; i++) {
				if(checkboxs[i].checked) {
					result = true;
					break;
				}
			}
		}

		if(result == false) {
			alert("선택된 팝업이 없습니다.");
			return;
		}

		if(!confirm("선택된 팝업을 삭제하시겠습니까?")) return;

		form.action = "";
		form.submit();
	},
	// 체크박스 전체 선택
	checkAll: function() {
		var checkbox = document.getElementById('checkAll');
		var checkboxs = document.getElementsByName('popupNos[]');

		if(typeof(checkboxs) !== "undefined" || checkboxs.length > 0) {
			for(var i=0; i < checkboxs.length; i++) {
				checkboxs[i].checked = checkbox.checked;
			}
		}
	}
}

// 배너설정
var banner = {
	// 리스트 페이지
	list: function() {
		location.href = "/setting/banner/list.html";
	},
	// 등록 페이지
	create: function() {
		location.href = "/setting/banner/regist.html";
	},
	// 수정 페이지
	update: function( bannerNo ) {
		if(typeof(bannerNo) === "undefined") return;

		var form = document.bannerListForm;

		form.bannerNo.value = bannerNo;
		form.action = "/setting/banner/regist.html";
		form.submit();
	},
	// 저장
	save: function() {
		if(!confirm("저장하시겠습니까?")) return false;
		
		var form = document.bannerRegistForm;
		var regexTrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
		var regexDatetime =  /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])\s([1-9]|[01][0-9]|2[0-3]):([0-5][0-9])$/;

		// 앞뒤 공백 제거
		form.bannerName.value = form.bannerName.value.replace(regexTrim, '');
		//form.bannerUrl.value = form.bannerUrl.value.replace(regexTrim, '');
		form.bannerStart.value = form.bannerStart.value.replace(regexTrim, '');
		form.bannerEnd.value = form.bannerEnd.value.replace(regexTrim, '');

		if(form.bannerName.value == ""){ 
			alert("배너명은 필수 항목입니다.");
			form.bannerName.focus();
			return false;
		}

		/*
		if(form.bannerUrl.value == ""){ 
			alert("경로는 필수 항목입니다.");
			form.bannerUrl.focus();
			return false;
		}
		*/

		if(form.bannerFile.value == ""){ 
			alert("이미지는 필수 항목입니다.");
			form.bannerFile.focus();
			return false;
		}

		if(form.bannerStart.value == ""){ 
			alert("시작일시는 필수 항목입니다.");
			form.bannerStart.focus();
			return false;
		}

		if(!regexDatetime.test(form.bannerStart.value)){ 
			alert("시작일시를 바르게 입력해주세요.");
			form.bannerStart.focus();
			return false;
		}

		if(form.bannerEnd.value == ""){ 
			alert("종료일시는 필수 항목입니다.");
			form.bannerEnd.focus();
			return false;
		}

		if(!regexDatetime.test(form.bannerEnd.value)){ 
			alert("종료일시를 바르게 입력해주세요.");
			form.bannerEnd.focus();
			return false;
		}

		form.action = "";
		form.submit();
	},
	delete: function( bannerNo ) {
		if(!confirm("배너를 삭제하시겠습니까?")) return;
		if(typeof(bannerNo) === "undefined") return;

		var form = document.bannerListForm;

		form.bannerNo.value = bannerNo;
		form.action = "";
		form.submit();
	},
	// 선택 삭제
	deleteChecked: function() {
		var form = document.bannerListForm;
		var checkboxs = document.getElementsByName('bannerNos[]');
		var result = false;

		if(typeof(checkboxs) !== "undefined" || checkboxs.length > 0) {
			for(var i=0; i < checkboxs.length; i++) {
				if(checkboxs[i].checked) {
					result = true;
					break;
				}
			}
		}

		if(result == false) {
			alert("선택된 배너가 없습니다.");
			return;
		}

		if(!confirm("선택된 배너를 삭제하시겠습니까?")) return;

		form.action = "";
		form.submit();
	},
	// 체크박스 전체 선택
	checkAll: function() {
		var checkbox = document.getElementById('checkAll');
		var checkboxs = document.getElementsByName('bannerNos[]');

		if(typeof(checkboxs) !== "undefined" || checkboxs.length > 0) {
			for(var i=0; i < checkboxs.length; i++) {
				checkboxs[i].checked = checkbox.checked;
			}
		}
	}
}