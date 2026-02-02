/* 元のURL: https://slack.com */
window.TD = window.TD || {};
window.TD.boot_data = window.TD.boot_data || {};
TD.boot_data.xhp = true;
TD.boot_data.version_uid = "2521bccd8d807c8087b761c296423055d30d76d8";
TD.boot_data.environment = "prod";
TD.boot_data.abs_root_url = "https:\/\/slack.com\/";
TD.boot_data.document_referrer = "";

TD.boot_data.anonymous_visitor = false;
TD.boot_data.beacon_timing_url = "https:\/\/slack.com\/beacon\/timing";
TD.boot_data.referral_code = "";
TD.boot_data.auth_cookie_domain = ".slack.com";

TD.boot_data.geo = {"ip":"121.82.62.77","country":"JP","is_in_european_union":false,"region":"25","city":"\u014ctsu","zip":"520-0041","lat":35.0104,"lon":135.8707,"metro":0,"country_label":"Japan","region_label":"Shiga","country3":"JPN","continent":"AS","isp":"K-Opticom Corporation"};
TD.boot_data.geocode = "ja-jp";
TD.boot_data.intl_prefix = "\/intl\/ja-jp";
TD.boot_data.request_uri = "\/intl\/ja-jp\/";
TD.boot_data.canonical_web_url = "https:\/\/slack.com\/intl\/ja-jp\/";
TD.boot_data.i18n_locale = "ja-JP";
TD.boot_data.geo_root_url = "https:\/\/slack.com\/intl\/ja-jp\/";

TD.boot_data.is_usa = false;
TD.boot_data.is_spain = false;
TD.boot_data.is_germany = false;
TD.boot_data.is_france = false;
TD.boot_data.is_japan = true;
TD.boot_data.is_europe = false;

TD.boot_data.is_latam = false;
TD.boot_data.is_brazil = false;
TD.boot_data.is_india = false;
TD.boot_data.is_uk = false;

TD.boot_data.is_english = false;
TD.boot_data.is_spanish = false;
TD.boot_data.is_german = false;
TD.boot_data.is_french = false;
TD.boot_data.is_japanese = true;
TD.boot_data.is_portuguese = false;

TD.boot_data.job_board_token = "slack";
TD.boot_data.zd_locale = "en-us";

TS.boot_data = {};
_.extend(TD.boot_data, TS.boot_data);

TD.model.user_id = TD.boot_data.user_id;

TD.model.user_realname  = TD.boot_data.user_realname;
TD.model.user_email = TD.boot_data.user_email;

TD.model.team_id = TD.boot_data.team_id;
TD.model.team_url = TD.boot_data.team_url;
TD.model.team_domain = TD.boot_data.team_domain;
TD.model.visitor_uid = "4262c38edd52ce564b849b81fae29a18";
TD.model.enterprise_id = TD.boot_data.enterprise_id;

TD.model.session_id = "4262c38edd52ce564b849b81fae29a18.1761683677";
TD.model.session_is_fresh = true;

TD.model.is_first_visit = false;
TD.model.is_customer =  (TD.model.visitor_uid.indexOf('.') == 0);
TD.model.is_prospect = !TD.model.is_customer;
TD.model.is_signed_in = !!(TD.model.user_id);

TD.model.num_signed_in_users = 0;
TD.model.is_enterprise = !!(TD.boot_data.enterprise_id);
TD.cms = {};
TD.cms.is_cms = false;
TD.cms.is_preview = false;
TD.cms.is_home = false;
TD.cms.is_index = false;
TD.cms.is_single = false;
TD.cms.is_tag = false;
TD.cms.is_collection = false;
TD.cms.asset_id = 0;
TD.model.curr_plan = '';
TD.boot_data.clog_ui_step = "page_home";
if(TD.boot_data.team_id) TD.clog.setTeam(TD.boot_data.team_id);
if(TD.boot_data.user_id) TD.clog.setUser(TD.boot_data.user_id);
TD.boot_data.is_ls_eligible = false;
TD.boot_data.should_ls_load = false;
TD.boot_data.experiments = ["hp_cta_get_started_free.treatment","hp_de_get_started_ctas.treatment","get_started_opt_intl_existing_user.treatment","global_demo_cta_v3.treatment_a","slack_trials_tof.aa_treatment","downloads_s2p_promo.control"];


