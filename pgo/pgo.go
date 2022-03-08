package footsites

import (
	client "Golang-Sitescripts/client"
	"bytes"
	"fmt"
	"net/url"
	"strings"
)

func GetCrsfToken() (r string) {
	fmt.Println("starting")
	//Setup our GET request obj
	get := client.GET{
		Endpoint: "https://club.pokemon.com/us/pokemon-trainer-club/sign-up/",
	}
	//Retrieve a configured HTTP Request obj
	request := client.NewRequest(get)
	//Add our headers to the HTTP Request obj
	//	request.Header = AddHeaders(Header{cookie: []string{}, content: nil}, host)
	//Obtain the responsey
	respBytes, _ := client.NewResponse(request)
	result := string(respBytes)
	resString := GetStringInBetween(result, `value='`, ">")
	test := strings.Split(resString, "'")
	fmt.Println(`resstring`)
	fmt.Println(test[0])

	return test[0]
}

func Test() {
	get := client.GET{
		Endpoint: "https://club.pokemon.com/us/pokemon-trainer-club/parents/requestProvider.js.map",
	}
	request := client.NewRequest(get)
	respBytes, _ := client.NewResponse(request)
	result := string(respBytes)
	fmt.Println(result)
}
func Test2() {
	get := client.GET{
		Endpoint: "https://club.pokemon.com/us/pokemon-trainer-club/parents/sign-up",
	}

	request := client.NewRequest(get)
	respBytes, _ := client.NewResponse(request)
	result := string(respBytes)
	fmt.Println(result)
}
func Test3() {
	get := client.GET{
		Endpoint: "https://cdn.cookielaw.org/consent/d6bbcacc-8935-4719-a825-f6d8c39216e7/59d2291a-bb31-403e-bb25-4f9865f85eae/en.json",
	}

	request := client.NewRequest(get)
	respBytes, _ := client.NewResponse(request)
	result := string(respBytes)
	fmt.Println(result)
}
func Test4() {
	get := client.GET{
		Endpoint: "https://bam-cell.nr-data.net/1/ba34eb72cb?a=1087113,18181175&v=1215.1253ab8&to=MgFaZkVVWBBXABIPWAtLfkdZV0IKWQ1JAl0ECl9dGVdZEVNNDgdZAQhdQEQaQRBRClwxZCItcFNZUFoGRE05OVQECFRtaA%3D%3D&rst=1674&ck=1&ref=https://club.pokemon.com/us/pokemon-trainer-club/parents/sign-up&ap=26&be=906&fe=1419&dc=1196&af=err,xhr,stn,ins,spa&perf=%7B%22timing%22:%7B%22of%22:1646773538009,%22n%22:0,%22u%22:467,%22ue%22:467,%22f%22:2,%22dn%22:2,%22dne%22:2,%22c%22:8,%22s%22:37,%22ce%22:76,%22rq%22:76,%22rp%22:434,%22rpe%22:589,%22dl%22:480,%22di%22:1196,%22ds%22:1196,%22de%22:1199,%22dc%22:1418,%22l%22:1419,%22le%22:1569%7D,%22navigation%22:%7B%7D%7D&fp=1129&fcp=1129&jsonp=NREUM.setToken",
	}

	request := client.NewRequest(get)
	respBytes, _ := client.NewResponse(request)
	result := string(respBytes)
	fmt.Println(result)
}

