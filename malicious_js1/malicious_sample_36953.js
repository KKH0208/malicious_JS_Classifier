var pagecont=1;
                    if(pagecont >= 2)
                    {
                    var ss = new Cls_jsPage(1, 1, 5, "ss");
                    ss.setPageSE("tingyuanyuchishejigu_", ".html");
                    ss.setPageInput("Page");
                    ss.setUrl("");
                    ss.setPageFrist("<a disabled='true'class='ob'>首页</a>", "首页");
                    ss.setPagePrev("<a disabled='true'class='ob'>上一页</a>", "上一页");
                    ss.setPageNext("<a disabled='true'class='ob'>下一页</a>", "下一页");
                    ss.setPageLast("<a disabled='true'class='ob'>尾页</a>", "尾页");
                    ss.setPageText("{$PageNum}", "{$PageNum}");
                    ss.setPageTextF("{$PageTextF}", "{$PageTextF}");
                    ss.setPageSelect("{$PageNum}", "{$PageNum}");
                    ss.setPageCss("o", "", "");
                    ss.setHtml("<div class='o'>{$PageFrist}{$PagePrev}{$PageText}{$PageNext}{$PageLast}</div>");
                    ss.Write();
                    }
                    else
                    {
                        document.getElementById("showfenye").style.display="none";
                    }