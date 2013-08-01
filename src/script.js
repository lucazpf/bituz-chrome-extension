 $(document).ready(function () {
                chrome.tabs.getSelected(null, function (tab) {
                    $.ajax({
                        url: "http://bit.uz/api/rail/?url=" + tab.url,
                        data: "",
                        success: function (data) {
                            $("#url").val(data);
                            $("#url").focus();
                            $("#url").select();
                            document.execCommand("Copy");
                        },
                        error: function (XMLHttpRequest, textStatus, errorThrown) {
                            $("#url").val("Error with ajax Function: " + textStatus + " " + errorThrown);
                        }
                    });
                });
            });
