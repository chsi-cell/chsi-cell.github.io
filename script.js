(function () {
  var allowedCode = "A4NFW2HLZRCQRX2W";
  var reportForm = document.getElementById("reportSearch");
  var verifyCode = document.getElementById("verifyCode");
  var message = document.getElementById("formMessage");
  var topSearch = document.getElementById("topSearch");
  var realQuery = document.getElementById("realQuery");
  var share = document.getElementById("share");

  if (reportForm) {
    if (new URLSearchParams(window.location.search).get("error") === "invalid-code") {
      message.textContent = "在线验证码不存在或不正确";
    }

    reportForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var value = verifyCode.value.trim();
      if (!value) {
        message.textContent = "请输入报告中的在线验证码";
        verifyCode.focus();
        return;
      }
      if (value.toUpperCase() !== allowedCode) {
        message.textContent = "在线验证码不存在或不正确";
        verifyCode.focus();
        return;
      }
      message.textContent = "";
      window.location.href = "./report.html?vcode=" + encodeURIComponent(allowedCode) + "&srcid=bgcx";
    });

    verifyCode.addEventListener("input", function () {
      if (message.textContent) {
        message.textContent = "";
      }
    });
  }

  if (topSearch) {
    topSearch.addEventListener("submit", function () {
      var query = topSearch.querySelector('input[name="query"]').value.trim();
      realQuery.value = query ? "site:chsi.com.cn " + query : "site:chsi.com.cn";
    });
  }

  if (share) {
    share.querySelector(".share-tab").addEventListener("click", function () {
      share.classList.toggle("open");
    });
  }

  var reportCode = document.getElementById("reportCode");
  if (reportCode) {
    var params = new URLSearchParams(window.location.search);
    var code = (params.get("vcode") || "").toUpperCase();
    if (code !== allowedCode) {
      window.location.replace("./index.html?error=invalid-code");
      return;
    }
    reportCode.textContent = allowedCode;
  }

  var updateTime = document.getElementById("updateTime");
  if (updateTime) {
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    var year = yesterday.getFullYear();
    var month = String(yesterday.getMonth() + 1).padStart(2, "0");
    var day = String(yesterday.getDate()).padStart(2, "0");
    updateTime.textContent = "更新日期：" + year + "年" + month + "月" + day + "日";
  }

  var printButton = document.querySelector(".print-report");
  if (printButton) {
    printButton.addEventListener("click", function () {
      window.print();
    });
  }

  var downloadButton = document.querySelector(".download-pdf");
  if (downloadButton) {
    downloadButton.addEventListener("click", function () {
      document.body.classList.add("pdf-print");
      window.print();
      window.setTimeout(function () {
        document.body.classList.remove("pdf-print");
      }, 500);
    });
  }
})();