func SendDob(token string) (r string) {

	payload := url.Values{
		"csrfmiddlewaretoken": {token},
		"picker__year":        {"1994"},
		"picker__month":       {"2"},
		"dob":                 {"1994-03-14"},
		"country":             {"US"},
	}

	post := client.POSTUrlEncoded{
		Endpoint:       "https://club.pokemon.com/us/pokemon-trainer-club/sign-up/",
		EncodedPayload: payload.Encode(),
	}

	request := client.NewRequest(post)
	request.Header = AddHeaders(Header{additionalHeaders: []additionalHeaders{
		{key: "referer", value: "https://club.pokemon.com/us/pokemon-trainer-club/sign-up/"},
	}, cookie: []string{}, content: bytes.NewReader([]byte(payload.Encode()))}, "localhost")
	respBytes, _ := client.NewResponse(request)
	result := string(respBytes)
	resString := GetStringInBetween(result, `value='`, ">")
	test := strings.Split(resString, "'")
	fmt.Println(`resstring`)
	fmt.Println(test[0])

	return test[0]
}
func SendReg(token string) {

	payload := url.Values{
		"csrfmiddlewaretoken":   {token},
		"username":              {"test423424"},
		"password":              {"sdfs!ad323SA"},
		"confirm_password":      {"sdfs!ad323SA"},
		"email":                 {"xicimih240@nitynote.com"},
		"confirm_email":         {"xicimih240@nitynote.com"},
		"public_profile_opt_in": {"False"},
		"screen_name":           {"dfgdsf32442"},
		"terms":                 {"on"},
		"g-recaptcha-response":  {"03AGdBq26oShe9uNLYj45dWP4F3U1kiMQriKZQ33l-0tNqk68KtC0XWOoWMYpxrBNtCfwkbtF42RzI15za6bElGiD3wWGnPGc37SGRZ_V6BExItunG5LZWhmhpB_XiSUKoz_L20zDH0f9AtLxHdQOQUJUCBUJm9OGQP8AaYN5y19Oi0hRngQnAKLJl7dcR9wKeL5pHuaS2XIegFw4kUfJzUq_wIaRreQwgQL14HGHldSUwwaRbd2wFRlCFH8NRxqjikZ72fM6268j6lHQNPC9GzYOUhzRg4T3j3EIsa4JWo1BGYzYwHpiE1PkViQN_8xIymeTJkLA7NHeUNUf5Kfu8ZlNzJP-CcEUeIirmC4SQy2zSnhSVeZltq9Ius91qq3G9MypnjpwWxFRkgHncPFIXNL3UiZ27z5uCnPsD20tw4dyMZLUQFxh3W5qZvFbbyY73QX5LDiG15sKeBbIcimnPtZl2hFat5t4Qd4-73FMD9M70VH4ZaH9K2NHjCVDi2E_IMr9Z1HtkZRA9vKE1-_thJkmdx-tjPOtWPTkjJCx9sOhv7sTPLYsQ59OYoPRKy9zk0jNaiEkCwkaNfnHj6xoZyub2rYRB4Yi2a2HHZWgPWQYIAC2XRQEHHBFXteILMotVDCE2MKFqQaAHmZaFt-6_HEXDoym3sj6Qn-epnCJkNRVCGsCGEJlbHArx8ds1cavg91G_GW7AUICkekXPOmVJy6rxfktUupXhuyj_7mgQwsbhLt0NxnW4ChhPXGy3yiT9FvrIkWWML2sLMzbM2jWqTXkiG_q1NfxZc-eeaRj1ZSMECZkhTR4NLb1rJIOrPnzHqibq4Ogf4wUN4GYyvjQqT0XT7IMZ3FZhYPglOE9HPy3A-gVmIA9M7VuisQuHweJXiHCHGNoZGP7TuhdMmJ5MhwooSU3hLLAGFADnE33Sq3CIFnM52JSchXBQO_FBHxa52cyphOKDnJQd8ScyTGeYCkwA7CXSiNI6Do_EXpC_RnUjciITjMlxdI5rhXEj5zARRZXN19VkUULyB94_LF-0uZfSHR5asDbqzQ0YxnLRRDYbHs_2woBEoOy48uRbuKqP7sDkmrUIDphk4KwAzjGHG1bDLnCToxH5eaODY6V3pTiGqc_4-yGrawn7abJLnNhTmDWt0JNBmQDShbmEd9f5EftKBa7JMxn6TPRVpRWv4O7sb4D5sbRZYGAMTvYuOUhb-RpTaSnvz7csd4Rm_J9_bJ6SdN8rf4CNcyj0WrPVz_Vr6-V90gRre5FX_9pNfjOYbpGuskntwTqlTEHNixP1SojosgjFBVXoHGYM2FuL_11zzWyzyM7rnE-QpjwJsu4jlGBayXA9lWFadeT9w77cpvH4eHhpzX5BR6eBIAuCcQLzcgB_Hfp-kn_FEEiW7t59w6ni2hPoUeEOHmqHRCC2eMDyRHcbJKO1lQ"},
	}

	post := client.POSTUrlEncoded{
		Endpoint:       "https://club.pokemon.com/us/pokemon-trainer-club/parents/sign-up",
		EncodedPayload: payload.Encode(),
	}

	//cache-control	max-age=0
	//sec-ch-ua	" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"
	//sec-ch-ua-mobile	?0
	//sec-ch-ua-platform	"Windows"
	//upgrade-insecure-requests	1
	//dnt	1
	//content-type	application/x-www-form-urlencoded
	//user-agent	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36
	//accept	text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9

	//sec-fetch-site	same-origin

	request := client.NewRequest(post)
	request.Header = AddHeaders(Header{additionalHeaders: []additionalHeaders{
		{
			key: "referer", value: "https://club.pokemon.com/us/pokemon-trainer-club/parents/sign-up",
		}, {
			key: "referer", value: "https://club.pokemon.com/us/pokemon-trainer-club/parents/sign-up",
		},
		{
			key: "accept-language", value: "en-GB,en-US;q=0.9,en;q=0.8",
		}, {
			key: "sec-fetch-dest", value: "document",
		}, {
			key: "sec-fetch-user", value: "?1",
		}, {
			key: "sec-fetch-mode", value: "navigate",
		},
	}, cookie: []string{}, content: bytes.NewReader([]byte(payload.Encode()))}, "localhost")
	respBytes, _ := client.NewResponse(request)
	result := string(respBytes)
	fmt.Println(result)
}
func Start() {
	client.SetupClient()

	res := GetCrsfToken()
	Test3()
	Test4()
	Test()
	res2 := SendDob(res)
	Test2()
	Test()
	SendReg(res2)
	Test()
	SendReg(res2)
	//Now we are on registration page
}
func GetStringInBetween(str string, start string, end string) (result string) {
	s := strings.Index(str, start)
	if s == -1 {
		return
	}
	s += len(start)
	e := strings.Index(str[s:], end)
	if e == -1 {
		return
	}
	e += s + e - 1
	return str[s:e]
}
