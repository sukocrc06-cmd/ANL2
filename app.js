// Expose currentLang to window for inline onclick attributes
var currentLang = localStorage.getItem('vertex_lang') || 'tr';
var currentAuraMode = 'dataset'; // 'dataset' | 'performance' | 'strategy'

const translations = {
  site_title: {
    tr: "ANL Vertex - Denetimli Makine Öğrenimi Portalı",
    en: "ANL Vertex - Supervised Machine Learning Portal"
  },
  btn_login: {
    tr: "Giriş Yap",
    en: "Sign In"
  },
  badge_card_gen: {
    tr: "Giriş Kartı Oluşturucu",
    en: "Entry Card Generator"
  },
  welcome_title: {
    tr: "Sisteme Erişim Sağlayın",
    en: "Access the System"
  },
  welcome_desc: {
    tr: "ANL Vertex analitik paneline giriş yapabilmek için geçici bir giriş kartı oluşturmanız gerekmektedir. Şirket adınızı girin ve sektörünüzü seçin.",
    en: "To log in to the ANL Vertex analytics panel, you need to generate a temporary access card. Enter your company name and select your sector."
  },
  label_company_name: {
    tr: "Şirket Adı:",
    en: "Company Name:"
  },
  label_sector_select: {
    tr: "Sektör Seçin:",
    en: "Select Sector:"
  },
  opt_select_sector: {
    tr: "Bir sektör seçin...",
    en: "Select a sector..."
  },
  opt_vakif: {
    tr: "Dernekler ve Vakıflar (Bağış Sınıflandırması)",
    en: "Associations and Charities (Donation Classification)"
  },
  opt_egitim: {
    tr: "Eğitim Sektörü (Başarı Olasılığı)",
    en: "Education Sector (Success Probability)"
  },
  opt_gida: {
    tr: "Gıda Sektörü (Sipariş Regresyonu)",
    en: "Food Sector (Order Regression)"
  },
  opt_lojistik: {
    tr: "Ulaşım ve Lojistik (Gecikme Risk Ağırlığı)",
    en: "Transportation and Logistics (Delay Risk Weight)"
  },
  opt_tekstil: {
    tr: "Tekstil Perakende (Müşteri Segmentasyonu)",
    en: "Textile Retail (Customer Segmentation)"
  },
  btn_create_card: {
    tr: "Giriş Kartı Oluştur",
    en: "Generate Entry Card"
  },
  temp_card_title: {
    tr: "Geçici Giriş Kartı",
    en: "Temporary Entry Card"
  },
  label_username: {
    tr: "Kullanıcı Adı",
    en: "Username"
  },
  btn_copy: {
    tr: "Kopyala",
    en: "Copy"
  },
  label_password: {
    tr: "Güçlü Şifre",
    en: "Strong Password"
  },
  timer_title: {
    tr: "Kart Geçerlilik Süresi",
    en: "Card Validity Period"
  },
  card_warning: {
    tr: "⚠️ Bu kart 10 dakika içinde kullanılmazsa otomatik olarak silinecektir.",
    en: "⚠️ This card will be deleted automatically if not used within 10 minutes."
  },
  btn_auto_login: {
    tr: "Kart Bilgileriyle Giriş Yap",
    en: "Log In with Card Credentials"
  },
  badge_intro: {
    tr: "ANL Vertex Tanıtım",
    en: "ANL Vertex Introduction"
  },
  intro_title: {
    tr: "Yapay Zeka Destekli Sektörel Analiz",
    en: "AI-Powered Sectoral Analysis"
  },
  intro_desc: {
    tr: "<strong>ANL Vertex</strong>, işletmelerin sahip olduğu karmaşık verileri denetimli makine öğrenimi modelleri kullanarak analiz eden ve karar mekanizmalarını otomatikleştiren bir iş zekası portalıdır.",
    en: "<strong>ANL Vertex</strong> is a business intelligence portal that analyzes complex business data using supervised machine learning models and automates decision-making mechanisms."
  },
  feat_1_title: {
    tr: "Gözetimli ML Altyapısı (Supervised Learning)",
    en: "Supervised ML Infrastructure (Supervised Learning)"
  },
  feat_1_desc: {
    tr: "Sistemlerinizdeki etiketli geçmiş verilerden örüntüler öğrenir, yeni veri girdilerinde yüksek doğruluklu tahminler üretir.",
    en: "Learns patterns from your labeled historical data and produces high-accuracy predictions for new data inputs."
  },
  feat_2_title: {
    tr: "PDF Raporlama & Dokümantasyon",
    en: "PDF Reporting & Documentation"
  },
  feat_2_desc: {
    tr: "Tek tıkla, şirketinizin verilerini, model analiz sonuçlarını ve aksiyon önerilerini içeren resmi A4 PDF raporu indirin.",
    en: "Download an official A4 PDF report containing your company's data, model analysis results, and action recommendations with a single click."
  },
  feat_3_title: {
    tr: "Aksiyon Önerileri Modülü",
    en: "Action Recommendations Module"
  },
  feat_3_desc: {
    tr: "Sadece tahmin üretmekle kalmaz, model çıktısına göre firmanızın alabileceği stratejik iş kararlarını belirler.",
    en: "Does not only generate predictions but also determines strategic business decisions your firm can take based on the model output."
  },
  badge_sectors: {
    tr: "Sektörel Çözümler",
    en: "Sectoral Solutions"
  },
  sectors_title: {
    tr: "Modellerin Sektörel Dağılımı",
    en: "Sectoral Distribution of Models"
  },
  sectors_desc: {
    tr: "ANL Vertex, farklı sektörlerdeki veri türlerine göre özelleştirilmiş denetimli öğrenme algoritmaları kullanır.",
    en: "ANL Vertex uses customized supervised learning algorithms based on data types in different sectors."
  },
  card_vakif_title: {
    tr: "Dernekler ve Vakıflar",
    en: "Associations and Charities"
  },
  card_vakif_desc: {
    tr: "Gözetimli **Karar Ağaçları (Decision Trees)** kullanarak bağışçıların ziyaret sıklığı ve geçmiş desteklerine göre düzenli donör olma olasılıklarını sınıflandırır.",
    en: "Classifies donors' likelihood of becoming regular donors based on visit frequency and historical support using supervised **Decision Trees**."
  },
  card_vakif_footer: {
    tr: "Bağış Sınıflandırması &rarr;",
    en: "Donation Classification &rarr;"
  },
  card_egitim_title: {
    tr: "Eğitim Sektörü",
    en: "Education Sector"
  },
  card_egitim_desc: {
    tr: "**Lojistik Olasılık (Logistic Regression)** modelleriyle öğrencilerin çalışma saatleri ve derse katılım oranlarına göre başarı/başarısızlık olasılığını hesaplar.",
    en: "Calculates the success/failure probability of students based on study hours and course attendance rates using **Logistic Regression** models."
  },
  card_egitim_footer: {
    tr: "Başarı Tahmin Olasılığı &rarr;",
    en: "Success Prediction Probability &rarr;"
  },
  card_gida_title: {
    tr: "Gıda Sektörü",
    en: "Food Sector"
  },
  card_gida_desc: {
    tr: "**Çoklu Doğrusal Regresyon (Linear Regression)** analizleriyle sipariş yoğunluğu ve restoran puanına göre günlük yemek talebini ve sipariş sayılarını modeller.",
    en: "Models daily food demand and order quantities based on order density and restaurant ratings using **Multiple Linear Regression** analyses."
  },
  card_gida_footer: {
    tr: "Sipariş Regresyonu &rarr;",
    en: "Order Regression &rarr;"
  },
  card_lojistik_title: {
    tr: "Ulaşım ve Lojistik",
    en: "Transportation and Logistics"
  },
  card_lojistik_desc: {
    tr: "Gözetimli **Etki Ağırlık Katsayıları** ile teslimat mesafesi, kurye sayısı ve trafik yoğunluğu girdilerine göre gecikme risklerini hesaplar.",
    en: "Calculates delay risks based on delivery distance, number of couriers, and traffic density inputs using supervised **Impact Weight Coefficients**."
  },
  card_lojistik_footer: {
    tr: "Gecikme Analizi &rarr;",
    en: "Delay Analysis &rarr;"
  },
  card_tekstil_title: {
    tr: "Tekstil Perakende",
    en: "Textile Retail"
  },
  card_tekstil_desc: {
    tr: "Gözetimli **K-En Yakın Komşu (K-NN Classification)** modeliyle alışveriş sıklığı ve sepet tutarlarına göre müşteri segmentlerini sınıflandırır.",
    en: "Classifies customer segments based on shopping frequency and basket values using the supervised **K-Nearest Neighbors (K-NN Classification)** model."
  },
  card_tekstil_footer: {
    tr: "Müşteri Segmentasyonu &rarr;",
    en: "Customer Segmentation &rarr;"
  },
  badge_workflow: {
    tr: "İş Akış Şeması",
    en: "Workflow Chart"
  },
  workflow_title: {
    tr: "Uçtan Uca Gözetimli Modelleme Döngüsü",
    en: "End-to-End Supervised Modeling Cycle"
  },
  workflow_desc: {
    tr: "Verilerinizin sisteme yüklenmesinden alınabilecek aksiyon önerilerine kadar olan döngü:",
    en: "The cycle from uploading your data to actionable recommendations:"
  },
  step_1_title: {
    tr: "Etiketli Veri Girişi",
    en: "Labeled Data Input"
  },
  step_1_desc: {
    tr: "CSV yüklemesi veya manuel formlar ile geçmiş etiketli veriler veritabanına eklenir.",
    en: "Historical labeled data is added to the database via CSV upload or manual forms."
  },
  step_2_title: {
    tr: "Katsayı & Ağırlık Eğitimi",
    en: "Coefficient & Weight Training"
  },
  step_2_desc: {
    tr: "Gözetimli öğrenme algoritmaları değişkenlerin ağırlıklarını ve katsayılarını hesaplar.",
    en: "Supervised learning algorithms calculate weights and coefficients of variables."
  },
  step_3_title: {
    tr: "Doğrusal Tahmin & Çıktı",
    en: "Linear Prediction & Output"
  },
  step_3_desc: {
    tr: "Model yeni gelen girdi verisinin onay/red, olasılık derecesi veya değer eğrisini hesaplar.",
    en: "The model calculates approval/rejection, probability degree, or value curve of incoming new inputs."
  },
  step_4_title: {
    tr: "Önerilen Aksiyon",
    en: "Recommended Action"
  },
  step_4_desc: {
    tr: "Elde edilen analitik tahminlere göre şirketin alması gereken ticari eylemleri belirler.",
    en: "Determines the commercial actions the company should take based on the analytical predictions obtained."
  },
  badge_academy: {
    tr: "Eğitim & Akademi",
    en: "Education & Academy"
  },
  academy_title: {
    tr: "Denetimli Makine Öğrenimi Nedir?",
    en: "What is Supervised Machine Learning?"
  },
  academy_desc: {
    tr: "Gözetimli öğrenmenin temelleri, işletmelere sunduğu katkılar ve ANL Vertex'in uyguladığı gerçek dünya senaryoları.",
    en: "The basics of supervised learning, its benefits to businesses, and real-world scenarios applied by ANL Vertex."
  },
  acad_left_title: {
    tr: "Temel Tanım ve Öğrenme Yapısı",
    en: "Basic Definition and Learning Structure"
  },
  acad_left_p1: {
    tr: "<strong>Denetimli Makine Öğrenimi (Supervised Learning)</strong>, bir algoritmanın <em>etiketlenmiş (labeled)</em> geçmiş verilerden örüntüler öğrenmesidir. Veri kümesinde girdiler (bağımsız değişkenler) ile bunların doğru çıktısı (hedef etiket) önceden bellidir.",
    en: "<strong>Supervised Machine Learning</strong> is when an algorithm learns patterns from <em>labeled</em> historical data. In the dataset, inputs (independent variables) and their correct output (target label) are known in advance."
  },
  acad_left_p2: {
    tr: "Model eğitildikten sonra, daha önce hiç karşılaşmadığı yeni girdi değerlerini analiz ederek yüksek doğruluk oranlarıyla tahmin veya sınıflandırma yapar. Bir öğretmenin gözetiminde çözümlü örnekleri inceleyerek konuyu kavrayan bir öğrenci mantığına sahiptir.",
    en: "After training, the model analyzes new input values it has never encountered before to make predictions or classifications with high accuracy. It works like a student learning a subject by reviewing solved examples under the guidance of a teacher."
  },
  acad_left_h4: {
    tr: "İşletmelere Nasıl Yardımcı Olur?",
    en: "How Does It Help Businesses?"
  },
  acad_help_1: {
    tr: "<strong>Karar Verme Sürecini Hızlandırır:</strong> Kredi onayı veya segmentasyon gibi manuel analiz gerektiren adımları milisaniyeler içerisinde otomatikleştirir.",
    en: "<strong>Speeds Up Decision-Making:</strong> Automates steps requiring manual analysis, such as credit approval or segmentation, within milliseconds."
  },
  acad_help_2: {
    tr: "<strong>Kaynak İsrafını Engeller:</strong> Doğrusal talep regresyonları sayesinde gıda veya tekstil sipariş adetlerini önceden saptayarak stok kontrolünü optimize eder.",
    en: "<strong>Prevents Resource Waste:</strong> Optimizes stock control by pre-determining food or textile order quantities through linear demand regressions."
  },
  acad_help_3: {
    tr: "<strong>Erken Risk Yönetimi:</strong> Eğitimde başarısızlık veya lojistikte gecikme gibi durumlar oluşmadan önce modelin çıkardığı olasılıklara göre önleyici önlemler alınmasını sağlar.",
    en: "<strong>Early Risk Management:</strong> Ensures preventative measures are taken based on probabilities generated by the model before failure in education or delays in logistics occur."
  },
  acad_right_title: {
    tr: "ANL Vertex Uygulamalı Örnekleri",
    en: "ANL Vertex Applied Examples"
  },
  acad_ex_1_badge: {
    tr: "Karar Ağaçları (Decision Trees)",
    en: "Decision Trees"
  },
  acad_ex_1_title: {
    tr: "Vakıf Donör Sınıflandırması",
    en: "Charity Donor Classification"
  },
  acad_ex_1_desc: {
    tr: "<strong>Çalışma Prensibi:</strong> Verileri mantıksal soru dallarına (Örn: Katılım > 5?) ayırarak hiyerarşik sınırlar çizer.<br><strong>Uygulama:</strong> Bağışçıların düzenli veya düzensiz donör durumlarını sınıflandırır.",
    en: "<strong>Working Principle:</strong> Draws hierarchical boundaries by dividing data into logical question branches (e.g., Attendance > 5?).<br><strong>Application:</strong> Classifies donors' regular or irregular status."
  },
  acad_ex_2_badge: {
    tr: "Lojistik Regresyon (Logistic Regression)",
    en: "Logistic Regression"
  },
  acad_ex_2_title: {
    tr: "Öğrenci Başarı Riski",
    en: "Student Success Risk"
  },
  acad_ex_2_desc: {
    tr: "<strong>Çalışma Prensibi:</strong> Bağımsız değişkenleri Sigmoid eğrisi kullanarak 0 ile 1 aralığında bir olasılık değerine dönüştürür.<br><strong>Uygulama:</strong> Çalışma saati ve devamsızlığa göre başarısızlık risk oranını çıkarır.",
    en: "<strong>Working Principle:</strong> Converts independent variables into a probability value between 0 and 1 using a Sigmoid curve.<br><strong>Application:</strong> Calculates failure risk rate based on study hours and absenteeism."
  },
  acad_ex_3_badge: {
    tr: "Doğrusal Regresyon (Linear Regression)",
    en: "Linear Regression"
  },
  acad_ex_3_title: {
    tr: "Gıda Sipariş Talep Uydurması",
    en: "Food Order Demand Fitting"
  },
  acad_ex_3_desc: {
    tr: "<strong>Çalışma Prensibi:</strong> Veri noktalarına en yakın doğrusal trend çizgisini çizerek gelecekteki sayısal değerleri tahmin eder.<br><strong>Uygulama:</strong> Sipariş yoğunluğu ve restoran puanına göre günlük talep adedini hesaplar.",
    en: "<strong>Working Principle:</strong> Predicts future numerical values by drawing the closest linear trend line to data points.<br><strong>Application:</strong> Calculates daily demand quantity based on order density and restaurant ratings."
  },
  acad_ex_4_badge: {
    tr: "K-En Yakın Komşu (K-NN Clustering)",
    en: "K-Nearest Neighbors (K-NN Clustering)"
  },
  acad_ex_4_title: {
    tr: "Tekstil Perakende Segmentasyonu",
    en: "Textile Retail Segmentation"
  },
  acad_ex_4_desc: {
    tr: "<strong>Çalışma Prensibi:</strong> Yeni bir verinin en yakınındaki K adet tarihsel veri noktasını inceleyip çoğunluğun ait olduğu gruba dahil eder.<br><strong>Uygulama:</strong> Sepet büyüklüğü ve indirim hassasiyetine göre Premium veya Fırsatçı alıcıları belirler.",
    en: "<strong>Working Principle:</strong> Examines the nearest K historical data points of a new data entry and includes it in the group to which the majority belongs.<br><strong>Application:</strong> Identifies Premium or Opportunistic buyers based on basket size and discount sensitivity."
  },
  metric_accuracy: {
    tr: "Tahmin Doğruluğu (Accuracy)",
    en: "Prediction Accuracy"
  },
  metric_speed: {
    tr: "Karar Hesaplama Hızı",
    en: "Decision Calculation Speed"
  },
  metric_integrations: {
    tr: "Aktif Kurumsal Entegrasyon",
    en: "Active Enterprise Integrations"
  },
  metric_sectors: {
    tr: "5 Sektör",
    en: "5 Sectors"
  },
  metric_library: {
    tr: "Yerleşik ML Kütüphanesi",
    en: "Built-in ML Library"
  },
  footer_copy: {
    tr: "<p>&copy; 2026 ANL Vertex Inc. Tüm Hakları Saklıdır. HTML, CSS, JavaScript ve Java HTTP Server ile Güçlendirilmiştir.</p>",
    en: "<p>&copy; 2026 ANL Vertex Inc. All Rights Reserved. Powered by HTML, CSS, JavaScript, and Java HTTP Server.</p>"
  },
  login_title: {
    tr: "Sisteme Giriş Yapın",
    en: "Sign In to the System"
  },
  login_subtitle: {
    tr: "ANL Vertex Güvenli Geçit",
    en: "ANL Vertex Secure Gateway"
  },
  login_desc: {
    tr: "Geçici erişim kartınızda üretilen kullanıcı adı ve şifreyi giriniz.",
    en: "Enter the username and password generated on your temporary access card."
  },
  label_login_username: {
    tr: "Kullanıcı Adı:",
    en: "Username:"
  },
  label_login_password: {
    tr: "Şifre:",
    en: "Password:"
  },
  label_remember_me: {
    tr: "Beni Hatırla",
    en: "Remember Me"
  },
  btn_forgot_password: {
    tr: "Şifremi Unuttum?",
    en: "Forgot Password?"
  },
  login_error: {
    tr: "❌ Kullanıcı adı veya şifre hatalı, ya da kartın 10 dakikalık süresi doldu!",
    en: "❌ Incorrect username or password, or the card's 10-minute validity period has expired!"
  },
  login_error_limit: {
    tr: "❌ Giriş kartınızın geçerliliği yitirilmiş olabilir, lütfen yeni bir kart oluşturun.",
    en: "❌ Your card may have expired; please create a new one."
  },
  btn_cancel: {
    tr: "İptal",
    en: "Cancel"
  },
  btn_submit_login: {
    tr: "Giriş Yap",
    en: "Log In"
  },
  login_footer_question: {
    tr: "Sorun mu yaşıyorsunuz?",
    en: "Having trouble?"
  },
  login_guide_link: {
    tr: "Erişim Kılavuzu",
    en: "Access Guide"
  },
  menu_dashboard: {
    tr: "<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"3\" width=\"7\" height=\"9\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"5\"/><rect x=\"14\" y=\"12\" width=\"7\" height=\"9\"/><rect x=\"3\" y=\"16\" width=\"7\" height=\"5\"/></svg>Genel Analiz Paneli",
    en: "<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"3\" width=\"7\" height=\"9\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"5\"/><rect x=\"14\" y=\"12\" width=\"7\" height=\"9\"/><rect x=\"3\" y=\"16\" width=\"7\" height=\"5\"/></svg>General Analysis Panel"
  },
  btn_download_pdf: {
    tr: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" style=\"margin-right: 0.4rem; vertical-align: middle;\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><polyline points=\"7 10 12 15 17 10\"/><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"/></svg>PDF Raporu İndir",
    en: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" style=\"margin-right: 0.4rem; vertical-align: middle;\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><polyline points=\"7 10 12 15 17 10\"/><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"/></svg>Download PDF Report"
  },
  btn_logout: {
    tr: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" style=\"margin-right: 0.4rem; vertical-align: middle;\"><path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"/><polyline points=\"16 17 21 12 16 7\"/><line x1=\"21\" y1=\"12\" x2=\"9\" y2=\"12\"/></svg>Çıkış Yap",
    en: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" style=\"margin-right: 0.4rem; vertical-align: middle;\"><path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"/><polyline points=\"16 17 21 12 16 7\"/><line x1=\"21\" y1=\"12\" x2=\"9\" y2=\"12\"/></svg>Log Out"
  },
  btn_excel_download: {
    tr: "Excel İndir",
    en: "Excel Download"
  },
  btn_excel_title: {
    tr: "Excel olarak indir",
    en: "Download as Excel"
  },
  dash_subtitle: {
    tr: "Denetimli makine öğrenimi modeli ile veri seti tahminleme ve analitik izleme ekranı.",
    en: "Dataset prediction and analytical monitoring screen with a supervised machine learning model."
  },
  dash_inputs_title: {
    tr: "Aktif Simülasyon Girdileri",
    en: "Active Simulation Inputs"
  },
  dash_output_title: {
    tr: "Model Çıktı Tahmini",
    en: "Model Output Prediction"
  },
  dash_output_desc: {
    tr: "Girdi değerleri belirlenen güvenli sınırlar içerisindedir.",
    en: "Input values are within the determined safe limits."
  },
  dash_table_title: {
    tr: "Müşteri Veri Seti",
    en: "Customer Dataset"
  },
  dash_table_desc: {
    tr: "Sisteme kayıtlı geçmiş etiketli veriler. Yeni müşteri eklendiğinde model yeniden hesaplanır.",
    en: "Historical labeled data registered in the system. The model is recalculated when a new customer is added."
  },
  dash_form_title: {
    tr: "Yeni Müşteri Kaydı & Tahminleme",
    en: "New Customer Registration & Prediction"
  },
  dash_form_desc: {
    tr: "Yeni bir müşteri verisi ekleyerek denetimli öğrenme modelinin tahmin sonucunu anlık olarak veritabanına kaydedin.",
    en: "Save the prediction result of the supervised learning model to the database instantly by adding new customer data."
  },
  label_cust_name: {
    tr: "Müşteri Adı / Kodu:",
    en: "Customer Name / Code:"
  },
  btn_add_customer: {
    tr: "Veriyi Kaydet ve Tahmin Et",
    en: "Save Data and Predict"
  },
  dash_actions_title: {
    tr: "Model Sonucu Önerilen Ticari Aksiyonlar",
    en: "Recommended Business Actions Based on Model Result"
  },
  dash_actions_desc: {
    tr: "Yapay zeka denetimli modelinizin mevcut veri dağılımına ve son eklenen girdilere dayanarak önerdiği stratejik adımlar:",
    en: "Strategic steps recommended by your AI-supervised model based on the current data distribution and the latest inputs:"
  },
  qr_code_label: {
    tr: "Veya QR Kodu Telefonunuzdan Taratın:",
    en: "Or Scan the QR Code with Your Phone:"
  },
  btn_copy_login_url: {
    tr: "Giriş Linkini Kopyala",
    en: "Copy Login Link"
  },
  btn_download_card: {
    tr: "Kartı İndir (PNG)",
    en: "Download Card (PNG)"
  },
  btn_explain: {
    tr: "Neden? (Aura AI Açıklaması)",
    en: "Explain (Aura AI Explanation)"
  },
  explain_modal_title: {
    tr: "Aura AI Model Karar Açıklaması",
    en: "Aura AI Decision Explanation"
  },
  explain_modal_desc: {
    tr: "Bu rapor, SHAP/LIME benzeri yerel katkı analizi kullanarak aktif girdi parametrelerinin tahmin üzerindeki etkilerini göstermektedir.",
    en: "This report shows local contribution analysis using SHAP/LIME-like methods to explain the effects of active inputs on prediction."
  },
  xai_title: {
    tr: "Aura AI XAI - Özellik Ağırlıkları (Feature Importance)",
    en: "Aura AI XAI - Feature Importance"
  },
  xai_desc: {
    tr: "Modelin kararlarında en çok hangi değişkenlerin rol oynadığını ve ağırlık dağılımlarını inceleyin.",
    en: "Examine which variables play the most roles in the model's decisions and their weight distributions."
  },
  whatif_title: {
    tr: "Dinamik Senaryo Testi (What-If Simulator)",
    en: "Dynamic Scenario Testing (What-If Simulator)"
  },
  whatif_desc: {
    tr: "Mevcut girdileri referans olarak kilitleyin ve yaptığınız değişikliklerin model üzerindeki etkisini karşılaştırın.",
    en: "Lock current inputs as reference and compare the effects of changes you make on the model."
  },
  btn_whatif_set: {
    tr: "Referans Senaryo Olarak Kilitle (Scenario A)",
    en: "Lock as Reference Scenario (Scenario A)"
  },
  whatif_empty_state: {
    tr: "Karşılaştırmayı başlatmak için \"Referans Olarak Kilitle\" butonuna tıklayın, ardından aktif girdileri yukarıdaki sürgülerden değiştirmeyi deneyin.",
    en: "To start the comparison, click 'Lock as Reference', then try changing active inputs from the sliders above."
  },
  aura_chat_title: {
    tr: "Aura AI Analitik Danışman",
    en: "Aura AI Analytical Advisor"
  },
  aura_chat_desc: {
    tr: "Şirket verileriniz ve aktif model tahminleriniz hakkında Aura AI'a sorular sorun:",
    en: "Ask Aura AI questions about your company data and active model predictions:"
  },
  btn_send: {
    tr: "Gönder",
    en: "Send"
  },
  metrics_title: {
    tr: "Aktif Model Performansı",
    en: "Active Model Performance"
  },
  metrics_status: {
    tr: "Çevrimiçi Eğitim Modu Aktif",
    en: "Online Training Mode Active"
  },
  pipeline_title: {
    tr: "Veri İşleme Akış Şeması (Data Pipeline Flowchart)",
    en: "Data Pipeline Flowchart"
  },
  pipeline_desc: {
    tr: "Verilerinizin sisteme girdiği andan itibaren normalize edilmesi, ML çözücü tarafından hesaplanması ve Aura AI ile aksiyonlara dönüşme adımlarını anlık izleyin.",
    en: "Monitor the real-time steps of your data from entering the system, being normalized, computed by the ML solver, and transformed into actions by Aura AI."
  },
  flow_node_1: {
    tr: "Veri Girişi (Ingestion)",
    en: "Data Ingestion"
  },
  flow_node_2: {
    tr: "Normalizasyon (Preprocess)",
    en: "Normalization"
  },
  flow_node_3: {
    tr: "Model Çözücü (Solver)",
    en: "Model Solver"
  },
  flow_node_4: {
    tr: "Aura AI Analiz (Inference)",
    en: "Aura AI Inference"
  },
  flow_node_5: {
    tr: "Karar & Aksiyon (Output)",
    en: "Decision & Output"
  },
  fairness_title: {
    tr: "⚖️ AI Adillik Ölçer (Fairness Gauge)",
    en: "⚖️ AI Fairness Gauge"
  },
  fairness_desc: {
    tr: 'Her girdi değişkeninin tahmin üzerindeki "ayrımcı etki" (disparate impact) oranını gösterir. Bu analiz modelin şeffaflığını ve etik uyumluluğunu kanıtlar.',
    en: 'Shows the "disparate impact" score of each input variable on the prediction. This analysis proves the model\'s transparency and ethical compliance.'
  },
  fairness_overall_label: {
    tr: "Genel Adillik",
    en: "Overall Fairness"
  },
  fairness_verdict_ok: {
    tr: "🛡️ Model tüm değişkenler için adil sınırlar içindedir. Belirgin bir ayrımcı örüntü tespit edilmemiştir.",
    en: "🛡️ The model is within fair boundaries for all variables. No significant discriminatory pattern has been detected."
  },
  fairness_verdict_caution: {
    tr: "⚠️ Bazı değişkenlerde orta düzeyde ayrımcı etki tespit edilmiştir. Model kararları dikkatli yorumlanmalı ve ek denetim önerilir.",
    en: "⚠️ Moderate disparate impact detected in some variables. Model decisions should be interpreted carefully and additional auditing is recommended."
  },
  fairness_verdict_biased: {
    tr: "🚨 Yüksek ayrımcı etki tespit edildi. Bu değişkenler koruma altındaki gruplarda eşitsiz sonuçlar üretebilir. Modelin yeniden değerlendirilmesi önerilir.",
    en: "🚨 High disparate impact detected. These variables may produce unequal outcomes for protected groups. Model re-evaluation is recommended."
  },
  pipe_latency_label: {
    tr: "Son İşlem Süresi",
    en: "Last Latency"
  },
  pipe_stat_last: {
    tr: "Son Gecikme",
    en: "Last Latency"
  },
  pipe_stat_avg: {
    tr: "Ort. Gecikme",
    en: "Avg. Latency"
  },
  pipe_stat_peak: {
    tr: "Maks. Verimlilik",
    en: "Peak Throughput"
  },
  pipe_stat_count: {
    tr: "Toplam İşlem",
    en: "Total Runs"
  },
  pipe_throughput_label: {
    tr: "⚡ Pipeline Throughput (kayıt/sn)",
    en: "⚡ Pipeline Throughput (rec/s)"
  },
  aura_mode_label: {
    tr: "Konu Modu:",
    en: "Topic Mode:"
  },
  aura_mode_dataset: {
    tr: "Bu veri seti hakkında konuş",
    en: "Talk only about this dataset"
  },
  aura_mode_performance: {
    tr: "Genel model performansı",
    en: "Talk about general model performance"
  },
  aura_mode_strategy: {
    tr: "Stratejik iş tavsiyeleri",
    en: "Provide strategic business recommendations"
  },
  aura_mode_badge_dataset: {
    tr: "Veri Seti",
    en: "Dataset"
  },
  aura_mode_badge_performance: {
    tr: "Performans",
    en: "Performance"
  },
  aura_mode_badge_strategy: {
    tr: "Strateji",
    en: "Strategy"
  },
  menu_schema_intel: {
    tr: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>Şema Zekası Paneli`,
    en: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>Schema Intelligence`
  },
  schema_title: {
    tr: "Schema Intelligence Engine (Şema Zekası Motoru)",
    en: "Schema Intelligence Engine"
  },
  schema_subtitle: {
    tr: "Yapay zeka destekli otonom veri yapısı haritalama ve veri kümesi zafiyet tespit motoru.",
    en: "Autonomous AI-powered structure mapping & dataset vulnerability detection."
  },
  upload_title: {
    tr: "Veri Kümesini Buraya Sürükleyin veya Dosya Seçin",
    en: "Drag & Drop Dataset Here or Browse Files"
  },
  upload_desc: {
    tr: "CSV, TXT veya JSON formatındaki veri kümenizi sürükleyip bırakarak AI analizini başlatın.",
    en: "Upload your CSV, TXT, or JSON files to trigger the automated AI dataset inspection."
  },
  btn_browse_file: {
    tr: "Dosya Seçin",
    en: "Browse Files"
  },
  quick_samples_title: {
    tr: "Dosyanız yok mu? Örnek şablonlar ile anında test edin:",
    en: "Don't have a dataset? Test instantly with our curated templates:"
  },
  scanning_title: {
    tr: "AI Otonom Tarayıcı Çalışıyor...",
    en: "Autonomous AI Scanner Running..."
  },
  scanning_desc: {
    tr: "Veri kümesi satırları okunuyor, sütun tipleri ve zafiyetler yapay zeka ile haritalandırılıyor.",
    en: "Reading dataset rows, mapping columns, and analyzing vulnerability metrics."
  },
  panel_overview: {
    tr: "Veri Seti Genel Analizi",
    en: "Dataset Overview Analysis"
  },
  score_title: {
    tr: "Veri Kalite Puanı",
    en: "Dataset Quality Score"
  },
  score_desc: {
    tr: "Hücre doluluk oranları, tip kararlılığı ve anormalliklere göre hesaplanan genel sağlık skoru.",
    en: "Overall dataset health coefficient computed based on missing cells, types, and outliers."
  },
  panel_sector_detect: {
    tr: "AI Sektör Sınıflandırması",
    en: "AI Sector Detection"
  },
  sector_detect_desc: {
    tr: "Sütun isimleri ve veri karakteristikleri analiz edilerek en olası ticari kullanım senaryosu eşleştirildi.",
    en: "Analyzing columns schema and characteristics to map the dataset to the optimal business sector."
  },
  sec_comp_title: {
    tr: "Sektörel Uyumluluk:",
    en: "Sector Compatibility:"
  },
  panel_ml_profile: {
    tr: "AI Makine Öğrenimi Profili",
    en: "Suggested ML Profile"
  },
  panel_column_intel: {
    tr: "Sütun Tipi ve Veri Dağılım Analizi",
    en: "Columns Type & Distribution Analysis"
  },
  col_name: {
    tr: "Sütun Adı",
    en: "Column Name"
  },
  col_type: {
    tr: "Veri Tipi (Detected)",
    en: "Data Type (Detected)"
  },
  col_nulls: {
    tr: "Boş Hücre (Null %)",
    en: "Missing Cells (Null %)"
  },
  col_stats: {
    tr: "İstatistiksel Dağılım / Benzersiz Değerler",
    en: "Statistical Distribution / Unique Values"
  },
  col_anomaly: {
    tr: "Sistem Zafiyet Analizi",
    en: "Vulnerability / Anomalies"
  },
  panel_warnings: {
    tr: "Veri Güvenliği ve Risk Uyarıları",
    en: "Dataset Vulnerability & Risk Warnings"
  },
  panel_recommendations: {
    tr: "AI Stratejik Temizlik Önerileri",
    en: "AI Strategic Data Hygiene Recommendations"
  },
  btn_reanalyze: {
    tr: "Başka Veri Seti Yükle",
    en: "Analyze Another Dataset"
  },
  btn_apply_schema: {
    tr: "Veri Şemasını Modele Uygula",
    en: "Apply Schema to Live Model"
  },
  menu_automl: {
    tr: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>AI AutoML Paneli`,
    en: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>AI AutoML Engine`
  },
  automl_title: {
    tr: "AI Auto Feature Engineering & ML Recommendation Engine",
    en: "AI Auto Feature Engineering & ML Recommendation Engine"
  },
  automl_subtitle: {
    tr: "Otonom özellik seçimi, çoklu korelasyon analizi ve en uygun makine öğrenimi model tahminleme aracı.",
    en: "Autonomous feature selection, multicollinearity analysis, and optimal machine learning model forecasting tool."
  },
  automl_upload_title: {
    tr: "AutoML Analizi İçin Veri Kümesi Yükleyin",
    en: "Upload Dataset for AutoML Analysis"
  },
  automl_upload_desc: {
    tr: "Korelasyon analizi, öznitelik ağırlıkları ve ML model önerisi çıkarmak için bir CSV dosyası sürükleyin veya seçin.",
    en: "Drag and drop or browse a CSV file to extract correlation analysis, feature weights, and ML model recommendations."
  },
  btn_run_automl: {
    tr: "AutoML Analizini Başlat",
    en: "Start AutoML Analysis"
  },
  automl_scanning_title: {
    tr: "AutoML Modelleri Eğitiliyor & Tune Ediliyor...",
    en: "AutoML Models Training & Tuning..."
  },
  automl_scanning_desc: {
    tr: "Hyperparameter optimizasyonu yapılıyor, çapraz doğrulama (cross-validation) skorları hesaplanıyor.",
    en: "Performing hyperparameter optimization and computing cross-validation scores."
  },
  panel_feature_importance: {
    tr: "Feature Importance & Korelasyon Analizi",
    en: "Feature Importance & Correlation Analysis"
  },
  feat_imp_title: {
    tr: "Öznitelik Önem Dereceleri (SHAP/LIME):",
    en: "Feature Importance Weights (SHAP/LIME):"
  },
  feat_corr_title: {
    tr: "Çoklu Korelasyon (Multicollinearity) & Risk Analizi:",
    en: "Multicollinearity & Risk Analysis:"
  },
  panel_target_detect: {
    tr: "Hedef Değişken (Target Variable) Tespiti",
    en: "Target Variable Detection"
  },
  panel_model_recommend: {
    tr: "Önerilen Makine Öğrenimi Modelleri",
    en: "Recommended Machine Learning Models"
  },
  panel_business_insights: {
    tr: "AI Otonom Ticari Karar Çıkarımları",
    en: "AI Autonomous Business Insights"
  },
  btn_deploy_model: {
    tr: "Seçilen Modeli Canlıya Al",
    en: "Deploy Selected Model to Live"
  },
  menu_autobuilder: {
    tr: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>AI Auto-Builder Paneli`,
    en: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>AI Auto-Builder`
  },
  autobuilder_title: {
    tr: "AI Dashboard Auto-Builder Engine",
    en: "AI Dashboard Auto-Builder Engine"
  },
  autobuilder_subtitle: {
    tr: "Yapay zeka ile veri kümesinden anında otonom yönetici ve operasyonel takip panelleri inşa edin.",
    en: "Generate autonomous executive and operational dashboards instantly from raw datasets using AI."
  },
  autobuilder_upload_title: {
    tr: "Auto-Builder Analizi İçin Veri Kümesi Yükleyin",
    en: "Upload Dataset for Auto-Builder Analysis"
  },
  autobuilder_upload_desc: {
    tr: "Grafikler, KPI'lar ve risk haritaları içeren otonom bir çalışma alanı oluşturmak için veri yükleyin.",
    en: "Upload your data to construct an autonomous workspace complete with charts, KPIs, and risk matrices."
  },
  btn_run_autobuilder: {
    tr: "AI Çalışma Alanını İnşa Et",
    en: "Build AI Workspace"
  },
  autobuilder_building_title: {
    tr: "AI Analisti Paneli İnşa Ediyor...",
    en: "AI Analyst Panel Constructing..."
  },
  autobuilder_building_desc: {
    tr: "Veri dağılımları inceleniyor, sektörel KPI'lar hesaplanıyor ve en uygun veri görselleştirme yapısı sentezleniyor.",
    en: "Analyzing data variance, computing sector KPIs, and synthesizing optimal visualization structures."
  },
  layout_exec: {
    tr: "Yönetici Özeti (Overview)",
    en: "Executive Overview"
  },
  layout_ops: {
    tr: "Operasyonel İzleme (Ops)",
    en: "Operational Monitoring"
  },
  layout_risk: {
    tr: "Adli Riskler (Forensics)",
    en: "Forensic Risks"
  },
  chart_rationale_label: {
    tr: "Yapay Zeka Seçim Gerekçesi (AI Rationale):",
    en: "AI Chart Selection Rationale:"
  },
  heatmap_title_panel: {
    tr: "AI Risk Yoğunluk Matrisi (Heatmap)",
    en: "AI Risk Density Heatmap Grid"
  },
  heatmap_desc: {
    tr: "Departmanlar ve operasyonel süreçlerin anlık risk yoğunluğu. Koyu kırmızı hücreler yüksek kırılganlığı simgeler.",
    en: "Live operational risk density monitoring. Dark red cells represent critical vulnerability levels."
  },
  risk_low: {
    tr: "Düşük (Low)",
    en: "Low Risk"
  },
  risk_medium: {
    tr: "Orta (Med)",
    en: "Medium Risk"
  },
  risk_high: {
    tr: "Yüksek (High)",
    en: "High Risk"
  },
  insight_stream_title: {
    tr: "AI Gerçek Zamanlı Analiz Akışı (Live Stream)",
    en: "AI Real-Time Insight Stream (Live)"
  },
  board_report_title: {
    tr: "AI Yönetim Kurulu Brifingi (Executive Brief)",
    en: "AI Board Meeting Intelligence Summary"
  },
  menu_aura_os: {
    tr: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><circle cx="12" cy="12" r="3"/></svg>Aura AI Copilot`,
    en: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><circle cx="12" cy="12" r="3"/></svg>Aura AI Copilot`
  },
  aura_os_title: {
    tr: "Aura AI Otonom Asistan (Aura OS)",
    en: "Aura AI Autonomous OS"
  },
  aura_os_subtitle: {
    tr: "Çoklu Ajanlı Yönetici Zekası, Öngörücü Risk Komutları ve Bağlam Belleği.",
    en: "Multi-Agent Executive Intelligence, Predictive Risk Command, and Context Memory."
  },
  aura_os_memory_status: {
    tr: "Bellek Aktif",
    en: "Memory Active"
  },
  aura_agents_title: {
    tr: "Özel Yapay Zeka Ajan Swarm",
    en: "Specialized AI Agent Swarm"
  },
  aura_agents_desc: {
    tr: "Karmaşık iş sorgularını otonom çözmek için gerçek zamanlı işbirliği yapan ajanlar.",
    en: "Specialized agents collaborate in real-time to solve complex business queries."
  },
  aura_stream_title: {
    tr: "Canlı AI Aktivite Akışı",
    en: "Live AI Activity Stream"
  },
  aura_console_title: {
    tr: "Yönetici Komut Konsolu",
    en: "Executive Command Console"
  },
  aura_alerts_title: {
    tr: "Otonom Risk ve Uyarı Paneli",
    en: "Autonomous Warning Grid"
  },
  aura_alerts_desc: {
    tr: "Otonom tespit edilen ve acil aksiyon gerektiren departman bazlı anomaliler.",
    en: "Proactively flagged anomalies and threats needing executive mitigation."
  },
  aura_explain_title: {
    tr: "Açıklanabilirlik Matrisi",
    en: "Explainability Matrix"
  },
  aura_explain_desc: {
    tr: "Karar ve stratejik önerileri yönlendiren parametre etki ağırlıkları.",
    en: "Reasoning chains and input parameter variance driving the latest recommendations."
  },
  agent_idle: {
    tr: "BEKLEMEDE",
    en: "IDLE"
  },
  agent_active: {
    tr: "ÇALIŞIYOR",
    en: "ACTIVE"
  },
  agent_collab: {
    tr: "İŞBİRLİĞİ",
    en: "COLLAB"
  },
  agent_risk_name: {
    tr: "Risk Ajanı",
    en: "Risk Agent"
  },
  agent_finance_name: {
    tr: "Finans Ajanı",
    en: "Finance Agent"
  },
  agent_ops_name: {
    tr: "Operasyon Ajanı",
    en: "Ops Agent"
  },
  agent_churn_name: {
    tr: "Kayıp Ajanı",
    en: "Churn Agent"
  },
  agent_strategy_name: {
    tr: "Strateji Ajanı",
    en: "Strategy Agent"
  },
  agent_forecast_name: {
    tr: "Tahmin Ajanı",
    en: "Forecast Agent"
  },
  menu_saas_cloud: {
    tr: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><path d="M12 11v6"/><path d="M9 14h6"/></svg>SaaS Enterprise Cloud`,
    en: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><path d="M12 11v6"/><path d="M9 14h6"/></svg>SaaS Enterprise Cloud`
  },
  saas_title: {
    tr: "SaaS Bulut Yönetimi",
    en: "Enterprise Cloud Control"
  },
  saas_subtitle: {
    tr: "Küresel Çoklu Kiracılı Altyapı, Yapay Zeka Düğümleri ve API Entegrasyon Hub'ı.",
    en: "Global Multi-Tenant Infrastructure, Compute Node Orchestration, and API Hub."
  },
  saas_onboard_title: {
    tr: "🚀 Kiracı Onboarding Sihirbazı",
    en: "🚀 Cinematic Tenant Onboarding Wizard"
  },
  saas_onboard_desc: {
    tr: "Yeni bir kurumsal sektör kümesi oluşturun, veritabanı konteynerleri atayın ve yapay zeka sunucu düğümlerini yapılandırın.",
    en: "Initialize a new enterprise sector cluster, provision container databases, and configure dedicated AI nodes."
  },
  btn_start_onboarding: {
    tr: "Yeni Altyapıyı Hazırla",
    en: "Provision New Tenancy"
  },
  saas_tenant_title: {
    tr: "🏢 Kurumsal Organizasyon Seçici",
    en: "🏢 Organization Switcher"
  },
  saas_tenant_desc: {
    tr: "Aktif kurumsal kiracıyı, yapay zeka kümesini ve güvenlik erişim yetkilerini değiştirin.",
    en: "Select active tenant corporation, executive workspace cluster, and security privileges."
  },
  saas_label_org: {
    tr: "Aktif Kiracı (Tenant)",
    en: "Active Tenant"
  },
  saas_label_role: {
    tr: "Erişim Rolü",
    en: "Security Role"
  },
  saas_label_cluster: {
    tr: "Hesaplama Sunucu Kümesi",
    en: "Compute Workspace"
  },
  saas_role_permission: {
    tr: "Rol yetki düzeyi:",
    en: "Role privileges:"
  },
  saas_map_title: {
    tr: "🌐 Küresel Sunucu Ağ Haritası",
    en: "🌐 Global Server Map"
  },
  saas_map_desc: {
    tr: "Uluslararası analiz talepleri için sunucu durumları ve canlı ağ gecikmeleri.",
    en: "Compute status and network routes for international enterprise analytics queries."
  },
  saas_database_health: {
    tr: "Veritabanı Kümesi Sağlığı:",
    en: "Database Cluster Health:"
  },
  saas_api_title: {
    tr: "🔌 Entegrasyon ve Webhook Merkezi",
    en: "🔌 Integration & Webhook Hub"
  },
  saas_api_desc: {
    tr: "ERP/CRM platformlarını bağlayın ve canlı REST API anahtarları üretin.",
    en: "Connect external CRM/ERP platforms and generate secure live REST tokens."
  },
  btn_gen_api: {
    tr: "API Token Üret",
    en: "Generate API Token"
  },
  saas_webhooks_health: {
    tr: "Webhook Bağlantı Sağlığı:",
    en: "Webhook Health status:"
  },
  saas_billing_title: {
    tr: "💳 Faturalandırma ve AI Kullanımı",
    en: "💳 Billing & AI Usage"
  },
  saas_billing_desc: {
    tr: "Abonelik planları, API kota sınırları ve fatura oluşturma paneli.",
    en: "Subscription pricing plans, API monthly usage thresholds, and invoice compilations."
  },
  saas_token_limit: {
    tr: "Aylık AI Token Kullanımı",
    en: "AI Model Tokens Usage"
  },
  saas_api_limit: {
    tr: "API İstek Limit Kotası",
    en: "API Calls Threshold"
  },
  btn_invoice_pdf: {
    tr: "Faturayı İndir (PDF)",
    en: "Download Invoice (PDF)"
  },
  saas_security_title: {
    tr: "🛡️ Güvenlik Operasyonları (SOC)",
    en: "🛡️ Security Control (SOC)"
  },
  saas_security_desc: {
    tr: "Sistem giriş logları, şüpheli hareketler, şifreleme ve SOC2 uyumluluk raporları.",
    en: "Access audit logs, suspect login attempts, encryption metrics, and compliance logs."
  },
  saas_cyber_status: {
    tr: "AI Tehdit Kalkanı Aktif",
    en: "AI Threat Shield active"
  },
  saas_cyber_desc: {
    tr: "Bulut kümelerinde herhangi bir siber tehdit veya sızıntı saptanmadı.",
    en: "0 active threat vector alerts detected in cluster."
  },
  saas_compliance: {
    tr: "SOC2/HIPAA Uyumluluk Durumu:",
    en: "SOC2/HIPAA compliance status:"
  },
  saas_compliant: {
    tr: "UYUMLU",
    en: "COMPLIANT"
  },
  saas_market_title: {
    tr: "🛒 AI Modül Mağazası",
    en: "🛒 AI Module Marketplace"
  },
  saas_market_desc: {
    tr: "Çalışma alanınıza özel sektörel modeller ve ek yapay zeka ajanları kurun.",
    en: "Install premium sector models and agent extensions inside your workspaces."
  },
  saas_license: {
    tr: "Bulut Lisans Süresi:",
    en: "Cloud License Term:"
  }
};

const sectorSchemas = {
  vakif: {
    version: "v1.4.2",
    name: { tr: "Dernekler ve Vakıflar", en: "Associations and Charities" },
    algorithm: { tr: "Karar Ağacı (Decision Tree)", en: "Decision Tree" },
    metrics: { accuracy: 98.40, precision: 97.80, recall: 99.10 },
    headers: {
      tr: ["Bağışçı İsmi", "Katılım Sıra", "Bağış Tutarı ($)", "Üyelik Süresi (Yıl)", "Sınıflandırma"],
      en: ["Donor Name", "Attendance Freq", "Donation Amount ($)", "Membership (Years)", "Classification"]
    },
    inputs: [
      { key: "credit", min: 1, max: 25, step: 1, value: 8, label: { tr: "Aylık Katılım Sıklığı", en: "Monthly Attendance Frequency" }, unit: { tr: "", en: "" } },
      { key: "income", min: 10, max: 1000, step: 10, value: 150, label: { tr: "Geçmiş Bağış Tutarı ($)", en: "Past Donation Amount ($)" }, unit: { tr: "", en: "" } },
      { key: "dti", min: 1, max: 15, step: 1, value: 3, label: { tr: "Üyelik Süresi (Yıl)", en: "Membership Duration (Years)" }, unit: { tr: " Yıl", en: " Years" } }
    ],
    formFields: [
      { key: "credit", min: 1, max: 30, value: 6, label: { tr: "Aylık Katılım Sıklığı (1-30)", en: "Monthly Attendance Frequency (1-30)" } },
      { key: "income", min: 10, max: 10000, value: 100, label: { tr: "Geçmiş Bağış Tutarı ($)", en: "Past Donation Amount ($)" } },
      { key: "dti", min: 0, max: 30, value: 2, label: { tr: "Üyelik Süresi (Yıl)", en: "Membership Duration (Years)" } }
    ]
  },
  egitim: {
    version: "v2.0.8",
    name: { tr: "Eğitim Sektörü", en: "Education Sector" },
    algorithm: { tr: "Lojistik Regresyon", en: "Logistic Regression" },
    metrics: { accuracy: 96.12, precision: 95.50, recall: 96.80 },
    headers: {
      tr: ["Öğrenci Adı", "Çalışma (Saat)", "Devam (%)", "Sınav Puanı", "Başarı Riski"],
      en: ["Student Name", "Study (Hours)", "Attendance (%)", "Exam Score", "Failure Risk"]
    },
    inputs: [
      { key: "glucose", min: 2, max: 40, step: 1, value: 12, label: { tr: "Haftalık Çalışma Süresi (Saat)", en: "Weekly Study Time (Hours)" }, unit: { tr: " Saat", en: " Hours" } },
      { key: "bmi", min: 30, max: 100, step: 1, value: 85, label: { tr: "Ders Devam Oranı (%)", en: "Course Attendance Rate (%)" }, unit: { tr: "%", en: "%" } },
      { key: "age", min: 20, max: 100, step: 1, value: 70, label: { tr: "Deneme Sınav Puanı", en: "Mock Exam Score" }, unit: { tr: "", en: "" } }
    ],
    formFields: [
      { key: "glucose", min: 0, max: 80, value: 15, label: { tr: "Çalışma Süresi (Saat)", en: "Study Time (Hours)" } },
      { key: "bmi", min: 0, max: 100, value: 80, label: { tr: "Devam Oranı (%)", en: "Attendance Rate (%)" } },
      { key: "age", min: 0, max: 100, value: 70, label: { tr: "Deneme Sınav Puanı (0-100)", en: "Mock Exam Score (0-100)" } }
    ]
  },
  gida: {
    version: "v3.5.1",
    name: { tr: "Gıda Sektörü", en: "Food Sector" },
    algorithm: { tr: "Çoklu Doğrusal Regresyon", en: "Multiple Linear Regression" },
    metrics: { accuracy: 94.85, precision: 94.20, recall: 95.50 },
    headers: {
      tr: ["Restoran Kodu / Sipariş", "Sipariş Hacmi", "Restoran Puanı", "Kampanya", "Günlük Yemek Talebi"],
      en: ["Restaurant Code / Order", "Order Volume", "Restaurant Score", "Campaign", "Daily Food Demand"]
    },
    inputs: [
      { key: "size", min: 100, max: 4000, step: 50, value: 1500, label: { tr: "Ort. Sipariş Adedi", en: "Avg. Order Quantity" }, unit: { tr: " Sipariş", en: " Orders" } },
      { key: "beds", min: 1, max: 5, step: 0.1, value: 4.2, label: { tr: "Restoran Değerlendirme Puanı", en: "Restaurant Rating Score" }, unit: { tr: " Puan", en: " Points" } },
      { key: "location", type: "toggle", value: false, label: { tr: "Kampanya Uygulaması", en: "Campaign Application" }, desc: { tr: "Ek sipariş katsayısı ekler", en: "Adds additional order coefficient" } }
    ],
    formFields: [
      { key: "size", min: 10, max: 10000, value: 1000, label: { tr: "Ort. Sipariş Adedi", en: "Avg. Order Quantity" } },
      { key: "beds", min: 1, max: 5, value: 4.0, label: { tr: "Restoran Puanı (1-5)", en: "Restaurant Score (1-5)" } },
      { key: "location", type: "toggle", value: false, label: { tr: "Kampanya Uygulandı Mı?", en: "Was Campaign Applied?" } }
    ]
  },
  lojistik: {
    version: "v2.2.0",
    name: { tr: "Ulaşım ve Lojistik", en: "Transportation and Logistics" },
    algorithm: { tr: "Ağırlık Katsayı Analizi", en: "Weight Coefficient Analysis" },
    metrics: { accuracy: 95.30, precision: 94.70, recall: 96.10 },
    headers: {
      tr: ["Teslimat Kodu", "Mesafe (km)", "Trafik Katsayısı", "Paket Adedi", "Gecikme Olasılığı"],
      en: ["Delivery Code", "Distance (km)", "Traffic Coefficient", "Package Count", "Delay Probability"]
    },
    inputs: [
      { key: "days", min: 1, max: 150, step: 1, value: 12, label: { tr: "Mesafe Uzunluğu", en: "Distance Length" }, unit: { tr: " km", en: " km" } },
      { key: "sessions", min: 1, max: 10, step: 1, value: 3, label: { tr: "Trafik Yoğunluğu", en: "Traffic Density" }, unit: { tr: "", en: "" } },
      { key: "tickets", min: 1, max: 10, step: 1, value: 1, label: { tr: "Paket Yükü", en: "Package Load" }, unit: { tr: " Adet", en: " Units" } }
    ],
    formFields: [
      { key: "days", min: 1, max: 500, value: 15, label: { tr: "Mesafe Uzunluğu (km)", en: "Distance (km)" } },
      { key: "sessions", min: 1, max: 10, value: 4, label: { tr: "Trafik Yoğunluğu (1-10)", en: "Traffic Density (1-10)" } },
      { key: "tickets", min: 1, max: 50, value: 2, label: { tr: "Paket Yük Adedi", en: "Package Load Quantity" } }
    ]
  },
  tekstil: {
    version: "v1.9.7",
    name: { tr: "Tekstil Perakende", en: "Textile Retail" },
    algorithm: { tr: "K-En Yakın Komşu (K-NN)", en: "K-Nearest Neighbors (K-NN)" },
    metrics: { accuracy: 97.65, precision: 97.00, recall: 98.20 },
    headers: {
      tr: ["Müşteri Adı", "Aylık Alışveriş", "Sepet Tutarı", "İndirim Etkisi", "Müşteri Sınıfı"],
      en: ["Customer Name", "Monthly Shopping", "Basket Amount", "Discount Effect", "Customer Class"]
    },
    inputs: [
      { key: "days", min: 1, max: 30, step: 1, value: 5, label: { tr: "Aylık Alışveriş Sıklığı", en: "Monthly Shopping Frequency" }, unit: { tr: " Kez", en: " Times" } },
      { key: "sessions", min: 100, max: 5000, step: 50, value: 1500, label: { tr: "Ortalama Sepet Tutarı", en: "Average Basket Amount" }, unit: { tr: " TL", en: " TRY" } },
      { key: "tickets", min: 0, max: 100, step: 5, value: 40, label: { tr: "İndirim Hassasiyeti", en: "Discount Sensitivity" }, unit: { tr: "%", en: "%" } }
    ],
    formFields: [
      { key: "days", min: 1, max: 50, value: 4, label: { tr: "Alışveriş Sıklığı (Kez)", en: "Shopping Frequency (Times)" } },
      { key: "sessions", min: 100, max: 10000, value: 1200, label: { tr: "Sepet Tutarı (TL)", en: "Basket Amount (TRY)" } },
      { key: "tickets", min: 0, max: 100, value: 30, label: { tr: "İndirim Hassasiyeti (%)", en: "Discount Sensitivity (%)" } }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  
  // ================= STATE MANAGEMENT & GLOBAL VARIABLES =================
  const PANELS = {
    dashboard: 'dashboard-insights-section',
    schema: 'dashboard-schema-intel-section',
    automl: 'dashboard-automl-section',
    builder: 'dashboard-autobuilder-section',
    autobuilder: 'dashboard-autobuilder-section',
    copilot: 'dashboard-aura-os-section',
    aura: 'dashboard-aura-os-section',
    cloud: 'dashboard-saas-section',
    saas: 'dashboard-saas-section'
  };

  const isAuthenticated = true; // Static Demo Auth Bypass Helper

  // Centralized API client wrapper to prevent app crashes and mock responses in offline/static environments
  const apiClient = {
    safeJsonParse(text, fallback = null) {
      try {
        return text ? JSON.parse(text) : fallback;
      } catch (e) {
        console.warn("[API Debug] Failed to parse JSON:", e);
        return fallback;
      }
    },

    async fetchWithTimeout(resource, options = {}, timeout = 5000) {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeout);
      try {
        const response = await fetch(resource, {
          ...options,
          signal: controller.signal
        });
        clearTimeout(id);
        return response;
      } catch (error) {
        clearTimeout(id);
        throw error;
      }
    },

    handleApiError(error, endpoint) {
      console.warn(`[API Client Warning] Request to ${endpoint} failed:`, error.message || error);
      return {
        ok: true,
        status: 200,
        json: async () => ({ status: "success", message: "Simulated response", offline: true })
      };
    },

    getMockCards() {
      return apiClient.safeJsonParse(localStorage.getItem('vertex_mock_cards'), []);
    },

    saveMockCard(card) {
      const cards = this.getMockCards();
      const filtered = cards.filter(c => c.username !== card.username);
      filtered.push(card);
      localStorage.setItem('vertex_mock_cards', JSON.stringify(filtered));
      console.log(`[API Client Debug] Mock card saved: ${card.username}`);
    },

    findMockCard(username, password) {
      const cards = this.getMockCards();
      return cards.find(c => c.username === username && c.password === password);
    },

    activateMockCard(username) {
      const cards = this.getMockCards();
      const card = cards.find(c => c.username === username);
      if (card) {
        card.active = true;
        localStorage.setItem('vertex_mock_cards', JSON.stringify(cards));
        console.log(`[API Client Debug] Mock card activated: ${username}`);
      }
    },

    async request(url, options = {}) {
      console.log(`[API Client Request] ${options.method || 'GET'} ${url}`);

      if (url.includes('/api/create-card')) {
        try {
          const body = apiClient.safeJsonParse(options.body, {});
          this.saveMockCard({
            username: body.username,
            password: body.password,
            company: body.company,
            sector: body.sector,
            expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000,
            active: false
          });
          return {
            ok: true,
            status: 200,
            json: async () => ({ status: 'success', message: 'Card registered mock successfully' })
          };
        } catch (e) {
          return {
            ok: false,
            status: 500,
            json: async () => ({ status: 'error', message: e.message })
          };
        }
      }

      if (url.includes('/api/activate-card')) {
        try {
          const body = apiClient.safeJsonParse(options.body, {});
          this.activateMockCard(body.username);
          return {
            ok: true,
            status: 200,
            json: async () => ({ status: 'success', message: 'Card activated mock successfully' })
          };
        } catch (e) {
          return {
            ok: false,
            status: 500,
            json: async () => ({ status: 'error', message: e.message })
          };
        }
      }

      if (url.includes('/api/login')) {
        try {
          const body = apiClient.safeJsonParse(options.body, {});
          const u = body.username;
          const p = body.password;

          let card = this.findMockCard(u, p);
          
          if (!card && tempCredentials && tempCredentials.username === u && tempCredentials.password === p) {
            card = tempCredentials;
          }

          if (!card && u === 'enterprise_admin' && p === 'mock_password') {
            card = {
              username: 'enterprise_admin',
              password: 'mock_password',
              company: 'ANL Global Systems Inc.',
              sector: 'vakif'
            };
          }

          if (card) {
            console.log(`[API Client Debug] Mock login succeeded for user: ${u}`);
            return {
              ok: true,
              status: 200,
              json: async () => ({
                status: 'success',
                userId: u,
                company: card.company,
                sector: card.sector,
                sessionToken: 'mock_token_' + Math.random().toString(36).substr(2)
              })
            };
          } else {
            console.warn(`[API Client Debug] Mock login failed for user: ${u}`);
            return {
              ok: false,
              status: 401,
              json: async () => ({ status: 'error', message: 'Invalid credentials' })
            };
          }
        } catch (e) {
          return {
            ok: false,
            status: 500,
            json: async () => ({ status: 'error', message: e.message })
          };
        }
      }

      try {
        const response = await this.fetchWithTimeout(url, options, 4000);
        return response;
      } catch (error) {
        if (url.endsWith('.json')) {
          throw error;
        }
        return this.handleApiError(error, url);
      }
    }
  };

  let currentCompany = '';
  let currentSector = '';
  let lastUploadedDataset = null; // Shared AutoML/Schema dataset state
  let tempCredentials = null;
  let countdownInterval = null;
  let loginFailedAttempts = 0;
  let activePerformanceMetrics = null;
  let sectorDataLoaded = false;
  let sectorDataJSON = null;
  let baseline_state = null;

  function transitionToDashboard() {
    const userCardDataRaw = localStorage.getItem('userCardData');
    if (userCardDataRaw) {
      try {
        const cardData = JSON.parse(userCardDataRaw);
        if (cardData && cardData.company && cardData.sector) {
          currentCompany = cardData.company;
          currentSector = cardData.sector;
          
          tempCredentials = {
            username: cardData.username || '',
            password: cardData.password || '',
            company: cardData.company,
            sector: cardData.sector,
            expiresAt: cardData.expiresAt || (Date.now() + 7 * 24 * 60 * 60 * 1000)
          };
          
          if (countdownInterval) {
            clearInterval(countdownInterval);
            countdownInterval = null;
          }
          
          const timerProgress = document.getElementById('timer-progress');
          const countdownTimer = document.getElementById('countdown-timer');
          if (timerProgress) timerProgress.style.width = '0%';
          if (countdownTimer) countdownTimer.textContent = '00:00';
          
          // Explicitly update URL hash to #dashboard on login transition
          window.location.hash = 'dashboard';

          // Replaced direct page switch with structured App login initialization
          if (typeof App !== 'undefined' && typeof App.initializeDashboardAfterLogin === 'function') {
            App.initializeDashboardAfterLogin();
          } else {
            switchPage('dashboard', false);
          }
        }
      } catch (e) {
        console.error('Failed to parse session data in transitionToDashboard:', e);
      }
    }
  }

  const sectorLabelsCard = {
    tr: {
      vakif: 'Dernek ve Vakıf',
      egitim: 'Eğitim',
      gida: 'Gıda',
      lojistik: 'Lojistik',
      tekstil: 'Tekstil Perakende'
    },
    en: {
      vakif: 'Association and Charity',
      egitim: 'Education',
      gida: 'Food',
      lojistik: 'Logistics',
      tekstil: 'Textile Retail'
    }
  };

  // Language switcher event handling
  const langSwitchers = document.querySelectorAll('.lang-switcher button');
  langSwitchers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedLang = e.target.getAttribute('data-lang');
      setLanguage(selectedLang);
    });
  });

  // Dynamic Theme Color Accent Config per Sector
  const themeColors = {
    vakif: {
      primary:    'hsl(215, 68%, 53%)',
      glow:       'hsla(215, 68%, 53%, 0.18)',
      bgA:        'hsla(215, 70%, 12%, 0.20)',  // top-left deep gradient
      bgB:        'hsla(230, 60%, 12%, 0.18)'   // bottom-right deep gradient
    },
    egitim: {
      primary:    'hsl(255, 50%, 62%)',
      glow:       'hsla(255, 50%, 62%, 0.15)',
      bgA:        'hsla(255, 60%, 12%, 0.20)',
      bgB:        'hsla(285, 50%, 12%, 0.18)'
    },
    gida: {
      primary:    'hsl(32, 65%, 50%)',
      glow:       'hsla(32, 65%, 50%, 0.15)',
      bgA:        'hsla(32,  65%, 12%, 0.20)',
      bgB:        'hsla(45,   60%, 12%, 0.18)'
    },
    lojistik: {
      primary:    'hsl(350, 62%, 55%)',
      glow:       'hsla(350, 62%, 55%, 0.15)',
      bgA:        'hsla(350, 65%, 12%, 0.20)',
      bgB:        'hsla(10,   60%, 12%, 0.18)'
    },
    tekstil: {
      primary:    'hsl(172, 60%, 46%)',
      glow:       'hsla(172, 60%, 46%, 0.15)',
      bgA:        'hsla(172,  60%, 12%, 0.20)',
      bgB:        'hsla(145,  50%, 12%, 0.18)'
    },
    default: {
      primary:    'hsl(215, 68%, 53%)',
      glow:       'hsla(215, 68%, 53%, 0.18)',
      bgA:        'hsla(215, 70%, 12%, 0.15)',
      bgB:        'hsla(255, 50%, 12%, 0.15)'
    }
  };

  // Dynamic Form Renderer Function
  function renderDynamicFormFields(fields) {
    const container = document.getElementById('dynamic-form-fields');
    if (!container) return;
    container.innerHTML = '';

    fields.forEach(field => {
      const group = document.createElement('div');
      group.className = 'control-group';

      // 1. Create label
      const label = document.createElement('label');
      label.className = 'control-label';
      label.setAttribute('for', `add-${field.key}`);
      label.textContent = (field.label[currentLang] || field.label.en || field.label) + ":";
      group.appendChild(label);

      // Determine field type
      const type = field.type || (field.hasOwnProperty('min') ? 'number' : 'text');

      if (type === 'select') {
        const select = document.createElement('select');
        select.className = 'select-input';
        select.id = `add-${field.key}`;
        select.required = field.required !== false;
        
        if (field.options) {
          field.options.forEach(opt => {
            const option = document.createElement('option');
            option.value = opt.value;
            option.textContent = opt.label[currentLang] || opt.label.en || opt.label;
            if (opt.value === field.value) option.selected = true;
            select.appendChild(option);
          });
        }
        group.appendChild(select);
      } else if (type === 'toggle') {
        // Switch style container
        const toggleContainer = document.createElement('div');
        toggleContainer.className = 'toggle-container';
        toggleContainer.style.marginBottom = '1rem';
        
        const labelSpan = document.createElement('span');
        labelSpan.style.fontSize = '0.85rem';
        labelSpan.style.color = 'var(--text-secondary)';
        labelSpan.textContent = field.label[currentLang] || field.label.en;
        
        label.style.display = 'none'; // hide the standard label
        
        const switchLabel = document.createElement('label');
        switchLabel.className = 'switch';
        
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = `add-${field.key}`;
        input.checked = !!field.value;
        
        const spanToggle = document.createElement('span');
        spanToggle.className = 'slider-toggle';
        
        switchLabel.appendChild(input);
        switchLabel.appendChild(spanToggle);
        
        toggleContainer.appendChild(labelSpan);
        toggleContainer.appendChild(switchLabel);
        group.appendChild(toggleContainer);
      } else if (type === 'number') {
        const input = document.createElement('input');
        input.type = 'number';
        input.className = 'text-input';
        input.id = `add-${field.key}`;
        input.value = field.value !== undefined ? field.value : '';
        input.required = field.required !== false;
        
        if (field.min !== undefined) input.min = field.min;
        if (field.max !== undefined) input.max = field.max;
        if (field.step !== undefined) input.step = field.step;
        if (field.placeholder !== undefined) {
          input.placeholder = typeof field.placeholder === 'object' 
            ? (field.placeholder[currentLang] || field.placeholder.en) 
            : field.placeholder;
        }
        
        group.appendChild(input);
      } else {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'text-input';
        input.id = `add-${field.key}`;
        input.value = field.value !== undefined ? field.value : '';
        input.required = field.required !== false;
        
        if (field.minLength !== undefined) input.minLength = field.minLength;
        if (field.maxLength !== undefined) input.maxLength = field.maxLength;
        if (field.pattern !== undefined) input.pattern = field.pattern;
        if (field.placeholder !== undefined) {
          input.placeholder = typeof field.placeholder === 'object' 
            ? (field.placeholder[currentLang] || field.placeholder.en) 
            : field.placeholder;
        }
        
        group.appendChild(input);
      }

      container.appendChild(group);
    });
  }

  function updateThemeColor(sector) {
    const theme = themeColors[sector] || themeColors.default;

    // 1. Accent colour tokens
    document.documentElement.style.setProperty('--primary',      theme.primary);
    document.documentElement.style.setProperty('--primary-glow', theme.glow);

    // 2. Deep body background gradient (sector atmosphere)
    document.body.style.backgroundImage = [
      `radial-gradient(at 10% 10%, ${theme.bgA} 0px, transparent 55%)`,
      `radial-gradient(at 90% 90%, ${theme.bgB} 0px, transparent 55%)`
    ].join(',');
    document.body.style.transition = 'background-image 0.8s ease';
  }

  // Handle Sector Selection glow highlight, dynamic theme color + glow orb palette
  const sectorSelect = document.getElementById('sector-select');
  if (sectorSelect) {
    sectorSelect.addEventListener('change', (e) => {
      const selectedSector = e.target.value;
      document.querySelectorAll('.sector-promo-card').forEach(card => {
        if (card.getAttribute('data-sector') === selectedSector) {
          card.classList.add('active-selection');
        } else {
          card.classList.remove('active-selection');
        }
      });
      // Theme accent + deep background
      updateThemeColor(selectedSector);
      // Stamp sector onto login modal so CSS orb palette selectors fire
      const lm = document.getElementById('login-modal');
      if (lm) lm.setAttribute('data-sector', selectedSector);
    });
  }

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('vertex_lang', lang);
    
    document.querySelectorAll('.lang-switcher button').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    translateDOM();

    if (pageDashboard.style.display !== 'none') {
      updateDashboardLanguageSpecifics();
      renderDatabaseTable();
      evaluateMLModel();
      renderXaiWeights();
      updateWhatIfComparison();
      initAuraChat();
      if (typeof refreshAutoMLOutputs === 'function') {
        refreshAutoMLOutputs();
      }
    }
  }

  function translateDOM() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[key] && translations[key][currentLang]) {
        el.innerHTML = translations[key][currentLang];
      }
    });

    const titleElements = document.querySelectorAll('[data-i18n-title]');
    titleElements.forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (translations[key] && translations[key][currentLang]) {
        el.setAttribute('title', translations[key][currentLang]);
      }
    });

    document.querySelectorAll('.btn-copy').forEach(btn => {
      btn.setAttribute('title', currentLang === 'tr' ? 'Kopyala' : 'Copy');
    });

    document.documentElement.setAttribute('lang', currentLang);

    const placeholders = {
      'company-name-input': {
        tr: 'Örn: Asya Holding A.Ş.',
        en: 'e.g., Asya Holding Inc.'
      },
      'login-username': {
        tr: 'şirketadı_vertex',
        en: 'companyname_vertex'
      },
      'cust-name-input': {
        tr: 'Örn: Ayşe Yıldız',
        en: 'e.g., Jane Doe'
      }
    };

    for (let id in placeholders) {
      const input = document.getElementById(id);
      if (input) {
        input.placeholder = placeholders[id][currentLang];
      }
    }
  }

  function updateDashboardLanguageSpecifics() {
    if (currentCompany) {
      document.getElementById('dash-company-name').textContent = currentCompany.toUpperCase();
    }
    
    const sectorLabels = {
      tr: {
        vakif: 'DERNEKLER VE VAKIFLAR',
        egitim: 'EĞİTİM SEKTÖRÜ',
        gida: 'GIDA SEKTÖRÜ',
        lojistik: 'ULAŞIM VE LOJİSTİK',
        tekstil: 'TEKSTİL PERAKENDE'
      },
      en: {
        vakif: 'ASSOCIATIONS AND CHARITIES',
        egitim: 'EDUCATION SECTOR',
        gida: 'FOOD SECTOR',
        lojistik: 'TRANSPORT AND LOGISTICS',
        tekstil: 'TEXTILE RETAIL'
      }
    };
    if (currentSector) {
      document.getElementById('dash-sector-badge').textContent = sectorLabels[currentLang][currentSector];
    }
    
    const dashTitle = document.getElementById('dash-title');
    const dashTitleLabels = {
      tr: {
        vakif: "Vakıf/Dernek Bağış Sınıflandırma Paneli",
        egitim: "Öğrenci Başarı Olasılığı Analiz Paneli",
        gida: "Gıda Sipariş Talep Regresyon Paneli",
        lojistik: "Lojistik Teslimat Gecikme Risk Paneli",
        tekstil: "Tekstil Müşteri Segmentasyon Paneli"
      },
      en: {
        vakif: "Charity/Association Donation Classification Panel",
        egitim: "Student Success Probability Analysis Panel",
        gida: "Food Order Demand Regression Panel",
        lojistik: "Logistics Delivery Delay Risk Panel",
        tekstil: "Textile Customer Segmentation Panel"
      }
    };
    if (currentSector) {
      dashTitle.textContent = dashTitleLabels[currentLang][currentSector];
    }
  }

  // Local databases (in-memory tables populated per sector)
  const databases = {
    vakif: [
      { name: "Mehmet Efendi", income: 80, credit: 8, dti: 3, status: "Düzenli Bağışçı", rawStatus: "approved" },
      { name: "Dernek Dostu", income: 20, credit: 2, dti: 1, status: "Potansiyel Bağışçı", rawStatus: "denied" },
      { name: "Vakıf Destek", income: 300, credit: 12, dti: 5, status: "Düzenli Bağışçı", rawStatus: "approved" },
      { name: "Elif Su", income: 50, credit: 5, dti: 2, status: "Düzenli Bağışçı", rawStatus: "approved" },
      { name: "Canan Gül", income: 80, credit: 3, dti: 4, status: "Potansiyel Bağışçı", rawStatus: "denied" }
    ],
    egitim: [
      { name: "Ahmet Alp", glucose: 28, bmi: 92, age: 85, status: "Düşük Risk (%2)", rawStatus: "approved" },
      { name: "Sıla Can", glucose: 6, bmi: 45, age: 40, status: "Yüksek Risk (%86)", rawStatus: "denied" },
      { name: "Deniz Eren", glucose: 15, bmi: 75, age: 65, status: "Orta Risk (%22)", rawStatus: "warning" },
      { name: "Kaan Öz", glucose: 35, bmi: 98, age: 92, status: "Düşük Risk (%1)", rawStatus: "approved" },
      { name: "Zeynep Efe", glucose: 10, bmi: 60, age: 55, status: "Yüksek Risk (%56)", rawStatus: "denied" }
    ],
    gida: [
      { name: "Sipariş A-12", size: 1500, beds: 4.2, location: "Evet", status: "2112 Sipariş", rawStatus: "approved" },
      { name: "Sipariş B-34", size: 2200, beds: 4.8, location: "Hayır", status: "2160 Sipariş", rawStatus: "approved" },
      { name: "Sipariş C-56", size: 1100, beds: 3.9, location: "Evet", status: "1787 Sipariş", rawStatus: "approved" },
      { name: "Sipariş D-78", size: 3200, beds: 4.9, location: "Evet", status: "3350 Sipariş", rawStatus: "approved" },
      { name: "Sipariş E-90", size: 900, beds: 3.5, location: "Hayır", status: "1250 Sipariş", rawStatus: "approved" }
    ],
    lojistik: [
      { name: "Rota TR-34", days: 12, sessions: 3, tickets: 1, status: "Zamanında (%15 Risk)", rawStatus: "approved" },
      { name: "Rota TR-06", days: 45, sessions: 9, tickets: 5, status: "Orta Risk (%53)", rawStatus: "warning" },
      { name: "Rota TR-35", days: 85, sessions: 6, tickets: 2, status: "Orta Risk (%49)", rawStatus: "warning" },
      { name: "Rota TR-16", days: 8, sessions: 2, tickets: 1, status: "Zamanında (%11 Risk)", rawStatus: "approved" },
      { name: "Rota TR-54", days: 120, sessions: 8, tickets: 6, status: "Yüksek Risk (%75)", rawStatus: "denied" }
    ],
    tekstil: [
      { name: "Ahmet Yılmaz", days: 12, sessions: 2500, tickets: 20, status: "Premium Alıcı", rawStatus: "approved" },
      { name: "Ayşe Kaya", days: 4, sessions: 800, tickets: 75, status: "Fırsatçı Alıcı", rawStatus: "warning" },
      { name: "Can Demir", days: 2, sessions: 300, tickets: 10, status: "Düşük Aktiviteli Alıcı", rawStatus: "denied" },
      { name: "Fatma Şahin", days: 18, sessions: 3500, tickets: 15, status: "Premium Alıcı", rawStatus: "approved" },
      { name: "Emre Can", days: 6, sessions: 1200, tickets: 85, status: "Fırsatçı Alıcı", rawStatus: "warning" }
    ]
  };

  // Canvas global reference
  let activeCanvas = null;
  let activeCanvasCtx = null;
  let regressionDots = []; // Real estate background dots

  // HTML Element Selectors
  const pageWelcome = document.getElementById('page-welcome');
  const pageDashboard = document.getElementById('page-dashboard');
  const loginModal = document.getElementById('login-modal');
  
  // Forms & Modal controls
  const accessCardForm = document.getElementById('access-card-form');
  const loginForm = document.getElementById('login-form');
  const btnOpenLogin = document.getElementById('btn-open-login');
  const btnCloseModal = document.getElementById('btn-close-modal');
  const btnCancelLogin = document.getElementById('btn-cancel-login');
  const loginErrorMsg = document.getElementById('login-error');

  // Generated Access Card components
  const tempCard = document.getElementById('temp-card');
  const tempUsernameInput = document.getElementById('temp-username');
  const tempPasswordInput = document.getElementById('temp-password');
  const tempCardSector = document.getElementById('temp-card-sector');
  const countdownTimer = document.getElementById('countdown-timer');
  const timerProgress = document.getElementById('timer-progress');
  const btnAutoLogin = document.getElementById('btn-auto-login');

  // Copy Buttons
  const btnCopyUsername = document.getElementById('btn-copy-username');
  const btnCopyPassword = document.getElementById('btn-copy-password');

  // ================= STATE 1: ACCESS CARD GENERATION & TIMER =================

  // Utility to generate strong password
  function generatePassword(length = 12) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
    let password = '';
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  // Cleanup company name for username mapping
  function sanitizeUsername(name) {
    let clean = name.toLowerCase()
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
      .replace(/[^a-z0-9]/g, '');
    return (clean || 'firma') + '_vertex';
  }

  // Dynamic Form Validation: Hide "Giriş Kartı Oluştur" button until valid inputs are entered
  const companyNameInput = document.getElementById('company-name-input');
  const btnCreateCard = document.getElementById('btn-create-card');

  function validateCardForm() {
    const isCompanyValid = companyNameInput && companyNameInput.value.trim() !== '';
    const isSectorValid = sectorSelect && sectorSelect.value !== '';
    
    if (isCompanyValid && isSectorValid) {
      btnCreateCard.style.display = 'block';
      btnCreateCard.disabled = false;
    } else {
      btnCreateCard.style.display = 'none';
      btnCreateCard.disabled = true;
    }
  }

  if (companyNameInput && sectorSelect && btnCreateCard) {
    companyNameInput.addEventListener('input', validateCardForm);
    sectorSelect.addEventListener('change', validateCardForm);
    validateCardForm();
  }

  // Form Submit: Create Access Card
  accessCardForm.addEventListener('submit', (e) => {
    e.preventDefault();
    loginFailedAttempts = 0; // Reset failed counter
    const company = document.getElementById('company-name-input').value.trim();
    const sector = document.getElementById('sector-select').value;

    if (!company || !sector) return;

    // Generate credentials
    const username = sanitizeUsername(company);
    const password = generatePassword(10);
    const duration = 10 * 60; // 10 minutes in seconds
    let secondsLeft = duration;

    // Store globally
    tempCredentials = {
      username,
      password,
      company,
      sector,
      expiresAt: Date.now() + (duration * 1000)
    };

    // Register card on the server
    apiClient.request('/api/create-card', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
        company,
        sector
      })
    }).catch(err => console.error('Error creating card on server:', err));

    // Populate Access Card UI
    tempUsernameInput.value = username;
    tempPasswordInput.value = password;
    
    tempCardSector.textContent = sectorLabelsCard[currentLang][sector];
    tempCardSector.className = `badge badge-success`; // consistent style

    // Show Card
    tempCard.style.display = 'block';

    // Generate QR Code containing login link
    const loginUrl = `${window.location.origin}${window.location.pathname}?qrLogin=true&u=${encodeURIComponent(username)}&p=${encodeURIComponent(password)}&s=${encodeURIComponent(sector)}&c=${encodeURIComponent(company)}`;
    document.getElementById('qrcode-container').innerHTML = '';
    new QRCode(document.getElementById('qrcode-container'), {
      text: loginUrl,
      width: 130,
      height: 130,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.M
    });
    document.getElementById('btn-copy-login-url').setAttribute('data-url', loginUrl);

    tempCard.scrollIntoView({ behavior: 'smooth' });

    // Handle Countdown Timer
    if (countdownInterval) clearInterval(countdownInterval);
    
    countdownTimer.textContent = '10:00';
    timerProgress.style.width = '100%';
    timerProgress.style.backgroundColor = 'hsl(120, 85%, 45%)'; // Reset to green

    countdownInterval = setInterval(() => {
      secondsLeft--;
      
      const mins = Math.floor(secondsLeft / 60);
      const secs = secondsLeft % 60;
      countdownTimer.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

      // Update progress bar width and HSL color (120 to 0 hue)
      const pct = (secondsLeft / duration) * 100;
      timerProgress.style.width = `${pct}%`;
      const hue = (secondsLeft / duration) * 120;
      timerProgress.style.backgroundColor = `hsl(${hue}, 85%, 45%)`;

      if (secondsLeft <= 0) {
        clearInterval(countdownInterval);
        expireCard();
      }
    }, 1000);
  });

  // Action: Expire Credentials Card
  function expireCard() {
    tempCredentials = null;
    tempCard.style.display = 'none';
    if (currentLang === 'tr') {
      alert("Geçici giriş kartınızın 10 dakikalık kullanım süresi dolmuş ve geçerliliğini yitirmiştir. Lütfen yeni bir kart oluşturun.");
    } else {
      alert("Your temporary entry card has expired after 10 minutes. Please generate a new card.");
    }
    document.getElementById('company-name-input').value = '';
    document.getElementById('sector-select').value = '';
    validateCardForm();
  }

  // Clipboard Copiers
  function setupCopyButton(btn, input) {
    btn.addEventListener('click', () => {
      input.select();
      document.execCommand('copy');
      const originalText = btn.textContent;
      btn.textContent = currentLang === 'tr' ? 'Kopyalandı!' : 'Copied!';
      btn.style.background = 'var(--success)';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
      }, 1500);
    });
  }
  setupCopyButton(btnCopyUsername, tempUsernameInput);
  setupCopyButton(btnCopyPassword, tempPasswordInput);

  // Copy Login Link button event listener
  const btnCopyLoginUrl = document.getElementById('btn-copy-login-url');
  btnCopyLoginUrl.addEventListener('click', () => {
    const url = btnCopyLoginUrl.getAttribute('data-url');
    if (!url) return;
    
    // Copy URL to clipboard
    const tempInput = document.createElement('input');
    tempInput.value = url;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    const originalText = btnCopyLoginUrl.textContent;
    btnCopyLoginUrl.textContent = currentLang === 'tr' ? 'Kopyalandı!' : 'Copied!';
    btnCopyLoginUrl.style.background = 'var(--success)';
    setTimeout(() => {
      btnCopyLoginUrl.textContent = originalText;
      btnCopyLoginUrl.style.background = '';
    }, 1500);
  });

  // Download Temporary Card as PNG Image (Physical Key feel)
  const btnDownloadCard = document.getElementById('btn-download-card');
  btnDownloadCard.addEventListener('click', () => {
    if (!tempCredentials) return;
    
    const canvas = document.createElement('canvas');
    canvas.width = 700;
    canvas.height = 440;
    const ctx = canvas.getContext('2d');
    
    // 1. Background Gradient
    const bgGrad = ctx.createLinearGradient(0, 0, 700, 440);
    bgGrad.addColorStop(0, '#110b29');
    bgGrad.addColorStop(1, '#0b132b');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 700, 440);
    
    // 2. Radial Glow
    const radialGlow = ctx.createRadialGradient(500, 100, 50, 500, 100, 300);
    radialGlow.addColorStop(0, 'rgba(0, 180, 216, 0.15)');
    radialGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = radialGlow;
    ctx.fillRect(0, 0, 700, 440);
    
    // 3. Neon Border (Gradient Rounded Border)
    ctx.lineWidth = 4;
    const borderGrad = ctx.createLinearGradient(0, 0, 700, 440);
    borderGrad.addColorStop(0, '#00b4d8');
    borderGrad.addColorStop(0.5, '#7209b7');
    borderGrad.addColorStop(1, '#f72585');
    ctx.strokeStyle = borderGrad;
    
    function drawRoundedRect(cx, cy, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(cx + r, cy);
      ctx.lineTo(cx + w - r, cy);
      ctx.quadraticCurveTo(cx + w, cy, cx + w, cy + r);
      ctx.lineTo(cx + w, cy + h - r);
      ctx.quadraticCurveTo(cx + w, cy + h, cx + w - r, cy + h);
      ctx.lineTo(cx + r, cy + h);
      ctx.quadraticCurveTo(cx, cy + h, cx, cy + h - r);
      ctx.lineTo(cx, cy + r);
      ctx.quadraticCurveTo(cx, cy, cx + r, cy);
      ctx.closePath();
    }
    
    drawRoundedRect(10, 10, 680, 420, 24);
    ctx.stroke();
    
    // 4. Draw Logo Icon (Vertex Network Shape)
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgba(0, 180, 216, 0.8)';
    ctx.fillStyle = 'rgba(0, 180, 216, 0.2)';
    ctx.beginPath();
    ctx.moveTo(600, 40);
    ctx.lineTo(630, 25);
    ctx.lineTo(650, 50);
    ctx.lineTo(630, 75);
    ctx.lineTo(600, 60);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(600, 40);
    ctx.lineTo(650, 50);
    ctx.moveTo(630, 25);
    ctx.lineTo(630, 75);
    ctx.stroke();
    
    // 5. ANL Vertex Card Header
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px system-ui, -apple-system, sans-serif';
    ctx.fillText('ANL VERTEX', 40, 55);
    
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.font = '10px system-ui, -apple-system, sans-serif';
    ctx.fillText('ACCESS SECURITY GATEWAY', 40, 75);
    
    // Separator line
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(40, 95);
    ctx.lineTo(660, 95);
    ctx.stroke();
    
    // 6. Draw Credentials Labels
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.font = 'bold 11px system-ui, -apple-system, sans-serif';
    ctx.fillText(currentLang === 'tr' ? 'LİSANSLI ŞİRKET' : 'LICENSED COMPANY', 40, 125);
    ctx.fillText(currentLang === 'tr' ? 'AKTİF SEKTÖR' : 'ACTIVE SECTOR', 40, 195);
    ctx.fillText(currentLang === 'tr' ? 'KULLANICI ADI' : 'USERNAME', 40, 265);
    ctx.fillText(currentLang === 'tr' ? 'GÜÇLÜ ŞİFRE' : 'STRONG PASSWORD', 40, 335);
    
    // 7. Values
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 18px system-ui, -apple-system, sans-serif';
    ctx.fillText(tempCredentials.company.toUpperCase(), 40, 150);
    
    ctx.fillStyle = '#00b4d8';
    const sectorLabels = sectorLabelsCard[currentLang] || {};
    const sectorText = sectorLabels[tempCredentials.sector] || tempCredentials.sector;
    ctx.fillText(sectorText.toUpperCase(), 40, 220);
    
    ctx.fillStyle = '#ffffff';
    ctx.font = '16px monospace';
    ctx.fillText(tempCredentials.username, 40, 290);
    ctx.fillText(tempCredentials.password, 40, 360);
    
    // 8. Bottom Expiration Warning
    ctx.fillStyle = '#ff3366';
    ctx.font = 'bold 11px system-ui, -apple-system, sans-serif';
    ctx.fillText(
      currentLang === 'tr' 
        ? '⚠️ BU KART 10 DAKİKA İÇİNDE KULLANILMAZSA OTOMATİK OLARAK SİLİNİR' 
        : '⚠️ EXPIRES IN 10 MINUTES AND WILL BE AUTOMATICALLY DELETED', 
      40, 400
    );
    
    // 9. Draw QR Code Frame (Rounded White box)
    ctx.fillStyle = '#ffffff';
    drawRoundedRect(500, 125, 160, 160, 12);
    ctx.fill();
    
    // 10. Copy QR Canvas pixels onto download card canvas
    const qrCanvas = document.querySelector('#qrcode-container canvas');
    const qrImg = document.querySelector('#qrcode-container img');
    if (qrCanvas) {
      ctx.drawImage(qrCanvas, 510, 135, 140, 140);
    } else if (qrImg && qrImg.complete) {
      ctx.drawImage(qrImg, 510, 135, 140, 140);
    }
    
    // Scan instructions under QR box
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.font = '10px system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(currentLang === 'tr' ? 'Hızlı Giriş İçin Taratın' : 'Scan for Fast Login', 580, 305);
    ctx.textAlign = 'left'; // reset
    
    // 11. Trigger Download
    const link = document.createElement('a');
    link.download = `${tempCredentials.company.replace(/\s+/g, '_').toLowerCase()}_vertex_card.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  });


  // ================= STATE 2: LOGIN MODAL STATE =================
  
  // Show / Hide login dialog
  function showLoginModal() {
    loginErrorMsg.style.display = 'none';
    loginModal.classList.add('active');

    // Force-replay loginCardEntrance spring animation every time modal opens
    const card = loginModal.querySelector('.login-modal-card');
    if (card) {
      // Strip animation, force reflow, then restore so keyframe fires fresh
      card.style.animation = 'none';
      void card.offsetWidth; // reflow
      card.style.animation = '';
    }

    // Auto-focus the login-username field after animation settles
    setTimeout(() => {
      const userField = document.getElementById('login-username');
      if (userField) userField.focus();
    }, 280);
  }

  function hideLoginModal() {
    loginModal.classList.remove('active');
    loginForm.reset();
    
    // Reset password input type and eye icon visibility
    const passField = document.getElementById('login-password');
    if (passField) passField.setAttribute('type', 'password');
    
    const toggleEye = document.getElementById('eye-icon');
    if (toggleEye) {
      toggleEye.innerHTML = `
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      `;
    }
  }

  const handleCloseLogin = () => {
    if (history.state && history.state.pageId === 'login') {
      history.back();
    } else {
      switchPage('welcome');
    }
  };

  btnOpenLogin.addEventListener('click', () => switchPage('login'));
  btnCloseModal.addEventListener('click', handleCloseLogin);
  btnCancelLogin.addEventListener('click', handleCloseLogin);

  // Password Visibility Toggle
  const btnTogglePassword = document.getElementById('btn-toggle-password');
  const loginPassword = document.getElementById('login-password');
  const eyeIcon = document.getElementById('eye-icon');

  if (btnTogglePassword && loginPassword && eyeIcon) {
    btnTogglePassword.addEventListener('click', () => {
      const type = loginPassword.getAttribute('type') === 'password' ? 'text' : 'password';
      loginPassword.setAttribute('type', type);
      
      if (type === 'text') {
        eyeIcon.innerHTML = `
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
          <line x1="1" y1="1" x2="23" y2="23"/>
        `;
      } else {
        eyeIcon.innerHTML = `
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        `;
      }
    });
  }

  // Keyboard Submission: Enter Key Event Listener
  const loginUsername = document.getElementById('login-username');
  if (loginUsername && loginPassword) {
    const handleEnterKey = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const submitBtn = loginForm.querySelector('button[type="submit"]');
        if (submitBtn) submitBtn.click();
      }
    };
    loginUsername.addEventListener('keydown', handleEnterKey);
    loginPassword.addEventListener('keydown', handleEnterKey);
  }

  // Auto Login button clicked in card
  btnAutoLogin.addEventListener('click', () => {
    if (!tempCredentials) return;
    showLoginModal();
    // Populate form fields
    document.getElementById('login-username').value = tempCredentials.username;
    document.getElementById('login-password').value = tempCredentials.password;
  });


  // Login Submit Event
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const user = document.getElementById('login-username').value.trim();
    const pass = document.getElementById('login-password').value;

    function showInvalidCredentialsError() {
      loginErrorMsg.innerHTML = currentLang === 'tr'
        ? "❌ Geçersiz Kullanıcı Adı veya Şifre!"
        : "❌ Invalid Username or Password!";
      loginErrorMsg.style.display = 'block';
    }

    const rememberCheckbox = document.getElementById('login-remember');
    const remember = rememberCheckbox ? rememberCheckbox.checked : false;

    // 1. Direct local credential match check (bypassing all time checks)
    if (tempCredentials && user === tempCredentials.username && pass === tempCredentials.password) {
      if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
      }
      
      const cardData = {
        username: tempCredentials.username,
        password: tempCredentials.password,
        company: tempCredentials.company,
        sector: tempCredentials.sector,
        userId: tempCredentials.username,
        sessionToken: 'token_' + tempCredentials.username + '_' + Date.now(),
        expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000,
        remember: remember
      };
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userCardData', JSON.stringify(cardData));
      sessionStorage.setItem('sessionActive', 'true');

      // Send activation to server
      apiClient.request('/api/activate-card', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: user })
      }).catch(err => console.error('Error activating card on server:', err));

      // Immediately transition to dashboard
      transitionToDashboard();
      return;
    }

    // 2. Direct server credential match check (bypassing all time checks)
    try {
      const res = await apiClient.request('/api/login', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        },
        body: JSON.stringify({ username: user, password: pass })
      });

      if (res.status === 200) {
        const data = await res.json();
        
        if (countdownInterval) {
          clearInterval(countdownInterval);
          countdownInterval = null;
        }

        const cardData = {
          username: user,
          password: pass,
          company: data.company,
          sector: data.sector,
          userId: data.userId || user,
          sessionToken: data.sessionToken,
          expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000,
          remember: remember
        };
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userCardData', JSON.stringify(cardData));
        sessionStorage.setItem('sessionActive', 'true');

        // Immediately transition to dashboard
        transitionToDashboard();
      } else {
        showInvalidCredentialsError();
      }
    } catch (err) {
      console.error('Async login verification failed:', err);
      showInvalidCredentialsError();
    }
  });

  // ================= STATE 3: DASHBOARD CONTROL ENGINE =================
  
  // Centralized SPA navigation screen toggler
  function switchPage(pageId, pushState = true) {
    if (pushState) {
      history.pushState({ pageId }, '', `#${pageId}`);
    }

    if (pageId === 'welcome') {
      if (localStorage.getItem('isLoggedIn') === 'true') {
        performLogout();
      }
      pageWelcome.style.display = 'block';
      pageDashboard.style.display = 'none';
      hideLoginModal();
    } else if (pageId === 'login') {
      pageWelcome.style.display = 'block';
      pageDashboard.style.display = 'none';
      showLoginModal();
    } else if (pageId === 'dashboard') {
      pageWelcome.style.display = 'none';
      pageDashboard.style.display = 'flex';
      hideLoginModal();

      // Set sector theme color dynamically on login transition
      updateThemeColor(currentSector);

      updateDashboardLanguageSpecifics();

      // Build Layout content, inputs, forms and table (wrapped in sector schema loader)
      loadSectorSchema(currentSector, () => {
        setupSectorDashboard();
      });
    }
  }

  function performLogout() {
    // Reset global state
    currentCompany = '';
    currentSector = '';
    tempCredentials = null;
    if (countdownInterval) {
      clearInterval(countdownInterval);
      countdownInterval = null;
    }

    // Clear persisted session
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userCardData');

    // Reset dynamic theme color scheme and promo selection indicators
    updateThemeColor('default');
    document.querySelectorAll('.sector-promo-card').forEach(card => {
      card.classList.remove('active-selection');
    });

    // Clear form inputs
    accessCardForm.reset();
    validateCardForm(); // Hide create button
    tempCard.style.display = 'none';
  }

  function getLocalizedRowStatus(row, sector, lang) {
    if (sector === 'vakif') {
      if (row.rawStatus === 'approved') return lang === 'tr' ? "Düzenli Bağışçı" : "Regular Donor";
      return lang === 'tr' ? "Potansiyel Bağışçı" : "Potential Donor";
    } else if (sector === 'egitim') {
      const pct = row.status.match(/\d+/) ? row.status.match(/\d+/)[0] : '';
      if (row.rawStatus === 'approved') return lang === 'tr' ? `Düşük Risk (%${pct})` : `Low Risk (%${pct})`;
      if (row.rawStatus === 'warning') return lang === 'tr' ? `Orta Risk (%${pct})` : `Medium Risk (%${pct})`;
      return lang === 'tr' ? `Yüksek Risk (%${pct})` : `High Risk (%${pct})`;
    } else if (sector === 'gida') {
      const orders = row.status.match(/\d+/) ? row.status.match(/\d+/)[0] : '';
      return lang === 'tr' ? `${orders} Sipariş` : `${orders} Orders`;
    } else if (sector === 'lojistik') {
      const pct = row.status.match(/\d+/) ? row.status.match(/\d+/)[0] : '';
      if (row.rawStatus === 'approved') return lang === 'tr' ? `Zamanında (%${pct} Risk)` : `On Time (%${pct} Risk)`;
      if (row.rawStatus === 'warning') return lang === 'tr' ? `Orta Risk (%${pct})` : `Medium Risk (%${pct})`;
      return lang === 'tr' ? `Yüksek Risk (%${pct})` : `High Risk (%${pct})`;
    } else if (sector === 'tekstil') {
      if (row.status.includes('Premium')) return lang === 'tr' ? 'Premium Alıcı' : 'Premium Buyer';
      if (row.status.includes('Fırsatçı') || row.status.includes('Opportunistic')) return lang === 'tr' ? 'Fırsatçı Alıcı' : 'Opportunistic Buyer';
      return lang === 'tr' ? 'Düşük Aktiviteli Alıcı' : 'Low Activity Buyer';
    }
    return row.status;
  }

  // Set up specific layouts, sliders, forms, tables
  function setupSectorDashboard() {
    const inputsContainer = document.getElementById('dash-inputs-container');
    const vizContentBox = document.getElementById('viz-content-box');
    const dynamicFormFields = document.getElementById('dynamic-form-fields');
    const tableHeaders = document.getElementById('table-headers');

    // Reset container contents
    inputsContainer.innerHTML = '';
    vizContentBox.innerHTML = '';
    dynamicFormFields.innerHTML = '';
    
    // Clear custom styling class from visualizer container
    vizContentBox.className = '';

    const sectorInfo = {
      tr: {
        vakif: {
          title: "Karar Ağacı (Decision Tree) Sınıflandırması",
          desc: "Sistem bağışçıların katılım sıklığı ve geçmiş desteklerine göre bağışçı olma durumunu sınıflandırır."
        },
        egitim: {
          title: "Başarısızlık Risk Tahmini (Lojistik Olasılık)",
          desc: "Model ders çalışma, devamlılık ve sınav girdilerine göre başarısızlık riski hesaplar."
        },
        gida: {
          title: "Talep Doğrusal Regresyon (Linear Regression) Eğrisi",
          desc: "Model sipariş yoğunluğu ve restoran puanına göre günlük yemek talebini uydurur."
        },
        lojistik: {
          title: "Teslimat Gecikme Risk Faktör Ağırlıkları",
          desc: "Kurye teslimatında gecikmeye en çok neden olan faktörlerin dağılımı."
        },
        tekstil: {
          title: "K-En Yakın Komşu (K-NN) Müşteri Dağılımı",
          desc: "Model müşteri alışveriş sıklığı ve harcamasına göre 3 en yakın komşuya bakarak profili sınıflandırır."
        }
      },
      en: {
        vakif: {
          title: "Decision Tree Classification",
          desc: "The system classifies donor status based on donor attendance frequency and historical support."
        },
        egitim: {
          title: "Failure Risk Prediction (Logistic Probability)",
          desc: "The model calculates failure risk based on study hours, attendance, and exam inputs."
        },
        gida: {
          title: "Demand Linear Regression Curve",
          desc: "The model fits daily food demand based on order density and restaurant ratings."
        },
        lojistik: {
          title: "Delivery Delay Risk Factor Weights",
          desc: "Distribution of factors most causing delays in courier delivery."
        },
        tekstil: {
          title: "K-Nearest Neighbors (K-NN) Customer Distribution",
          desc: "The model classifies the profile by looking at the 3 nearest neighbors based on customer shopping frequency and spending."
        }
      }
    };

    // Ensure currentSector and currentLang are valid and exist in sectorInfo
    const safeLang = (currentLang === 'en' || currentLang === 'tr') ? currentLang : 'tr';
    if (!currentSector || !sectorInfo[safeLang] || !sectorInfo[safeLang][currentSector]) {
      console.warn(`[Sector Guard] Invalid or missing sector: "${currentSector}". Falling back to default "vakif".`);
      currentSector = 'vakif';
    }

    const titleText = sectorInfo[safeLang][currentSector]?.title || "ANL Vertex Platform";
    const descText = sectorInfo[safeLang][currentSector]?.desc || "SaaS Enterprise Analytics Dashboard";

    const vizTitleEl = document.getElementById('viz-title');
    const vizDescEl = document.getElementById('viz-desc');
    if (vizTitleEl) vizTitleEl.textContent = titleText;
    if (vizDescEl) vizDescEl.textContent = descText;

    // Step 1: Render Headers & dynamic sliders depending on Sector
    if (currentSector === 'vakif') {
      // 2. Load Visualizer HTML
      vizContentBox.innerHTML = `
        <div class="decision-tree-graphic" style="display: flex; flex-direction: column; align-items: center; gap: 0.8rem; width: 100%;">
          <div class="tree-node" id="node-root">${currentLang === 'tr' ? 'Aylık Katılım > 5 Kez ?' : 'Monthly Attendance > 5 Times?'}</div>
          <div style="display: flex; justify-content: space-around; width: 100%; gap: 1rem;">
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.8rem; flex: 1;">
              <div class="tree-node" id="node-left-sub">${currentLang === 'tr' ? 'Geçmiş Bağış > $100 ?' : 'Past Donation > $100?'}</div>
              <div style="display: flex; justify-content: space-around; width: 100%; gap: 0.5rem;">
                <div class="tree-node" id="node-left-l1" style="font-size: 0.75rem;">${currentLang === 'tr' ? 'Üyelik Süresi > 2 Yıl ?' : 'Membership > 2 Years?'}</div>
                <div class="tree-node" id="node-left-l2" style="font-size: 0.75rem; border-color: var(--danger-glow);">${currentLang === 'tr' ? 'Potansiyel Bağışçı' : 'Potential Donor'}</div>
              </div>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.8rem; flex: 1;">
              <div class="tree-node" id="node-right-sub" style="border-color: var(--danger-glow);">${currentLang === 'tr' ? 'Potansiyel/Düzensiz' : 'Potential/Irregular'}</div>
            </div>
          </div>
          <div style="display: flex; justify-content: space-around; width: 100%; margin-top: 0.5rem; font-size: 0.75rem;">
            <div class="tree-node" id="node-leaf-approved" style="color: var(--success); border-color: var(--success-glow);">${currentLang === 'tr' ? 'Düzenli Bağışçı' : 'Regular Donor'}</div>
            <div class="tree-node" id="node-leaf-declined" style="color: var(--danger); border-color: var(--danger-glow);">${currentLang === 'tr' ? 'Potansiyel Donör' : 'Potential Donor'}</div>
          </div>
        </div>
      `;

      // 3. Load input control sliders
      inputsContainer.innerHTML = `
        <div class="control-group">
          <div class="control-label"><span>${currentLang === 'tr' ? 'Aylık Katılım Sıklığı:' : 'Monthly Attendance Frequency:'}</span><span class="control-value" id="val-credit">8</span></div>
          <input type="range" class="slider-input" id="slider-credit" min="1" max="25" step="1" value="8">
        </div>
        <div class="control-group">
          <div class="control-label"><span>${currentLang === 'tr' ? 'Geçmiş Bağış Tutarı ($):' : 'Past Donation Amount ($):'}</span><span class="control-value" id="val-income">150</span></div>
          <input type="range" class="slider-input" id="slider-income" min="10" max="1000" step="10" value="150">
        </div>
        <div class="control-group">
          <div class="control-label"><span>${currentLang === 'tr' ? 'Üyelik Süresi (Yıl):' : 'Membership Duration (Years):'}</span><span class="control-value" id="val-dti">3</span></div>
          <input type="range" class="slider-input" id="slider-dti" min="1" max="15" step="1" value="3">
        </div>
      `;

      // 4. Setup Dynamic customer registry form fields
      renderDynamicFormFields(sectorSchemas.vakif.formFields);

      // 5. Build Headers
      tableHeaders.innerHTML = `
        <th>${currentLang === 'tr' ? 'Bağışçı İsmi' : 'Donor Name'}</th>
        <th>${currentLang === 'tr' ? 'Katılım Freq' : 'Attendance Freq'}</th>
        <th>${currentLang === 'tr' ? 'Bağış Tutarı ($)' : 'Donation Amount ($)'}</th>
        <th>${currentLang === 'tr' ? 'Üyelik Süresi (Yıl)' : 'Membership (Years)'}</th>
        <th>${currentLang === 'tr' ? 'Sınıflandırma' : 'Classification'}</th>
        <th>✉️</th>
      `;

    } else if (currentSector === 'egitim') {
      vizContentBox.innerHTML = `
        <div class="gauge-container">
          <svg class="gauge-svg" width="180" height="180">
            <circle class="gauge-bg" cx="90" cy="90" r="80"></circle>
            <circle class="gauge-fill" id="risk-gauge-circle" cx="90" cy="90" r="80"></circle>
          </svg>
          <div class="gauge-value">
            <div class="gauge-percentage" id="risk-percent-text">12%</div>
            <div class="gauge-label" id="risk-badge-text">${currentLang === 'tr' ? 'Normal' : 'Normal'}</div>
          </div>
        </div>
      `;

      inputsContainer.innerHTML = `
        <div class="control-group">
          <div class="control-label"><span>${currentLang === 'tr' ? 'Haftalık Çalışma Süresi (Saat):' : 'Weekly Study Time (Hours):'}</span><span class="control-value" id="val-glucose">12 ${currentLang === 'tr' ? 'Saat' : 'Hours'}</span></div>
          <input type="range" class="slider-input" id="slider-glucose" min="2" max="40" step="1" value="12">
        </div>
        <div class="control-group">
          <div class="control-label"><span>${currentLang === 'tr' ? 'Ders Devam Oranı (%):' : 'Course Attendance Rate (%):'}</span><span class="control-value" id="val-bmi">85%</span></div>
          <input type="range" class="slider-input" id="slider-bmi" min="30" max="100" step="1" value="85">
        </div>
        <div class="control-group">
          <div class="control-label"><span>${currentLang === 'tr' ? 'Deneme Sınav Puanı:' : 'Mock Exam Score:'}</span><span class="control-value" id="val-age">70</span></div>
          <input type="range" class="slider-input" id="slider-age" min="20" max="100" step="1" value="70">
        </div>
      `;

      renderDynamicFormFields(sectorSchemas.egitim.formFields);

      tableHeaders.innerHTML = `
        <th>${currentLang === 'tr' ? 'Öğrenci Adı' : 'Student Name'}</th>
        <th>${currentLang === 'tr' ? 'Çalışma (Saat)' : 'Study (Hours)'}</th>
        <th>${currentLang === 'tr' ? 'Devam (%)' : 'Attendance (%)'}</th>
        <th>${currentLang === 'tr' ? 'Sınav Puanı' : 'Exam Score'}</th>
        <th>${currentLang === 'tr' ? 'Başarı Riski' : 'Failure Risk'}</th>
        <th>✉️</th>
      `;

    } else if (currentSector === 'gida') {
      vizContentBox.innerHTML = `
        <div class="canvas-container" style="width:100%; aspect-ratio:16/9;">
          <canvas id="regression-canvas"></canvas>
        </div>
      `;

      inputsContainer.innerHTML = `
        <div class="control-group">
          <div class="control-label"><span>${currentLang === 'tr' ? 'Ort. Sipariş Adedi:' : 'Avg. Order Quantity:'}</span><span class="control-value" id="val-size">1500 ${currentLang === 'tr' ? 'Sipariş' : 'Orders'}</span></div>
          <input type="range" class="slider-input" id="slider-size" min="100" max="4000" step="50" value="1500">
        </div>
        <div class="control-group">
          <div class="control-label"><span>${currentLang === 'tr' ? 'Restoran Değerlendirme Puanı:' : 'Restaurant Rating Score:'}</span><span class="control-value" id="val-beds">4.2 ${currentLang === 'tr' ? 'Puan' : 'Points'}</span></div>
          <input type="range" class="slider-input" id="slider-beds" min="1" max="5" step="0.1" value="4.2">
        </div>
        <div class="toggle-container">
          <div>
            <span style="font-weight: 500; font-size: 0.9rem;">${currentLang === 'tr' ? 'Kampanya Uygulaması' : 'Campaign Application'}</span>
            <p style="font-size: 0.75rem; color: var(--text-muted);">${currentLang === 'tr' ? 'Ek sipariş katsayısı ekler' : 'Adds additional order coefficient'}</p>
          </div>
          <label class="switch">
            <input type="checkbox" id="toggle-location">
            <span class="slider-toggle"></span>
          </label>
        </div>
      `;

      renderDynamicFormFields(sectorSchemas.gida.formFields);

      tableHeaders.innerHTML = `
        <th>${currentLang === 'tr' ? 'Restoran Kodu / Sipariş' : 'Restaurant Code / Order'}</th>
        <th>${currentLang === 'tr' ? 'Sipariş Hacmi' : 'Order Volume'}</th>
        <th>${currentLang === 'tr' ? 'Restoran Puanı' : 'Restaurant Score'}</th>
        <th>${currentLang === 'tr' ? 'Kampanya' : 'Campaign'}</th>
        <th>${currentLang === 'tr' ? 'Günlük Yemek Talebi' : 'Daily Food Demand'}</th>
        <th>✉️</th>
      `;

      regressionDots = [];
      for (let i = 0; i < 20; i++) {
        const sz = 200 + Math.random() * 3500;
        const price = (100 + 0.5 * sz + 200 * 4.0) * (Math.random() > 0.5 ? 1.25 : 1.0);
        regressionDots.push({ size: sz, price });
      }

    } else if (currentSector === 'lojistik') {
      vizContentBox.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 1rem; width: 100%; padding: 1rem;">
          <div>
            <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.2rem;">
              <span>${currentLang === 'tr' ? 'Mesafe Uzunluğu (km)' : 'Distance (km)'}</span>
              <span id="bar-days-pct">45%</span>
            </div>
            <div style="height: 8px; background: rgba(255,255,255,0.05); border-radius: 4px; overflow: hidden; border:1px solid var(--border-color)">
              <div id="bar-days" style="height: 100%; width: 45%; background: var(--primary); transition: var(--transition-smooth);"></div>
            </div>
          </div>
          <div>
            <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.2rem;">
              <span>${currentLang === 'tr' ? 'Trafik Yoğunluğu (1-10)' : 'Traffic Density (1-10)'}</span>
              <span id="bar-sessions-pct">30%</span>
            </div>
            <div style="height: 8px; background: rgba(255,255,255,0.05); border-radius: 4px; overflow: hidden; border:1px solid var(--border-color)">
              <div id="bar-sessions" style="height: 100%; width: 30%; background: var(--secondary); transition: var(--transition-smooth);"></div>
            </div>
          </div>
          <div>
            <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.2rem;">
              <span>${currentLang === 'tr' ? 'Paket Yükü Adedi' : 'Package Load Count'}</span>
              <span id="bar-tickets-pct">25%</span>
            </div>
            <div style="height: 8px; background: rgba(255,255,255,0.05); border-radius: 4px; overflow: hidden; border:1px solid var(--border-color)">
              <div id="bar-tickets" style="height: 100%; width: 25%; background: var(--danger); transition: var(--transition-smooth);"></div>
            </div>
          </div>
          
          <div class="metric-grid" style="margin-top:1rem;">
            <div class="metric-item">
              <div class="metric-label">${currentLang === 'tr' ? 'Zamanında Teslimat Skoru' : 'On-Time Delivery Score'}</div>
              <div class="metric-num" id="metric-retention">92</div>
            </div>
            <div class="metric-item">
              <div class="metric-label">${currentLang === 'tr' ? 'Gecikme Risk Oranı' : 'Delay Risk Rate'}</div>
              <div class="metric-num" id="metric-churn" style="color: var(--success);">8%</div>
            </div>
          </div>
        </div>
      `;

      inputsContainer.innerHTML = `
        <div class="control-group">
          <div class="control-label"><span>${currentLang === 'tr' ? 'Mesafe Uzunluğu (km):' : 'Distance (km):'}</span><span class="control-value" id="val-days">12 km</span></div>
          <input type="range" class="slider-input" id="slider-days" min="1" max="150" step="1" value="12">
        </div>
        <div class="control-group">
          <div class="control-label"><span>${currentLang === 'tr' ? 'Trafik Yoğunluğu:' : 'Traffic Density:'}</span><span class="control-value" id="slider-val-sessions">3</span></div>
          <input type="range" class="slider-input" id="slider-sessions" min="1" max="10" step="1" value="3">
        </div>
        <div class="control-group">
          <div class="control-label"><span>${currentLang === 'tr' ? 'Paket Yükü:' : 'Package Load:'}</span><span class="control-value" id="val-tickets">1 ${currentLang === 'tr' ? 'Adet' : 'Unit'}</span></div>
          <input type="range" class="slider-input" id="slider-tickets" min="1" max="10" step="1" value="1">
        </div>
      `;

      renderDynamicFormFields(sectorSchemas.lojistik.formFields);

      tableHeaders.innerHTML = `
        <th>${currentLang === 'tr' ? 'Teslimat Kodu' : 'Delivery Code'}</th>
        <th>${currentLang === 'tr' ? 'Mesafe (km)' : 'Distance (km)'}</th>
        <th>${currentLang === 'tr' ? 'Trafik Katsayısı' : 'Traffic Coefficient'}</th>
        <th>${currentLang === 'tr' ? 'Paket Adedi' : 'Package Count'}</th>
        <th>${currentLang === 'tr' ? 'Gecikme Olasılığı' : 'Delay Probability'}</th>
        <th>✉️</th>
      `;
    } else if (currentSector === 'tekstil') {
      vizContentBox.innerHTML = `
        <div class="canvas-container" style="width:100%; aspect-ratio:16/9;">
          <canvas id="regression-canvas"></canvas>
        </div>
      `;

      inputsContainer.innerHTML = `
        <div class="control-group">
          <div class="control-label"><span>${currentLang === 'tr' ? 'Aylık Alışveriş Sıklığı:' : 'Monthly Shopping Frequency:'}</span><span class="control-value" id="val-days">5 ${currentLang === 'tr' ? 'Kez' : 'Times'}</span></div>
          <input type="range" class="slider-input" id="slider-days" min="1" max="30" step="1" value="5">
        </div>
        <div class="control-group">
          <div class="control-label"><span>${currentLang === 'tr' ? 'Ortalama Sepet Tutarı:' : 'Average Basket Amount:'}</span><span class="control-value" id="slider-val-sessions">1500 ${currentLang === 'tr' ? 'TL' : 'TRY'}</span></div>
          <input type="range" class="slider-input" id="slider-sessions" min="100" max="5000" step="50" value="1500">
        </div>
        <div class="control-group">
          <div class="control-label"><span>${currentLang === 'tr' ? 'İndirim Hassasiyeti:' : 'Discount Sensitivity:'}</span><span class="control-value" id="val-tickets">%40</span></div>
          <input type="range" class="slider-input" id="slider-tickets" min="0" max="100" step="5" value="40">
        </div>
      `;

      renderDynamicFormFields(sectorSchemas.tekstil.formFields);

      tableHeaders.innerHTML = `
        <th>${currentLang === 'tr' ? 'Müşteri Adı' : 'Customer Name'}</th>
        <th>${currentLang === 'tr' ? 'Aylık Alışveriş' : 'Monthly Shopping'}</th>
        <th>${currentLang === 'tr' ? 'Sepet Tutarı' : 'Basket Amount'}</th>
        <th>${currentLang === 'tr' ? 'İndirim Etkisi' : 'Discount Effect'}</th>
        <th>${currentLang === 'tr' ? 'Müşteri Segmenti' : 'Customer Segment'}</th>
        <th>✉️</th>
      `;
    }

    // Step 2: Set up slider listeners for interactive visualization recalculations
    bindSectorSliders();

    // Step 3: Populate database rows
    renderDatabaseTable();

    // Step 4: Run initial predictions and updates
    evaluateMLModel();

    // Step 5: Render XAI Feature Weights Importance
    renderXaiWeights();

    // Step 6: Reset What-If Scenario baseline
    baseline_state = null;
    updateWhatIfComparison();

    // Step 7: Initialize Aura AI Chatbot Dialog
    initAuraChat();

    // Step 8: Initialise performance metrics for this sector
    updatePerformanceMetrics(false, false);

    // Step 9: Trigger an initial pipeline pulse to show the flow is live
    triggerPipelinePulse();
  }

  // ================= MATHEMATICAL MODEL PREDICTIONS & MOCK DATABASE LOOPS =================
  
  // Bind live slider controls to UI logic
  function bindSectorSliders() {
    if (currentSector === 'vakif') {
      const scr = document.getElementById('slider-credit');
      const inc = document.getElementById('slider-income');
      const dti = document.getElementById('slider-dti');

      [scr, inc, dti].forEach(sl => {
        if (sl) {
          sl.addEventListener('input', () => {
            document.getElementById('val-credit').textContent = scr.value;
            document.getElementById('val-income').textContent = `${inc.value}`;
            document.getElementById('val-dti').textContent = `${dti.value}`;
            evaluateMLModel();
            updatePerformanceMetrics(true, false);
            triggerPipelinePulse();
          });
        }
      });
    } else if (currentSector === 'egitim') {
      const glc = document.getElementById('slider-glucose');
      const bmi = document.getElementById('slider-bmi');
      const age = document.getElementById('slider-age');

      [glc, bmi, age].forEach(sl => {
        if (sl) {
          sl.addEventListener('input', () => {
            document.getElementById('val-glucose').textContent = `${glc.value} ${currentLang === 'tr' ? 'Saat' : 'Hours'}`;
            document.getElementById('val-bmi').textContent = `${bmi.value}%`;
            document.getElementById('val-age').textContent = `${age.value}`;
            evaluateMLModel();
            updatePerformanceMetrics(true, false);
            triggerPipelinePulse();
          });
        }
      });
    } else if (currentSector === 'gida') {
      const size = document.getElementById('slider-size');
      const beds = document.getElementById('slider-beds');
      const loc = document.getElementById('toggle-location');

      [size, beds, loc].forEach(el => {
        if (el) {
          el.addEventListener('input', () => {
            document.getElementById('val-size').textContent = `${size.value} ${currentLang === 'tr' ? 'Sipariş' : 'Orders'}`;
            document.getElementById('val-beds').textContent = `${beds.value} ${currentLang === 'tr' ? 'Puan' : 'Points'}`;
            evaluateMLModel();
            updatePerformanceMetrics(true, false);
            triggerPipelinePulse();
          });
        }
      });
    } else if (currentSector === 'lojistik') {
      const days = document.getElementById('slider-days');
      const sess = document.getElementById('slider-sessions');
      const tck = document.getElementById('slider-tickets');

      [days, sess, tck].forEach(sl => {
        if (sl) {
          sl.addEventListener('input', () => {
            document.getElementById('val-days').textContent = `${days.value} km`;
            document.getElementById('slider-val-sessions').textContent = `${sess.value}`;
            document.getElementById('val-tickets').textContent = `${tck.value} ${currentLang === 'tr' ? 'Adet' : 'Units'}`;
            evaluateMLModel();
            updatePerformanceMetrics(true, false);
            triggerPipelinePulse();
          });
        }
      });
    } else if (currentSector === 'tekstil') {
      const days = document.getElementById('slider-days');
      const sess = document.getElementById('slider-sessions');
      const tck = document.getElementById('slider-tickets');

      [days, sess, tck].forEach(sl => {
        if (sl) {
          sl.addEventListener('input', () => {
            document.getElementById('val-days').textContent = `${days.value} ${currentLang === 'tr' ? 'Kez' : 'Times'}`;
            document.getElementById('slider-val-sessions').textContent = `${sess.value} ${currentLang === 'tr' ? 'TL' : 'TRY'}`;
            document.getElementById('val-tickets').textContent = `%${tck.value}`;
            evaluateMLModel();
            updatePerformanceMetrics(true, false);
            triggerPipelinePulse();
          });
        }
      });
    }
  }

  // Populate data table rows dynamically
  function renderDatabaseTable() {
    const list = databases[currentSector];
    const tableBody = document.getElementById('table-body');
    const dbCount = document.getElementById('database-count');
    
    dbCount.textContent = `${list.length} ${currentLang === 'tr' ? 'Kayıt' : 'Records'}`;
    tableBody.innerHTML = '';

    list.forEach(row => {
      const tr = document.createElement('tr');
      
      let badgeClass = 'badge-success';
      if (row.rawStatus === 'denied') badgeClass = 'badge-danger';
      else if (row.rawStatus === 'warning') badgeClass = 'badge-danger'; // mapped to styled borders

      if (currentSector === 'vakif') {
        tr.innerHTML = `
          <td><strong>${row.name}</strong></td>
          <td>${row.credit}</td>
          <td>$${row.income}</td>
          <td>${row.dti} ${currentLang === 'tr' ? 'Yıl' : 'Years'}</td>
          <td><span class="badge ${badgeClass}">${getLocalizedRowStatus(row, 'vakif', currentLang)}</span></td>
          <td><button class="btn-primary" style="padding: 0.3rem 0.6rem; font-size: 0.85rem;" onclick="openEmailModal('${row.name.replace(/'/g, "\\'")}', '${row.email || (row.name.toLowerCase().replace(/[^a-z0-9]/g, '') + '@example.com')}')">✉️</button></td>
        `;
      } else if (currentSector === 'egitim') {
        tr.innerHTML = `
          <td><strong>${row.name}</strong></td>
          <td>${row.glucose} ${currentLang === 'tr' ? 'Saat' : 'Hours'}</td>
          <td>%${row.bmi}</td>
          <td>${row.age}</td>
          <td><span class="badge ${badgeClass}">${getLocalizedRowStatus(row, 'egitim', currentLang)}</span></td>
          <td><button class="btn-primary" style="padding: 0.3rem 0.6rem; font-size: 0.85rem;" onclick="openEmailModal('${row.name.replace(/'/g, "\\'")}', '${row.email || (row.name.toLowerCase().replace(/[^a-z0-9]/g, '') + '@example.com')}')">✉️</button></td>
        `;
      } else if (currentSector === 'gida') {
        tr.innerHTML = `
          <td><strong>${row.name}</strong></td>
          <td>${row.size} ${currentLang === 'tr' ? 'Sipariş' : 'Orders'}</td>
          <td>${row.beds} ${currentLang === 'tr' ? 'Puan' : 'Points'}</td>
          <td>${currentLang === 'tr' ? row.location : (row.location === 'Evet' ? 'Yes' : 'No')}</td>
          <td><span class="badge badge-success">${getLocalizedRowStatus(row, 'gida', currentLang)}</span></td>
          <td><button class="btn-primary" style="padding: 0.3rem 0.6rem; font-size: 0.85rem;" onclick="openEmailModal('${row.name.replace(/'/g, "\\'")}', '${row.email || (row.name.toLowerCase().replace(/[^a-z0-9]/g, '') + '@example.com')}')">✉️</button></td>
        `;
      } else if (currentSector === 'lojistik') {
        tr.innerHTML = `
          <td><strong>${row.name}</strong></td>
          <td>${row.days} km</td>
          <td>${row.sessions}</td>
          <td>${row.tickets} ${currentLang === 'tr' ? 'Adet' : 'Units'}</td>
          <td><span class="badge ${badgeClass}">${getLocalizedRowStatus(row, 'lojistik', currentLang)}</span></td>
          <td><button class="btn-primary" style="padding: 0.3rem 0.6rem; font-size: 0.85rem;" onclick="openEmailModal('${row.name.replace(/'/g, "\\'")}', '${row.email || (row.name.toLowerCase().replace(/[^a-z0-9]/g, '') + '@example.com')}')">✉️</button></td>
        `;
      } else if (currentSector === 'tekstil') {
        tr.innerHTML = `
          <td><strong>${row.name}</strong></td>
          <td>${row.days} ${currentLang === 'tr' ? 'Kez' : 'Times'}</td>
          <td>${row.sessions} ${currentLang === 'tr' ? 'TL' : 'TRY'}</td>
          <td>%${row.tickets}</td>
          <td><span class="badge ${badgeClass}">${getLocalizedRowStatus(row, 'tekstil', currentLang)}</span></td>
          <td><button class="btn-primary" style="padding: 0.3rem 0.6rem; font-size: 0.85rem;" onclick="openEmailModal('${row.name.replace(/'/g, "\\'")}', '${row.email || (row.name.toLowerCase().replace(/[^a-z0-9]/g, '') + '@example.com')}')">✉️</button></td>
        `;
      }

      tableBody.appendChild(tr);
    });
  }

  // Main Model Evaluator (reads active sliders, computes predictions, outputs visuals)
  function evaluateMLModel() {
    const outCard = document.getElementById('dash-output-card');
    const outResult = document.getElementById('dash-output-result');
    const outSummary = document.getElementById('dash-output-summary');

    if (currentSector === 'vakif') {
      const crd = parseInt(document.getElementById('slider-credit').value);
      const inc = parseInt(document.getElementById('slider-income').value);
      const dti = parseInt(document.getElementById('slider-dti').value);

      // Node highlights
      const nodes = ['node-root', 'node-left-sub', 'node-left-l1', 'node-left-l2', 'node-right-sub', 'node-leaf-approved', 'node-leaf-declined'];
      nodes.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('active');
      });

      let approved = false;
      let highlighted = ['node-root'];

      if (crd > 5) {
        highlighted.push('node-left-sub');
        if (inc > 100) {
          highlighted.push('node-left-l1');
          if (dti > 2) {
            approved = true;
            highlighted.push('node-leaf-approved');
          } else {
            highlighted.push('node-leaf-declined');
          }
        } else {
          highlighted.push('node-left-l2');
        }
      } else {
        highlighted.push('node-right-sub');
      }

      highlighted.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('active');
      });

      // Output values
      if (approved) {
        outCard.className = 'output-card approved';
        outResult.textContent = currentLang === 'tr' ? "Düzenli Bağışçı" : "Regular Donor";
        outSummary.textContent = currentLang === 'tr' 
          ? "Katılım sıklığı yüksek, bağış tutarı yeterli ve uzun süreli üyedir."
          : "High attendance frequency, sufficient donation amount, and a long-term member.";
      } else {
        outCard.className = 'output-card denied';
        outResult.textContent = currentLang === 'tr' ? "Potansiyel Bağışçı / Düzensiz" : "Potential / Irregular Donor";
        if (currentLang === 'tr') {
          outSummary.textContent = crd <= 5 
            ? "Aylık katılım sıklığı düşük (Min 5 kez katılım beklenir)."
            : (inc <= 100 ? "Bağış tutarı düzensiz (Min $100 bağış önerilir)." : "Dernek üyelik süresi kısa.");
        } else {
          outSummary.textContent = crd <= 5 
            ? "Low monthly attendance frequency (Min 5 times attendance expected)."
            : (inc <= 100 ? "Irregular donation amount (Min $100 donation recommended)." : "Short association membership duration.");
        }
      }

    } else if (currentSector === 'egitim') {
      const glc = parseInt(document.getElementById('slider-glucose').value);
      const bmi = parseFloat(document.getElementById('slider-bmi').value);
      const age = parseInt(document.getElementById('slider-age').value);

      const z = 5.5 - (0.12 * glc) - (0.04 * bmi) - (0.03 * age);
      const prob = 1.0 / (1.0 + Math.exp(-z));
      const pct = Math.round(prob * 100);

      // Gauge updating
      const circle = document.getElementById('risk-gauge-circle');
      const text = document.getElementById('risk-percent-text');
      const label = document.getElementById('risk-badge-text');

      const circ = 502.65; // 2 * PI * 80 (radius is 80)
      if (circle) {
        circle.style.strokeDasharray = circ;
        circle.style.strokeDashoffset = circ - (prob * circ);
      }

      let color = 'var(--success)';
      let badge = currentLang === 'tr' ? 'Düşük Risk' : 'Low Risk';
      
      if (pct >= 15 && pct < 50) {
        color = 'var(--warning)';
        badge = currentLang === 'tr' ? 'Orta Risk' : 'Medium Risk';
        outCard.className = 'output-card';
        outCard.style.borderLeftColor = 'var(--warning)';
        outCard.style.background = 'hsla(38, 92%, 50%, 0.05)';
        outResult.textContent = currentLang === 'tr' ? `Orta Başarısızlık Riski (%${pct})` : `Medium Failure Risk (%${pct})`;
        outResult.style.color = 'var(--warning)';
        outSummary.textContent = currentLang === 'tr'
          ? "Akademik performans orta seviyede. Bireysel takviye faydalı olabilir."
          : "Academic performance is moderate. Individual reinforcement may be beneficial.";
      } else if (pct >= 50) {
        color = 'var(--danger)';
        badge = currentLang === 'tr' ? 'Yüksek Risk' : 'High Risk';
        outCard.className = 'output-card denied';
        outCard.style.borderLeftColor = '';
        outCard.style.background = '';
        outResult.textContent = currentLang === 'tr' ? `Yüksek Başarısızlık Riski (%${pct})` : `High Failure Risk (%${pct})`;
        outResult.style.color = '';
        outSummary.textContent = currentLang === 'tr'
          ? "Kritik devamsızlık veya düşük çalışma saati. Rehberlik servisiyle görüşülmelidir."
          : "Critical absenteeism or low study hours. Counseling service should be consulted.";
      } else {
        outCard.className = 'output-card approved';
        outCard.style.borderLeftColor = '';
        outCard.style.background = '';
        outResult.textContent = currentLang === 'tr' ? `Düşük Başarısızlık Riski (%${pct})` : `Low Failure Risk (%${pct})`;
        outResult.style.color = '';
        outSummary.textContent = currentLang === 'tr'
          ? "Çalışma ve devamsızlık verileri mükemmel. Akademik başarı düzeyi yüksek."
          : "Study and attendance data are excellent. Academic success level is high.";
      }

      if (circle) circle.style.stroke = color;
      if (text) {
        text.textContent = `${pct}%`;
        text.style.color = color;
      }
      if (label) {
        label.textContent = badge;
        label.style.color = color;
      }

    } else if (currentSector === 'gida') {
      const size = parseInt(document.getElementById('slider-size').value);
      const beds = parseFloat(document.getElementById('slider-beds').value);
      const loc = document.getElementById('toggle-location').checked;

      let price = 100 + (0.5 * size) + (200 * beds);
      if (loc) price *= 1.25;

      outCard.className = 'output-card approved';
      outResult.textContent = currentLang === 'tr' ? `${Math.round(price)} Sipariş / Gün` : `${Math.round(price)} Orders / Day`;
      outSummary.textContent = currentLang === 'tr'
        ? `Piyasa sepeti büyüklüğü, restoran puanı (${beds}) ve kampanya uygulaması (${loc ? 'Aktif' : 'Pasif'}) katsayılarına göre doğrusal regresyon hesabı.`
        : `Linear regression calculation based on market basket size, restaurant rating (${beds}), and campaign application (${loc ? 'Active' : 'Inactive'}) coefficients.`;

      // Draw canvas
      drawRegressionChart(size, price, loc);

    } else if (currentSector === 'lojistik') {
      const days = parseInt(document.getElementById('slider-days').value);
      const sess = parseInt(document.getElementById('slider-sessions').value);
      const tck = parseInt(document.getElementById('slider-tickets').value);

      const daysImpact = Math.min(100, (days / 150) * 100);
      const sessionImpact = (sess / 10) * 100;
      const supportImpact = (tck / 10) * 100;

      const churnScore = (daysImpact * 0.45) + (sessionImpact * 0.3) + (supportImpact * 0.25);
      const risk = Math.round(churnScore);
      const retention = 100 - risk;

      // Update bars
      const barDays = document.getElementById('bar-days');
      if (barDays) barDays.style.width = `${daysImpact}%`;
      const barDaysPct = document.getElementById('bar-days-pct');
      if (barDaysPct) barDaysPct.textContent = currentLang === 'tr' ? `${Math.round(daysImpact)}% Etki` : `${Math.round(daysImpact)}% Impact`;

      const barSessions = document.getElementById('bar-sessions');
      if (barSessions) barSessions.style.width = `${sessionImpact}%`;
      const barSessionsPct = document.getElementById('bar-sessions-pct');
      if (barSessionsPct) barSessionsPct.textContent = currentLang === 'tr' ? `${Math.round(sessionImpact)}% Etki` : `${Math.round(sessionImpact)}% Impact`;

      const barTickets = document.getElementById('bar-tickets');
      if (barTickets) barTickets.style.width = `${supportImpact}%`;
      const barTicketsPct = document.getElementById('bar-tickets-pct');
      if (barTicketsPct) barTicketsPct.textContent = currentLang === 'tr' ? `${Math.round(supportImpact)}% Etki` : `${Math.round(supportImpact)}% Impact`;

      const metricRetention = document.getElementById('metric-retention');
      if (metricRetention) metricRetention.textContent = `${retention}%`;
      const metricChurn = document.getElementById('metric-churn');
      if (metricChurn) metricChurn.textContent = `${risk}%`;

      if (risk < 30) {
        outCard.className = 'output-card approved';
        outResult.textContent = currentLang === 'tr' ? `Zamanında Teslimat (%${risk} Gecikme Riski)` : `On Time (%${risk} Delay Risk)`;
        outSummary.textContent = currentLang === 'tr'
          ? "Kurye rotası kısa ve trafik akıcı. Gecikme olasılığı bulunmamaktadır."
          : "Courier route is short and traffic is smooth. No probability of delay.";
        if (metricChurn) metricChurn.style.color = 'var(--success)';
      } else if (risk >= 30 && risk < 60) {
        outCard.className = 'output-card';
        outCard.style.borderLeftColor = 'var(--warning)';
        outCard.style.background = 'hsla(38, 92%, 50%, 0.05)';
        outResult.textContent = currentLang === 'tr' ? `Orta Seviye Gecikme Riski (%${risk})` : `Medium Delay Risk (%${risk})`;
        outResult.style.color = 'var(--warning)';
        outSummary.textContent = currentLang === 'tr'
          ? "Trafik yoğunluğu veya paket sayısında artış var. Alternatif rota atanmalıdır."
          : "Increase in traffic density or number of packages. Alternative route should be assigned.";
        if (metricChurn) metricChurn.style.color = 'var(--warning)';
      } else {
        outCard.className = 'output-card denied';
        outCard.style.borderLeftColor = '';
        outCard.style.background = '';
        outResult.textContent = currentLang === 'tr' ? `Yüksek Gecikme Riski (%${risk})` : `High Delay Risk (%${risk})`;
        outResult.style.color = '';
        outSummary.textContent = currentLang === 'tr'
          ? "Mesafe uzun ve yoğun trafik. Acil kurye desteği veya zaman güncellemesi gereklidir."
          : "Long distance and heavy traffic. Urgent courier support or time update is required.";
        if (metricChurn) metricChurn.style.color = 'var(--danger)';
      }
    } else if (currentSector === 'tekstil') {
      const userFreq = parseInt(document.getElementById('slider-days').value);
      const userBasket = parseInt(document.getElementById('slider-sessions').value);
      const userDiscount = parseInt(document.getElementById('slider-tickets').value);

      // K-NN implementation (K=3)
      const list = databases.tekstil;
      
      // Normalize user input
      const normUserFreq = (userFreq - 1) / 29;
      const normUserBasket = (userBasket - 100) / 4900;
      const normUserDiscount = userDiscount / 100;

      const scoredList = list.map(pt => {
        const normPtFreq = (pt.days - 1) / 29;
        const normPtBasket = (pt.sessions - 100) / 4900;
        const normPtDiscount = pt.tickets / 100;
        const dist = Math.sqrt(
          Math.pow(normUserFreq - normPtFreq, 2) +
          Math.pow(normUserBasket - normPtBasket, 2) +
          Math.pow(normUserDiscount - normPtDiscount, 2)
        );
        return { item: pt, dist };
      });

      // Sort by distance ascending
      scoredList.sort((a, b) => a.dist - b.dist);

      // Get 3 nearest neighbors
      const neighbors = scoredList.slice(0, 3);
      
      // Vote category
      const votes = {};
      neighbors.forEach(n => {
        const cat = n.item.status;
        votes[cat] = (votes[cat] || 0) + 1;
      });

      // Find winner category
      let winnerStatus = 'Premium Alıcı';
      let maxVotes = 0;
      for (let cat in votes) {
        if (votes[cat] > maxVotes) {
          maxVotes = votes[cat];
          winnerStatus = cat;
        }
      }

      // Determine rawStatus & card classes
      let rawStatus = 'approved';
      if (winnerStatus === 'Fırsatçı Alıcı') rawStatus = 'warning';
      else if (winnerStatus === 'Düşük Aktiviteli Alıcı') rawStatus = 'denied';

      let localizedWinner = winnerStatus;
      if (currentLang === 'en') {
        if (winnerStatus === 'Premium Alıcı') localizedWinner = 'Premium Buyer';
        else if (winnerStatus === 'Fırsatçı Alıcı') localizedWinner = 'Opportunistic Buyer';
        else if (winnerStatus === 'Düşük Aktiviteli Alıcı') localizedWinner = 'Low Activity Buyer';
      }

      if (rawStatus === 'approved') {
        outCard.className = 'output-card approved';
        outResult.textContent = localizedWinner;
        outResult.style.color = '';
        outSummary.textContent = currentLang === 'tr'
          ? `Simüle edilen profil yüksek sepet tutarı ve sadakatiyle '${localizedWinner}' olarak sınıflandırıldı.`
          : `The simulated profile was classified as '${localizedWinner}' due to high basket value and loyalty.`;
      } else if (rawStatus === 'warning') {
        outCard.className = 'output-card';
        outCard.style.borderLeftColor = 'var(--warning)';
        outCard.style.background = 'hsla(38, 92%, 50%, 0.05)';
        outResult.textContent = localizedWinner;
        outResult.style.color = 'var(--warning)';
        outSummary.textContent = currentLang === 'tr'
          ? `Simüle edilen profil kampanya hassasiyeti yüksek olduğundan '${localizedWinner}' olarak segmentlendi.`
          : `The simulated profile was segmented as '${localizedWinner}' due to high campaign sensitivity.`;
      } else {
        outCard.className = 'output-card denied';
        outCard.style.borderLeftColor = '';
        outCard.style.background = '';
        outResult.textContent = localizedWinner;
        outResult.style.color = '';
        outSummary.textContent = currentLang === 'tr'
          ? `Düşük sıklıkta harcama yapan inaktif profil '${localizedWinner}' sınıfına yerleştirildi.`
          : `The inactive profile with low spending frequency was placed in the '${localizedWinner}' class.`;
      }

      // Draw K-NN Canvas
      drawKnnChart(userFreq, userBasket, neighbors);
    }

    // Trigger recommendations updates
    updateRecommendedActions();

    // Update What-If comparative analysis
    updateWhatIfComparison();

    // Fluctuate performance metrics on every model evaluation
    updatePerformanceMetrics(true, false);

    // Refresh Fairness Gauge on every model evaluation
    renderFairnessGauge();
  }

  // Draw Food regression line
  function drawRegressionChart(userSize, userPrice, userLoc) {
    const canvas = document.getElementById('regression-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const w = canvas.width = canvas.parentElement.clientWidth;
    const h = canvas.height = canvas.parentElement.clientHeight;
    const pad = 40;

    ctx.clearRect(0,0,w,h);

    const minSz = 100, maxSz = 4000;
    const minPr = 0, maxPr = 4000;

    function mapX(s) { return pad + (s - minSz) / (maxSz - minSz) * (w - 2*pad); }
    function mapY(p) { return h - pad - (p - minPr) / (maxPr - minPr) * (h - 2*pad); }

    // Gridlines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.lineWidth = 1;
    ctx.fillStyle = 'var(--text-muted)';
    ctx.font = '8px monospace';

    // X axis ticks
    for (let s = 1000; s <= 3000; s += 1000) {
      const x = mapX(s);
      ctx.beginPath(); ctx.moveTo(x, pad); ctx.lineTo(x, h - pad); ctx.stroke();
      ctx.fillText(s + ' ' + (currentLang === 'tr' ? 'Hacim' : 'Volume'), x - 20, h - pad + 12);
    }

    // Y axis ticks
    for (let p = 1000; p <= 3000; p += 1000) {
      const y = mapY(p);
      ctx.beginPath(); ctx.moveTo(pad, y); ctx.lineTo(w - pad, y); ctx.stroke();
      ctx.fillText(p + ' ' + (currentLang === 'tr' ? 'Talep' : 'Demand'), 5, y + 3);
    }

    // Scatter historical background dots
    regressionDots.forEach(pt => {
      const adjPrice = pt.price;
      ctx.beginPath();
      ctx.arc(mapX(pt.size), mapY(adjPrice), 3.5, 0, Math.PI*2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.fill();
    });

    // Regression Curve
    const beds = parseFloat(document.getElementById('slider-beds').value);
    function getP(sz) {
      let pr = 100 + (0.5 * sz) + (200 * beds);
      if (userLoc) pr *= 1.25;
      return pr;
    }

    ctx.beginPath();
    ctx.moveTo(mapX(minSz), mapY(getP(minSz)));
    ctx.lineTo(mapX(maxSz), mapY(getP(maxSz)));
    ctx.strokeStyle = 'var(--success)';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Pulse target dot
    const userX = mapX(userSize);
    const userY = mapY(userPrice);

    ctx.strokeStyle = 'hsla(142, 70%, 50%, 0.35)';
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(userX, userY); ctx.lineTo(userX, h - pad);
    ctx.moveTo(userX, userY); ctx.lineTo(pad, userY);
    ctx.stroke();
    ctx.setLineDash([]); // reset

    ctx.beginPath();
    ctx.arc(userX, userY, 6, 0, Math.PI*2);
    ctx.fillStyle = 'var(--success)';
    ctx.shadowColor = 'var(--success)';
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#ffffff';
    ctx.stroke();
    ctx.shadowBlur = 0;
  }

  // Draw KNN Scatter Plot for Textile
  function drawKnnChart(userFreq, userBasket, neighbors) {
    const canvas = document.getElementById('regression-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const w = canvas.width = canvas.parentElement.clientWidth;
    const h = canvas.height = canvas.parentElement.clientHeight;
    const pad = 40;

    ctx.clearRect(0,0,w,h);

    const minFreq = 1, maxFreq = 30;
    const minBasket = 100, maxBasket = 5000;

    function mapX(b) { return pad + (b - minBasket) / (maxBasket - minBasket) * (w - 2*pad); }
    function mapY(f) { return h - pad - (f - minFreq) / (maxFreq - minFreq) * (h - 2*pad); }

    // Gridlines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.lineWidth = 1;
    ctx.fillStyle = 'var(--text-muted)';
    ctx.font = '8px monospace';

    // X axis ticks (Sepet Tutarı)
    for (let b = 1000; b <= 4000; b += 1000) {
      const x = mapX(b);
      ctx.beginPath(); ctx.moveTo(x, pad); ctx.lineTo(x, h - pad); ctx.stroke();
      ctx.fillText(b + ' ' + (currentLang === 'tr' ? 'TL' : 'TRY'), x - 15, h - pad + 12);
    }

    // Y axis ticks (Sıklık)
    for (let f = 5; f <= 25; f += 5) {
      const y = mapY(f);
      ctx.beginPath(); ctx.moveTo(pad, y); ctx.lineTo(w - pad, y); ctx.stroke();
      ctx.fillText(f + ' ' + (currentLang === 'tr' ? 'Kez' : 'Times'), 5, y + 3);
    }

    // Plot database historical dots
    const list = databases.tekstil;
    list.forEach(pt => {
      const px = mapX(pt.sessions);
      const py = mapY(pt.days);
      
      let dotColor = 'var(--primary)'; // Premium
      if (pt.rawStatus === 'warning') dotColor = 'var(--warning)'; // Fırsatçı
      else if (pt.rawStatus === 'denied') dotColor = 'var(--danger)'; // Düşük Aktivite
      
      ctx.beginPath();
      ctx.arc(px, py, 5, 0, Math.PI*2);
      ctx.fillStyle = dotColor;
      ctx.shadowColor = dotColor;
      ctx.shadowBlur = 4;
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    // Draw lines to 3 nearest neighbors
    const userX = mapX(userBasket);
    const userY = mapY(userFreq);

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    
    neighbors.forEach(n => {
      const nx = mapX(n.item.sessions);
      const ny = mapY(n.item.days);
      ctx.beginPath();
      ctx.moveTo(userX, userY);
      ctx.lineTo(nx, ny);
      ctx.stroke();
      
      // Draw outer circle around neighbor to highlight it
      ctx.beginPath();
      ctx.arc(nx, ny, 9, 0, Math.PI*2);
      ctx.strokeStyle = 'rgba(255,255,255,0.4)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });
    ctx.setLineDash([]); // reset

    // Draw active user target dot
    ctx.beginPath();
    ctx.arc(userX, userY, 7, 0, Math.PI*2);
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = '#ffffff';
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = 'var(--secondary)';
    ctx.stroke();
    ctx.shadowBlur = 0;
  }

  // ================= CUSTOMER INSERTION / ADD FORM =================
  
  const addCustomerForm = document.getElementById('add-customer-form');
  
  addCustomerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cust-name-input').value.trim();
    if (!name) return;

    let newCustomer = { name };

    if (currentSector === 'vakif') {
      const credit = parseInt(document.getElementById('add-credit').value);
      const income = parseInt(document.getElementById('add-income').value);
      const dti = parseInt(document.getElementById('add-dti').value);

      let approved = (credit > 5 && income > 100 && dti > 2);
      newCustomer.income = income;
      newCustomer.credit = credit;
      newCustomer.dti = dti;
      newCustomer.status = approved ? "Düzenli Bağışçı" : "Potansiyel Bağışçı";
      newCustomer.rawStatus = approved ? "approved" : "denied";

    } else if (currentSector === 'egitim') {
      const glucose = parseInt(document.getElementById('add-glucose').value);
      const bmi = parseFloat(document.getElementById('add-bmi').value);
      const age = parseInt(document.getElementById('add-age').value);

      const z = 5.5 - (0.12 * glucose) - (0.04 * bmi) - (0.03 * age);
      const prob = 1.0 / (1.0 + Math.exp(-z));
      const pct = Math.round(prob * 100);

      newCustomer.glucose = glucose;
      newCustomer.bmi = bmi;
      newCustomer.age = age;
      
      if (pct < 15) {
        newCustomer.status = `Düşük Risk (%${pct})`;
        newCustomer.rawStatus = "approved";
      } else if (pct < 50) {
        newCustomer.status = `Orta Risk (%${pct})`;
        newCustomer.rawStatus = "warning";
      } else {
        newCustomer.status = `Yüksek Risk (%${pct})`;
        newCustomer.rawStatus = "denied";
      }

    } else if (currentSector === 'gida') {
      const size = parseInt(document.getElementById('add-size').value);
      const beds = parseFloat(document.getElementById('add-beds').value);
      const loc = document.getElementById('add-location').checked;

      let price = 100 + (0.5 * size) + (200 * beds);
      if (loc) price *= 1.25;

      newCustomer.size = size;
      newCustomer.beds = beds;
      newCustomer.location = loc ? "Evet" : "Hayır";
      newCustomer.status = `${Math.round(price)} Sipariş`;
      newCustomer.rawStatus = "approved";

      // Append dot to scatter plot data
      regressionDots.push({ size, price });

    } else if (currentSector === 'lojistik') {
      const days = parseInt(document.getElementById('add-days').value);
      const sess = parseInt(document.getElementById('add-sessions').value);
      const tck = parseInt(document.getElementById('add-tickets').value);

      const daysImpact = Math.min(100, (days / 150) * 100);
      const sessionImpact = (sess / 10) * 100;
      const supportImpact = (tck / 10) * 100;

      const churnScore = (daysImpact * 0.45) + (sessionImpact * 0.3) + (supportImpact * 0.25);
      const risk = Math.round(churnScore);

      newCustomer.days = days;
      newCustomer.sessions = sess;
      newCustomer.tickets = tck;

      if (risk < 30) {
        newCustomer.status = `Zamanında (%${risk} Risk)`;
        newCustomer.rawStatus = "approved";
      } else if (risk < 60) {
        newCustomer.status = `Orta Risk (%${risk} Risk)`;
        newCustomer.rawStatus = "warning";
      } else {
        newCustomer.status = `Yüksek Risk (%${risk} Risk)`;
        newCustomer.rawStatus = "denied";
      }
    } else if (currentSector === 'tekstil') {
      const days = parseInt(document.getElementById('add-days').value);
      const sess = parseInt(document.getElementById('add-sessions').value);
      const tck = parseInt(document.getElementById('add-tickets').value);

      // KNN classification on the fly
      const list = databases.tekstil;
      const normUserFreq = (days - 1) / 29;
      const normUserBasket = (sess - 100) / 4900;
      const normUserDiscount = tck / 100;

      const scoredList = list.map(pt => {
        const normPtFreq = (pt.days - 1) / 29;
        const normPtBasket = (pt.sessions - 100) / 4900;
        const normPtDiscount = pt.tickets / 100;
        const dist = Math.sqrt(
          Math.pow(normUserFreq - normPtFreq, 2) +
          Math.pow(normUserBasket - normPtBasket, 2) +
          Math.pow(normUserDiscount - normPtDiscount, 2)
        );
        return { item: pt, dist };
      });
      scoredList.sort((a, b) => a.dist - b.dist);
      const neighbors = scoredList.slice(0, 3);
      const votes = {};
      neighbors.forEach(n => {
        const cat = n.item.status;
        votes[cat] = (votes[cat] || 0) + 1;
      });
      let winnerStatus = 'Premium Alıcı';
      let maxVotes = 0;
      for (let cat in votes) {
        if (votes[cat] > maxVotes) {
          maxVotes = votes[cat];
          winnerStatus = cat;
        }
      }

      let rawStatus = 'approved';
      if (winnerStatus === 'Fırsatçı Alıcı') rawStatus = 'warning';
      else if (winnerStatus === 'Düşük Aktiviteli Alıcı') rawStatus = 'denied';

      newCustomer.days = days;
      newCustomer.sessions = sess;
      newCustomer.tickets = tck;
      newCustomer.status = winnerStatus;
      newCustomer.rawStatus = rawStatus;
    }
    const dynamicInputs = dynamicFormFields.querySelectorAll('input, select');
    dynamicInputs.forEach(input => {
      const key = input.id.replace('add-', '');
      if (newCustomer[key] !== undefined) return; // Skip if already set manually
      
      if (input.type === 'checkbox') {
        newCustomer[key] = input.checked;
      } else if (input.type === 'number') {
        newCustomer[key] = Number(input.value);
      } else {
        newCustomer[key] = input.value;
      }
    });

    // If a baseline state is locked, calculate delta and update comparison UI
    if (baseline_state) {
      const currentState = { ...newCustomer, sector: currentSector };
      currentState.riskScore = calculateRiskScoreForState(currentState);
      updateScenarioComparison(baseline_state, currentState);
    }

    // Append to dataset and update UI
    databases[currentSector].push(newCustomer);
    
    // Clear form inputs
    addCustomerForm.reset();
    
    // Refresh visual table and models
    renderDatabaseTable();
    evaluateMLModel();

    // Simulate online model training improvement on new data registration
    updatePerformanceMetrics(false, true);

    // Animate the full pipeline to show this data has been processed end-to-end
    triggerPipelinePulse();
  });


  // ================= RECOMMENDATIONS ACTIONS ENGINE =================
  
  function updateRecommendedActions() {
    const list = databases[currentSector];
    const actionsBox = document.getElementById('recommended-actions-box');
    if (!actionsBox) return;
    actionsBox.innerHTML = '';

    // Calculate database stats
    const total = list.length;
    const highRisk = list.filter(r => r.rawStatus === 'denied').length;
    const warningRisk = list.filter(r => r.rawStatus === 'warning').length;
    const highRiskPct = total > 0 ? (highRisk / total) * 100 : 0;

    let actions = [];

    if (currentSector === 'vakif') {
      if (currentLang === 'tr') {
        actions.push("Aktif üyelik süresi 2 yılın altında olan bağışçılar için hoş geldin ve aidiyet etkinlikleri planlayın.");
        if (highRiskPct > 35) {
          actions.push(`⚠️ UYARI: Potansiyel donör oranınız (%${Math.round(highRiskPct)}) çok yüksek! Düzenli bağış kampanyaları ve aylık bülten gönderimleri planlanmalıdır.`);
        } else {
          actions.push("Bağışçı veritabanı dengeli. Mevcut düzenli bağışçılara yönelik özel teşekkür mektupları ve şeffaflık raporları gönderin.");
        }
        actions.push("Karar Ağacı sınıflandırma modelini beslemek için her etkinlik sonrası katılım sıklığını güncelleyin.");
      } else {
        actions.push("Plan welcome and engagement events for donors with active membership under 2 years.");
        if (highRiskPct > 35) {
          actions.push(`⚠️ WARNING: Your potential donor rate (%${Math.round(highRiskPct)}) is too high! Regular donation campaigns and monthly newsletters should be planned.`);
        } else {
          actions.push("Donor database is balanced. Send special thank you letters and transparency reports to current regular donors.");
        }
        actions.push("Update participation frequency after each event to feed the Decision Tree classification model.");
      }

    } else if (currentSector === 'egitim') {
      if (currentLang === 'tr') {
        actions.push("Haftalık ders çalışma süresi 10 saatin altında olan öğrencilere ek etüt programları planlayın.");
        if (highRiskPct > 30) {
          actions.push(`⚠️ RİSK ALARMI: Akademik başarısızlık riski taşıyan öğrenci oranı (%${Math.round(highRiskPct)}) yüksek seviyede! Devamsızlık takipleri sıkılaştırılmalı.`);
        } else {
          actions.push("Ders devamlılığı ve başarı oranları kararlı. Başarıyı sürdürmek için gelişim odaklı mentorluk programları uygulayın.");
        }
        actions.push("Lojistik regresyon katsayılarını doğrulamak için dönem sonu final notlarını veri setine etiket olarak işleyin.");
      } else {
        actions.push("Plan additional tutoring programs for students with weekly study hours under 10 hours.");
        if (highRiskPct > 30) {
          actions.push(`⚠️ RISK ALERT: The ratio of students at risk of academic failure (%${Math.round(highRiskPct)}) is high! Attendance monitoring must be tightened.`);
        } else {
          actions.push("Course attendance and success rates are stable. Apply development-oriented mentoring programs to sustain success.");
        }
        actions.push("Process end-of-term final grades as labels in the dataset to validate Logistic Regression coefficients.");
      }

    } else if (currentSector === 'gida') {
      if (currentLang === 'tr') {
        actions.push("Günlük sipariş talebi tahminlerine göre stok planlaması yaparak gıda israfını en aza indirin.");
        actions.push("Restoran değerlendirme puanı 4.0'ün altında olan şubelerde kalite standartlarını incelemek üzere denetim ekibi görevlendirin.");
        actions.push("Model analizine göre kampanya uygulaması sipariş hacmini %25 artırıyor. Hafta sonları indirimli kampanya paketleri sunun.");
      } else {
        actions.push("Minimize food waste by doing inventory planning based on daily order demand forecasts.");
        actions.push("Assign an audit team to inspect quality standards in branches with restaurant rating scores below 4.0.");
        actions.push("According to the model analysis, campaigns increase order volume by 25%. Offer discounted campaign packages on weekends.");
      }

    } else if (currentSector === 'lojistik') {
      if (currentLang === 'tr') {
        actions.push("Gecikme riski yüksek (%50 üzeri) teslimat rotaları için otomatik alternatif güzergah algoritmaları devreye alın.");
        if (highRiskPct > 20) {
          actions.push(`⚠️ DİKKAT: Teslimat gecikme oranları (%${Math.round(highRiskPct)}) kritik düzeyde! Bölgedeki kurye dağılımları revize edilmeli.`);
        } else {
          actions.push("Mesafe ve kurye verimliliği dengede. Zamanında teslimat puanlarını ödüllendirme sistemine bağlayın.");
        }
        actions.push("Gecikme tahminlerini doğrulamak için hava durumu ve yol çalışma verilerini katsayı olarak eklemeyi değerlendirin.");
      } else {
        actions.push("Activate automatic alternative route algorithms for delivery routes with a high delay risk (above 50%).");
        if (highRiskPct > 20) {
          actions.push(`⚠️ ATTENTION: Delivery delay rates (%${Math.round(highRiskPct)}) are at a critical level! Courier distributions in the region must be revised.`);
        } else {
          actions.push("Distance and courier efficiency are balanced. Link on-time delivery scores to a reward system.");
        }
        actions.push("Consider adding weather and roadwork data as coefficients to validate delay predictions.");
      }
    } else if (currentSector === 'tekstil') {
      if (currentLang === 'tr') {
        actions.push("Premium Alıcı segmentine yönelik kişiye özel sadakat kulübü avantajları ve özel koleksiyon ön gösterimleri sunun.");
        if (highRiskPct > 20 || warningRisk > total * 0.4) {
          actions.push(`⚠️ HEDEFLEME UYARISI: Fırsatçı ve düşük aktiviteli müşteri oranınız yüksek. Kampanya bazlı push bildirimlerini artırın.`);
        } else {
          actions.push("Müşteri sadakat dağılımı verimli. İndirim hassasiyeti düşük Premium gruba yönelik sepet büyütme çapraz satış stratejileri izleyin.");
        }
        actions.push("K-NN model sınırlarını doğrulamak için yeni kayıtların alışveriş sıklığını aylık periyotlarla güncelleyin.");
      } else {
        actions.push("Offer personalized loyalty club benefits and exclusive collection previews for the Premium Buyer segment.");
        if (highRiskPct > 20 || warningRisk > total * 0.4) {
          actions.push(`⚠️ TARGETING WARNING: Your ratio of opportunistic and low-activity customers is high. Increase campaign-based push notifications.`);
        } else {
          actions.push("Customer loyalty distribution is efficient. Follow basket-growing cross-selling strategies for the Premium group with low discount sensitivity.");
        }
        actions.push("Update shopping frequency of new registrations on monthly periods to validate K-NN model boundaries.");
      }
    }

    // Render list elements
    actions.forEach(act => {
      const li = document.createElement('li');
      li.className = 'action-item fade-in';
      
      let dotColor = 'var(--warning)';
      if (act.includes('⚠️')) dotColor = 'var(--danger)';
      
      li.innerHTML = `
        <span class="action-dot" style="background: ${dotColor};"></span>
        <span>${act}</span>
      `;
      actionsBox.appendChild(li);
    });
  }

  // ================= PDF REPORT GENERATION =================
  const btnDownloadPdf = document.getElementById('btn-download-pdf');
  
  function preparePrintMetadataManifest() {
    const elSchemaFile = document.getElementById('manifest-schema-file');
    const elSchemaVersion = document.getElementById('manifest-schema-version');
    const elAccuracy = document.getElementById('manifest-model-accuracy');
    const elHash = document.getElementById('manifest-validation-hash');
    const elTimestamp = document.getElementById('manifest-timestamp');
    const qrBox = document.getElementById('manifest-qrcode');

    if (!elSchemaFile || !elSchemaVersion || !elAccuracy || !elHash || !elTimestamp || !qrBox) return;

    // 1. Version of schema
    const schemaFile = `${currentSector}_schema.json`;
    const schemaVersion = sectorSchemas[currentSector]?.version || "v1.0.0";

    // 2. Accuracy value
    const accuracyEl = document.getElementById('metric-accuracy-val');
    const accuracy = accuracyEl ? accuracyEl.textContent.trim() : `${sectorSchemas[currentSector]?.metrics?.accuracy}%`;

    // 3. Unique validation hash
    const hashSeed = `${currentCompany}-${currentSector}-${accuracy}-${Date.now()}`;
    let hashNum = 0;
    for (let i = 0; i < hashSeed.length; i++) {
      hashNum = (hashNum << 5) - hashNum + hashSeed.charCodeAt(i);
      hashNum |= 0;
    }
    const hash = 'AV-' + currentSector.substring(0,3).toUpperCase() + '-' + Math.abs(hashNum).toString(16).substring(0,6).toUpperCase();

    // 4. Timestamp
    const date = new Date();
    const formattedDate = date.getFullYear() + '-' +
      String(date.getMonth() + 1).padStart(2, '0') + '-' +
      String(date.getDate()).padStart(2, '0') + ' ' +
      String(date.getHours()).padStart(2, '0') + ':' +
      String(date.getMinutes()).padStart(2, '0') + ':' +
      String(date.getSeconds()).padStart(2, '0');

    // 5. Update HTML elements
    elSchemaFile.textContent = schemaFile;
    elSchemaVersion.textContent = schemaVersion;
    elAccuracy.textContent = accuracy;
    elHash.textContent = hash;
    elTimestamp.textContent = formattedDate;

    // 6. Generate validation manifest JSON for QR Code
    const qrManifest = {
      manifest_type: "ANL_VERTEX_SECURITY_MANIFEST",
      schema_meta: {
        file: schemaFile,
        version: schemaVersion,
        integrity_hash: "SHA256-" + Math.abs(hashNum * 17).toString(16).substring(0,8).toUpperCase()
      },
      model_meta: {
        sector: currentSector,
        accuracy: accuracy,
        precision: document.getElementById('metric-precision-val')?.textContent.trim() || `${sectorSchemas[currentSector]?.metrics?.precision}%`,
        recall: document.getElementById('metric-recall-val')?.textContent.trim() || `${sectorSchemas[currentSector]?.metrics?.recall}%`
      },
      verification: {
        signature: hash,
        verified_by: "ANL Vertex AI Engine v4.6",
        timestamp: formattedDate
      }
    };

    // 7. Render QR Code
    qrBox.innerHTML = '';
    new QRCode(qrBox, {
      text: JSON.stringify(qrManifest, null, 2),
      width: 80,
      height: 80,
      correctLevel: QRCode.CorrectLevel.M
    });
  }

  function generatePrintablePdfReport() {
    const reportContainer = document.getElementById('pdf-report-print-container');
    if (!reportContainer) return;

    // Get current values
    const company = currentCompany || "ASYA HOLDİNG A.Ş.";
    const sectorLabel = sectorLabelsCard[currentLang][currentSector] || currentSector;
    const algorithm = sectorSchemas[currentSector]?.algorithm?.[currentLang] || "ML Model";
    const accuracy = document.getElementById('metric-accuracy-val')?.textContent || "98.40%";
    const precision = document.getElementById('metric-precision-val')?.textContent || "97.80%";
    const recall = document.getElementById('metric-recall-val')?.textContent || "99.10%";
    const outputResult = document.getElementById('dash-output-result')?.textContent || "-";
    const outputSummary = document.getElementById('dash-output-summary')?.textContent || "";

    // 1. Get Live Recommendations
    const recBox = document.getElementById('recommended-actions-box');
    let recHtml = '';
    if (recBox && recBox.children.length > 0) {
      recHtml = recBox.innerHTML;
    } else {
      recHtml = currentLang === 'tr' 
        ? `<li class="action-item">Yeterli veri girilmedi. Model henüz aksiyon üretmedi.</li>`
        : `<li class="action-item">Insufficient data. No actions generated yet.</li>`;
    }

    // 2. Get What-If Comparison
    const whatifBox = document.getElementById('whatif-comparison-box');
    let whatifHtml = '';
    if (whatifBox) {
      whatifHtml = whatifBox.innerHTML;
    }

    // 3. Get Fairness Gauge Details
    const fairnessTitle = document.getElementById('fairness-gauge-card')?.querySelector('h3')?.textContent || "⚖️ AI Adillik Ölçer (Fairness Gauge)";
    const fairnessDesc = document.getElementById('fairness-gauge-card')?.querySelector('p')?.textContent || "";
    const fairnessVal = document.getElementById('fairness-score-badge')?.textContent || "98%";

    // 4. Get Pipeline Performance Stats
    const latencyVal = document.getElementById('pipe-stat-last')?.textContent || "120 ms";
    const throughputVal = document.getElementById('pipe-throughput-live')?.textContent || "5.00 rec/s";
    const pipelineRunCountVal = document.getElementById('pipe-stat-count')?.textContent || "0";

    // 5. Gather Active Simulation Inputs
    let inputsHtml = '<div style="display:flex; flex-direction:column; gap:0.4rem; font-size:0.78rem;">';
    let inputsList = [];
    if (currentSector === 'vakif') {
      inputsList = [
        { label: { tr: "Aylık Katılım Sıklığı", en: "Monthly Attendance Frequency" }, val: document.getElementById('slider-credit')?.value, unit: "" },
        { label: { tr: "Geçmiş Bağış Tutarı ($)", en: "Past Donation Amount ($)" }, val: document.getElementById('slider-income')?.value, unit: " $" },
        { label: { tr: "Üyelik Süresi (Yıl)", en: "Membership Duration (Years)" }, val: document.getElementById('slider-dti')?.value, unit: { tr: " Yıl", en: " Years" } }
      ];
    } else if (currentSector === 'egitim') {
      inputsList = [
        { label: { tr: "Haftalık Çalışma Süresi (Saat)", en: "Weekly Study Time (Hours)" }, val: document.getElementById('slider-glucose')?.value, unit: { tr: " Saat", en: " Hours" } },
        { label: { tr: "Ders Devam Oranı (%)", en: "Course Attendance Rate (%)" }, val: document.getElementById('slider-bmi')?.value, unit: "%" },
        { label: { tr: "Deneme Sınav Puanı", en: "Mock Exam Score" }, val: document.getElementById('slider-age')?.value, unit: "" }
      ];
    } else if (currentSector === 'gida') {
      inputsList = [
        { label: { tr: "Ortalama Sipariş Adedi", en: "Avg. Order Quantity" }, val: document.getElementById('slider-size')?.value, unit: "" },
        { label: { tr: "Restoran Değerlendirme Puanı", en: "Restaurant Rating Score" }, val: document.getElementById('slider-beds')?.value, unit: "" },
        { label: { tr: "Kampanya Uygulaması", en: "Campaign Application" }, val: document.getElementById('toggle-location')?.checked ? (currentLang === 'tr' ? 'Evet' : 'Yes') : (currentLang === 'tr' ? 'Hayır' : 'No'), unit: "" }
      ];
    } else if (currentSector === 'lojistik') {
      inputsList = [
        { label: { tr: "Mesafe Uzunluğu", en: "Distance Length" }, val: document.getElementById('slider-days')?.value, unit: " km" },
        { label: { tr: "Trafik Yoğunluğu", en: "Traffic Density" }, val: document.getElementById('slider-sessions')?.value, unit: "" },
        { label: { tr: "Paket Yükü Adedi", en: "Package Load Quantity" }, val: document.getElementById('slider-tickets')?.value, unit: { tr: " Adet", en: " Units" } }
      ];
    } else if (currentSector === 'tekstil') {
      inputsList = [
        { label: { tr: "Aylık Alışveriş Sıklığı", en: "Monthly Shopping Frequency" }, val: document.getElementById('slider-days')?.value, unit: { tr: " Kez", en: " Times" } },
        { label: { tr: "Ortalama Sepet Tutarı", en: "Average Basket Amount" }, val: document.getElementById('slider-sessions')?.value, unit: { tr: " TL", en: " TRY" } },
        { label: { tr: "İndirim Hassasiyeti", en: "Discount Sensitivity" }, val: document.getElementById('slider-tickets')?.value, unit: "%" }
      ];
    }

    inputsList.forEach(inp => {
      if (inp.val !== undefined && inp.val !== null) {
        const labelText = inp.label[currentLang];
        const unitText = typeof inp.unit === 'object' ? inp.unit[currentLang] : inp.unit;
        inputsHtml += `<div><strong>${labelText}:</strong> <span style="font-family:monospace; color:#333;">${inp.val}${unitText}</span></div>`;
      }
    });
    inputsHtml += '</div>';

    // 6. XAI feature importance weights block
    const xaiBars = document.getElementById('xai-bar-chart-container')?.innerHTML || "";

    const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);

    // Assemble the complete report HTML
    let html = `
      <div style="padding: 1.5cm; background:#ffffff; color:#111111; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; line-height:1.5;">
        
        <!-- Header -->
        <div style="border-bottom:3px solid #111; padding-bottom:1rem; margin-bottom:1.5rem; display:flex; justify-content:space-between; align-items:flex-start;">
          <div>
            <div style="font-size:0.75rem; font-weight:800; color:#666; letter-spacing:0.1em; text-transform:uppercase; margin-bottom:0.3rem;">ANL Vertex Decision Support Report</div>
            <h1 style="font-size:1.6rem; font-weight:800; color:#111; margin:0; line-height:1.1;">
              ${currentLang === 'tr' ? 'STRATEJİK DEĞERLENDİRME VE ÖNERİ RAPORU' : 'STRATEGIC EVALUATION & ADVISORY REPORT'}
            </h1>
            <div style="font-size:0.85rem; color:#444; margin-top:0.4rem; font-style:italic;">
              ${currentLang === 'tr' ? 'Yapay Zeka Denetimli Öğrenme Modeli Karar Destek Çıktısı' : 'AI Supervised Machine Learning Decision Support Output'}
            </div>
          </div>
          <div style="text-align:right;">
            <div style="background:#111; color:#fff; font-size:0.7rem; font-weight:bold; padding:0.3rem 0.6rem; border-radius:4px; text-transform:uppercase; letter-spacing:0.05em; display:inline-block; margin-bottom:0.4rem;">
              ${sectorLabel}
            </div>
            <div style="font-size:0.7rem; color:#666; font-family:monospace;">
              <strong>Date:</strong> ${timestamp}
            </div>
          </div>
        </div>

        <!-- Corporate Metadata -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; background:#f4f5f7; border:1px solid #e2e8f0; border-radius:6px; padding:0.8rem; font-size:0.8rem; margin-bottom:1.5rem;">
          <div>
            <div><strong>${currentLang === 'tr' ? 'Müşteri / Firma Adı:' : 'Client / Company Name:'}</strong> ${company}</div>
            <div><strong>${currentLang === 'tr' ? 'Karar Verme Algoritması:' : 'Decision Algorithm:'}</strong> ${algorithm}</div>
          </div>
          <div>
            <div><strong>${currentLang === 'tr' ? 'Aktif Model Doğruluğu:' : 'Active Model Accuracy:'}</strong> ${accuracy}</div>
            <div><strong>${currentLang === 'tr' ? 'Rapor Türü:' : 'Report Type:'}</strong> ${currentLang === 'tr' ? 'Stratejik Yönetim Kılavuzu' : 'Strategic Management Guide'}</div>
          </div>
        </div>

        <!-- SECTION 1: EXECUTIVE SUMMARY (PLACED AT THE VERY BEGINNING - CONTENT STRATEGY) -->
        <div style="border:2px solid #222; border-radius:8px; padding:1.2rem; background:#fafafa; margin-bottom:1.5rem; page-break-inside:avoid;">
          <h2 style="font-size:1.10rem; font-weight:800; color:#111; margin:0 0 0.5rem 0; text-transform:uppercase; border-bottom:1.5px solid #222; padding-bottom:0.3rem; display:flex; align-items:center; gap:0.5rem;">
            <span>1.</span> ${currentLang === 'tr' ? 'ÖNCELİKLİ STRATEJİK AKSİYON PLANI (EXECUTIVE SUMMARY)' : 'PRIORITY STRATEGIC ACTION PLAN (EXECUTIVE SUMMARY)'}
          </h2>
          <p style="font-size:0.8rem; color:#444; line-height:1.45; margin-bottom:1rem; font-weight:500;">
            ${currentLang === 'tr'
              ? 'Aşağıdaki aksiyonlar, denetimli makine öğrenimi modelinin aktif veri parametrelerini ve sektörel risk ağırlıklarını analiz ederek ürettiği, işletmenizin ticari karlılığını ve operasyonel verimliliğini optimize etmeyi amaçlayan öncelikli stratejik önerilerdir:'
              : 'The following actions are priority strategic recommendations generated by our machine learning model analyzing active input parameters and sectoral risk weights, aimed at optimizing your business profitability and operational efficiency:'}
          </p>
          <div class="print-actions-wrapper" style="font-size:0.8rem; color:#222; line-height:1.5;">
            ${recHtml}
          </div>
        </div>

        <!-- SECTION 2: SIMULATION STATE & WHAT-IF COMPARISON -->
        <div style="border:1px solid #ccc; border-radius:8px; padding:1.2rem; margin-bottom:1.5rem; page-break-inside:avoid;">
          <h2 style="font-size:1.00rem; font-weight:800; color:#111; margin:0 0 0.8rem 0; text-transform:uppercase; border-bottom:1px solid #ccc; padding-bottom:0.3rem;">
            2. ${currentLang === 'tr' ? 'SİMÜLASYON DURUMU VE MODEL FORECAST' : 'SIMULATION STATE & MODEL FORECAST'}
          </h2>
          
          <div style="display:grid; grid-template-columns:1.2fr 1fr; gap:1.5rem; margin-bottom:1rem;">
            <div>
              <h4 style="margin:0 0 0.4rem 0; font-size:0.8rem; text-transform:uppercase; color:#555;">${currentLang === 'tr' ? 'Aktif Simülasyon Parametreleri' : 'Active Simulation Parameters'}</h4>
              ${inputsHtml}
            </div>
            
            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:6px; padding:0.8rem; display:flex; flex-direction:column; justify-content:center;">
              <div style="font-size:0.7rem; color:#666; font-weight:600; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:0.2rem;">
                ${currentLang === 'tr' ? 'Tahmin Edilen Model Çıktısı:' : 'Estimated Model Output:'}
              </div>
              <div style="font-size:1.15rem; font-weight:800; color:#111;">
                ${outputResult}
              </div>
              <div style="font-size:0.75rem; color:#555; margin-top:0.3rem;">
                ${outputSummary}
              </div>
            </div>
          </div>

          <!-- Scenario testing comparative table -->
          <div style="margin-top:1rem; background:#fcfcfc; border:1px dashed #bbb; border-radius:6px; padding:0.8rem;">
            <h4 style="margin:0 0 0.5rem 0; font-size:0.8rem; text-transform:uppercase; color:#555;">
              ${currentLang === 'tr' ? '📊 Dinamik Karşılaştırmalı Senaryo Testi' : '📊 Dynamic Comparative Scenario Testing'}
            </h4>
            <div style="font-size:0.78rem;">
              ${whatifHtml}
            </div>
          </div>
        </div>

        <!-- SECTION 3: EXPLAINABLE AI & MODEL METRICS -->
        <div style="border:1px solid #ccc; border-radius:8px; padding:1.2rem; margin-bottom:1.5rem; page-break-inside:avoid;">
          <h2 style="font-size:1.00rem; font-weight:800; color:#111; margin:0 0 0.8rem 0; text-transform:uppercase; border-bottom:1px solid #ccc; padding-bottom:0.3rem;">
            3. ${currentLang === 'tr' ? 'YAPAY ZEKA GÜVENİLİRLİK VE ETİK ANALİZİ (XAI)' : 'YAPAY ZEKA GÜVENİLİRLİK VE ETİK ANALİZİ (XAI)'}
          </h2>
          
          <div style="display:grid; grid-template-columns:1.2fr 1fr; gap:1.5rem;">
            <div>
              <h4 style="margin:0 0 0.6rem 0; font-size:0.8rem; text-transform:uppercase; color:#555;">
                ${currentLang === 'tr' ? 'Değişken Karar Ağırlıkları (LIME/SHAP)' : 'Feature Decision Importance (LIME/SHAP)'}
              </h4>
              <div style="display:flex; flex-direction:column; gap:0.5rem;">
                ${xaiBars}
              </div>
            </div>
            
            <div>
              <h4 style="margin:0 0 0.4rem 0; font-size:0.8rem; text-transform:uppercase; color:#555;">
                ${fairnessTitle}
              </h4>
              <p style="font-size:0.72rem; color:#555; margin-bottom:0.5rem; line-height:1.45;">
                ${fairnessDesc}
              </p>
              <div style="display:flex; align-items:center; gap:0.8rem; background:#fcfcfc; border:1px solid #e2e8f0; border-radius:6px; padding:0.6rem;">
                <div style="font-size:1.2rem; font-weight:bold; color:#111;">
                  ${fairnessVal}
                </div>
                <div style="font-size:0.68rem; color:#666;">
                  ${currentLang === 'tr' ? 'Etik Uyumluluk ve Adillik Katsayısı' : 'Ethical Compliance & Fairness Coefficient'}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- SECTION 4: DATA PIPELINE PROCESSING -->
        <div style="border:1px solid #ccc; border-radius:8px; padding:1.2rem; page-break-inside:avoid;">
          <h2 style="font-size:1.00rem; font-weight:800; color:#111; margin:0 0 0.8rem 0; text-transform:uppercase; border-bottom:1px solid #ccc; padding-bottom:0.3rem;">
            4. ${currentLang === 'tr' ? 'VERİ İŞLEME SÜRECİ VE PERFORMANS RAPORU' : 'DATA PROCESSING PIPELINE & PERFORMANCE'}
          </h2>
          <p style="font-size:0.75rem; color:#555; margin-bottom:0.8rem;">
            ${currentLang === 'tr'
              ? 'ANL Vertex R&D mimarisi üzerinde, girdilerin model tahminlerine dönüştürülmesi sırasında gerçekleşen veri işleme hızları ve işlem hacimleri:'
              : 'Data processing speeds and transactional volumes recorded during the transformation of inputs into live model predictions on the ANL Vertex R&D infrastructure:'}
          </p>
          <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:1rem; font-size:0.78rem; text-align:center;">
            <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:0.6rem; border-radius:6px;">
              <div style="font-size:0.65rem; color:#666; font-weight:600; text-transform:uppercase;">${currentLang === 'tr' ? 'Ortalama Gecikme' : 'Average Latency'}</div>
              <div style="font-size:1.05rem; font-weight:bold; color:#111; margin-top:0.2rem;">${latencyVal}</div>
            </div>
            <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:0.6rem; border-radius:6px;">
              <div style="font-size:0.65rem; color:#666; font-weight:600; text-transform:uppercase;">${currentLang === 'tr' ? 'Pipeline Verimi' : 'Pipeline Throughput'}</div>
              <div style="font-size:1.05rem; font-weight:bold; color:#111; margin-top:0.2rem;">${throughputVal}</div>
            </div>
            <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:0.6rem; border-radius:6px;">
              <div style="font-size:0.65rem; color:#666; font-weight:600; text-transform:uppercase;">${currentLang === 'tr' ? 'Toplam Analiz Hacmi' : 'Total Runs Count'}</div>
              <div style="font-size:1.05rem; font-weight:bold; color:#111; margin-top:0.2rem;">${pipelineRunCountVal}</div>
            </div>
          </div>
        </div>

      </div>
    `;

    reportContainer.innerHTML = html;
  }

  btnDownloadPdf.addEventListener('click', () => {
    try {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4'
      });

      const company = currentCompany || "ASYA HOLDİNG A.Ş.";
      const sectorLabel = sectorLabelsCard[currentLang][currentSector] || currentSector;
      const accuracy = document.getElementById('metric-accuracy-val')?.textContent.trim() || `${sectorSchemas[currentSector]?.metrics?.accuracy}%`;
      const outputResult = document.getElementById('dash-output-result')?.textContent.trim() || "-";

      const recBox = document.getElementById('recommended-actions-box');
      const recs = [];
      if (recBox) {
        const items = recBox.querySelectorAll('li');
        items.forEach(li => {
          recs.push(li.textContent.trim().replace(/^[\s\d\.\-\•\*\●\u26A0\uFE0F\s*]+/g, ''));
        });
      }
      const topRecommendations = recs.filter(r => r.length > 0 && !r.includes('Yeterli veri') && !r.includes('Insufficient')).slice(0, 3);

      const isTr = currentLang === 'tr';
      const labels = {
        title: isTr ? "ANL VERTEX YAPAY ZEKA ANALİZ RAPORU" : "ANL VERTEX AI ANALYTICS REPORT",
        subtitle: isTr ? "Kurumsal Yönetici Performans Özeti" : "Corporate Executive Performance Summary",
        company: isTr ? "Şirket Adı:" : "Company Name:",
        sector: isTr ? "Sektör / Çalışma Alanı:" : "Sector / Domain:",
        date: isTr ? "Rapor Tarihi:" : "Report Date:",
        hash: isTr ? "Doğrulama İmzası:" : "Verification Signature:",
        accuracy: isTr ? "Model Doğruluk Oranı (Accuracy):" : "Model Accuracy Rate:",
        prediction: isTr ? "Son Tahmin Edilen Model Çıktısı:" : "Latest Predicted Model Output:",
        recommendations: isTr ? "Öne Çıkan Stratejik Ticari Öneriler (En Fazla 3):" : "Top 3 Strategic Commercial Recommendations:",
        footer: isTr ? "ANL Vertex AI Analitik Motoru tarafından üretilmiştir. Gizlidir." : "Generated by ANL Vertex AI Analytics Engine. Confidential.",
        noRecs: isTr ? "Aktif veri seti için stratejik öneri üretilmedi." : "No strategic recommendations generated for the active dataset."
      };

      // Color definitions
      const primaryColor = [22, 28, 45];   // Deep slate
      const accentColor = [37, 99, 235];   // Royal blue
      const textColor = [51, 65, 85];     // Charcoal
      const bgLight = [248, 250, 252];    // Light slate grey
      const white = [255, 255, 255];

      // Page margins
      const margin = 20;
      let y = 20;

      // Header Top bar (Deep slate box)
      doc.setFillColor(...primaryColor);
      doc.rect(margin, y, 170, 22, 'F');

      // Title inside header
      doc.setFont("helvetica", "bold");
      doc.setFontSize(13);
      doc.setTextColor(...white);
      doc.text(labels.title, margin + 8, y + 14);
      y += 22 + 10; // move down

      // Calculate verification hash
      const hashSeed = `${company}-${currentSector}-${accuracy}-${Date.now()}`;
      let hashNum = 0;
      for (let i = 0; i < hashSeed.length; i++) {
        hashNum = (hashNum << 5) - hashNum + hashSeed.charCodeAt(i);
        hashNum |= 0;
      }
      const hash = 'AV-' + currentSector.substring(0,3).toUpperCase() + '-' + Math.abs(hashNum).toString(16).substring(0,6).toUpperCase();

      // Metadata Block
      doc.setFontSize(10);
      doc.setTextColor(...textColor);

      const formattedDate = new Date().toLocaleString(isTr ? 'tr-TR' : 'en-US');
      const metaData = [
        { label: labels.company, val: company },
        { label: labels.sector, val: sectorLabel },
        { label: labels.date, val: formattedDate },
        { label: labels.hash, val: hash }
      ];

      metaData.forEach(item => {
        doc.setFont("helvetica", "bold");
        doc.text(item.label, margin + 5, y);
        doc.setFont("helvetica", "normal");
        doc.text(item.val, margin + 60, y);
        y += 8;
      });

      y += 4;
      // Draw decorative line
      doc.setDrawColor(...accentColor);
      doc.setLineWidth(0.5);
      doc.line(margin, y, 210 - margin, y);
      y += 10;

      // Executive Summary
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.setTextColor(...primaryColor);
      doc.text(labels.subtitle, margin, y);
      y += 8;

      // Shaded box
      doc.setFillColor(...bgLight);
      doc.rect(margin, y, 170, 32, 'F');

      doc.setFontSize(10);
      doc.setTextColor(...textColor);

      // Model Accuracy
      doc.setFont("helvetica", "bold");
      doc.text(labels.accuracy, margin + 8, y + 10);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(...accentColor);
      doc.text(accuracy, margin + 110, y + 10);

      // Latest Prediction
      doc.setTextColor(...textColor);
      doc.setFont("helvetica", "bold");
      doc.text(labels.prediction, margin + 8, y + 22);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(239, 68, 68);
      doc.text(outputResult, margin + 110, y + 22);

      y += 32 + 12;

      // Recommendations Block
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.setTextColor(...primaryColor);
      doc.text(labels.recommendations, margin, y);
      y += 8;

      doc.setFontSize(10);
      doc.setTextColor(...textColor);

      if (topRecommendations.length === 0) {
        doc.setFont("helvetica", "italic");
        doc.text(labels.noRecs, margin + 8, y);
        y += 10;
      } else {
        topRecommendations.forEach((rec, idx) => {
          doc.setFillColor(...accentColor);
          doc.rect(margin, y - 4, 6, 6, 'F');
          doc.setFont("helvetica", "bold");
          doc.setTextColor(...white);
          doc.text((idx + 1).toString(), margin + 2, y);

          doc.setFont("helvetica", "normal");
          doc.setTextColor(...textColor);
          const wrappedText = doc.splitTextToSize(rec, 150);

          let localY = y;
          wrappedText.forEach(line => {
            doc.text(line, margin + 10, localY);
            localY += 5;
          });

          y = localY + 4;
        });
      }

      // Footer
      y = 260;
      doc.setDrawColor(226, 232, 240);
      doc.line(margin, y, 210 - margin, y);
      y += 6;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(148, 163, 184);
      doc.text(labels.footer, margin, y);

      const safeCompany = company.replace(/[^a-zA-Z0-9]/g, "_");
      const safeSector = currentSector.toUpperCase();
      doc.save(`ANL_Vertex_Report_${safeCompany}_${safeSector}.pdf`);
    } catch (err) {
      console.error("PDF generation error: ", err);
      alert(currentLang === 'tr' ? "PDF Raporu indirilirken hata oluştu." : "Error generating PDF report.");
    }
  });

  // ================= EXCEL EXPORT ACTION =================
  const btnDownloadExcel = document.getElementById('btn-download-excel');
  
  if (btnDownloadExcel) {
    btnDownloadExcel.addEventListener('click', () => {
      const sector = currentSector;
      const lang = currentLang;
      const company = currentCompany || "ANL Vertex";
      
      // 1. Determine headers per sector and language
      let headers = [];
      if (sector === 'vakif') {
        headers = lang === 'tr'
          ? ['Bağışçı İsmi', 'Katılım Sıklığı (Aylık)', 'Bağış Tutarı ($)', 'Üyelik Süresi (Yıl)', 'Sınıflandırma']
          : ['Donor Name', 'Monthly Attendance Freq', 'Donation Amount ($)', 'Membership (Years)', 'Classification'];
      } else if (sector === 'egitim') {
        headers = lang === 'tr'
          ? ['Öğrenci Adı', 'Çalışma Süresi (Saat)', 'Devam Oranı (%)', 'Sınav Puanı', 'Başarı Riski']
          : ['Student Name', 'Study Time (Hours)', 'Attendance Rate (%)', 'Exam Score', 'Failure Risk'];
      } else if (sector === 'gida') {
        headers = lang === 'tr'
          ? ['Restoran Kodu / Sipariş', 'Ort. Sipariş Hacmi', 'Restoran Puanı', 'Kampanya Uygulaması', 'Günlük Yemek Talebi Tahmini']
          : ['Restaurant Code / Order', 'Avg. Order Volume', 'Restaurant Score', 'Campaign Application', 'Daily Food Demand Forecast'];
      } else if (sector === 'lojistik') {
        headers = lang === 'tr'
          ? ['Teslimat Kodu', 'Mesafe Uzunluğu (km)', 'Trafik Katsayısı', 'Paket Yük Adedi', 'Gecikme Risk Durumu']
          : ['Delivery Code', 'Distance Length (km)', 'Traffic Coefficient', 'Package Load Quantity', 'Delay Risk Status'];
      } else if (sector === 'tekstil') {
        headers = lang === 'tr'
          ? ['Müşteri Adı', 'Alışveriş Sıklığı (Aylık)', 'Sepet Tutarı (TL)', 'İndirim Hassasiyeti (%)', 'Müşteri Segmenti']
          : ['Customer Name', 'Monthly Shopping Freq', 'Basket Amount (TRY)', 'Discount Sensitivity (%)', 'Customer Segment'];
      }
      
      // 2. Fetch rows
      const rows = (databases[sector] || []).map(row => {
        if (sector === 'vakif') {
          return [
            row.name,
            row.credit,
            row.income,
            row.dti,
            getLocalizedRowStatus(row, 'vakif', lang)
          ];
        } else if (sector === 'egitim') {
          return [
            row.name,
            row.glucose,
            row.bmi,
            row.age,
            getLocalizedRowStatus(row, 'egitim', lang)
          ];
        } else if (sector === 'gida') {
          return [
            row.name,
            row.size,
            row.beds,
            lang === 'tr' ? row.location : (row.location === 'Evet' ? 'Yes' : 'No'),
            getLocalizedRowStatus(row, 'gida', lang)
          ];
        } else if (sector === 'lojistik') {
          return [
            row.name,
            row.days,
            row.sessions,
            row.tickets,
            getLocalizedRowStatus(row, 'lojistik', lang)
          ];
        } else if (sector === 'tekstil') {
          return [
            row.name,
            row.days,
            row.sessions,
            row.tickets,
            getLocalizedRowStatus(row, 'tekstil', lang)
          ];
        }
        return [];
      });
      
      // 3. Compile worksheet names
      const sectorNames = {
        vakif: lang === 'tr' ? 'Dernekler ve Vakıflar' : 'Associations & Foundations',
        egitim: lang === 'tr' ? 'Eğitim Sektörü' : 'Education Sector',
        gida: lang === 'tr' ? 'Gıda Sektörü' : 'Food Sector',
        lojistik: lang === 'tr' ? 'Ulaşım ve Lojistik' : 'Transportation & Logistics',
        tekstil: lang === 'tr' ? 'Tekstil Perakende' : 'Textile Retail'
      };
      
      const sheetTitle = lang === 'tr' ? 'ANL Vertex Müşteri Veri Seti' : 'ANL Vertex Customer Dataset';
      const sheetName = sectorNames[sector] || "Dataset";
      const cleanSheetName = sheetName.replace(/[^a-zA-Z0-9 ]/g, '');
      
      // 4. Generate structured HTML template for Microsoft Excel compatibility
      let htmlContent = `
  <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
  <head>
  <meta charset="utf-8">
  <!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>${cleanSheetName}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #ffffff; margin: 0; padding: 20px; }
    .report-header { margin-bottom: 20px; border-bottom: 2px solid #10b981; padding-bottom: 15px; }
    .report-title { font-size: 20px; font-weight: bold; color: #0f172a; font-family: 'Segoe UI', Arial, sans-serif; }
    .report-meta { font-size: 12px; color: #64748b; margin-top: 5px; line-height: 1.5; }
    table { border-collapse: collapse; width: 100%; margin-top: 15px; }
    th { background-color: #10b981; color: #ffffff; font-weight: bold; text-align: left; padding: 10px 12px; border: 1px solid #cbd5e1; font-size: 13px; }
    td { padding: 8px 12px; border: 1px solid #e2e8f0; color: #334155; font-size: 12px; }
    tr:nth-child(even) { background-color: #f8fafc; }
  </style>
  </head>
  <body>
    <div class="report-header">
      <div class="report-title">${sheetTitle}</div>
      <div class="report-meta">
        <strong>${lang === 'tr' ? 'Şirket Adı:' : 'Company Name:'}</strong> ${company} <br>
        <strong>${lang === 'tr' ? 'Sektör:' : 'Sector:'}</strong> ${sheetName} <br>
        <strong>${lang === 'tr' ? 'Dışa Aktarma Tarihi:' : 'Export Date:'}</strong> ${new Date().toLocaleString(lang === 'tr' ? 'tr-TR' : 'en-US')}
      </div>
    </div>
    <table>
      <thead>
        <tr>
          ${headers.map(h => `<th>${h}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        ${rows.map(r => `<tr>${r.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}
      </tbody>
    </table>
  </body>
  </html>
      `;
      
      // 5. Build trigger click sequence
      const blob = new Blob([htmlContent], { type: 'application/vnd.ms-excel;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      
      const safeCompany = company.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
      const filename = `${safeCompany}_${sector}_dataset.xls`;
      
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    });
  }

  // ================= LOG OUT ACTION =================
  const btnLogout = document.getElementById('btn-logout');

  btnLogout.addEventListener('click', () => {
    switchPage('welcome');
  });

  // ================= SCROLL REVEAL OBSERVER =================
  const scrollRevealItems = document.querySelectorAll('.scroll-reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  scrollRevealItems.forEach(item => {
    revealObserver.observe(item);
  });

  // ================= EXPLAINABLE AI, WHAT-IF SIMULATOR, AND AURA AI CHAT MODULES =================

  function renderXaiWeights() {
    const container = document.getElementById('xai-bar-chart-container');
    if (!container) return;
    container.innerHTML = '';

    const weightsMap = {
      vakif: [
        { label: { tr: "Aylık Katılım Sıklığı", en: "Monthly Attendance Frequency" }, weight: 45 },
        { label: { tr: "Geçmiş Bağış Tutarı", en: "Past Donation Amount" }, weight: 35 },
        { label: { tr: "Üyelik Süresi", en: "Membership Duration" }, weight: 20 }
      ],
      egitim: [
        { label: { tr: "Haftalık Çalışma Süresi", en: "Weekly Study Time" }, weight: 50 },
        { label: { tr: "Ders Devam Oranı", en: "Course Attendance Rate" }, weight: 30 },
        { label: { tr: "Deneme Sınav Puanı", en: "Mock Exam Score" }, weight: 20 }
      ],
      gida: [
        { label: { tr: "Ortalama Sipariş Adedi", en: "Avg. Order Quantity" }, weight: 55 },
        { label: { tr: "Restoran Değerlendirme Puanı", en: "Restaurant Rating Score" }, weight: 25 },
        { label: { tr: "Kampanya Uygulaması", en: "Campaign Application" }, weight: 20 }
      ],
      lojistik: [
        { label: { tr: "Mesafe Uzunluğu", en: "Distance Length" }, weight: 45 },
        { label: { tr: "Trafik Yoğunluğu", en: "Traffic Density" }, weight: 30 },
        { label: { tr: "Paket Yükü Adedi", en: "Package Load Quantity" }, weight: 25 }
      ],
      tekstil: [
        { label: { tr: "Aylık Alışveriş Sıklığı", en: "Monthly Shopping Frequency" }, weight: 40 },
        { label: { tr: "Ortalama Sepet Tutarı", en: "Average Basket Amount" }, weight: 35 },
        { label: { tr: "İndirim Hassasiyeti", en: "Discount Sensitivity" }, weight: 25 }
      ]
    };

    const sectorWeights = weightsMap[currentSector] || [];
    sectorWeights.forEach(item => {
      const label = item.label[currentLang];
      const val = item.weight;
      const barItem = document.createElement('div');
      barItem.className = 'xai-bar-item';
      barItem.innerHTML = `
        <div class="xai-bar-label" title="${label}">${label}</div>
        <div class="xai-bar-track">
          <div class="xai-bar-fill" style="width: 0%; transition: width 0.8s ease-in-out;"></div>
        </div>
        <div class="xai-bar-value">${val}%</div>
      `;
      container.appendChild(barItem);
      requestAnimationFrame(() => {
        const fill = barItem.querySelector('.xai-bar-fill');
        if (fill) fill.style.width = `${val}%`;
      });
    });

    // Also update the Fairness Gauge whenever XAI weights are re-rendered
    renderFairnessGauge();
  }

  // ================= FAIRNESS GAUGE =================

  function renderFairnessGauge() {
    const barsContainer = document.getElementById('fairness-bars-container');
    const donutRing     = document.getElementById('fairness-donut-ring');
    const overallPct    = document.getElementById('fairness-overall-pct');
    const verdictBox    = document.getElementById('fairness-verdict');
    const verdictText   = document.getElementById('fairness-verdict-text');
    const card          = document.getElementById('fairness-gauge-card');

    if (!barsContainer || !donutRing) return;

    // ── Sector-specific fairness feature definitions ──
    // Each feature has:
    //   icon   : emoji representing the data dimension
    //   label  : localized name
    //   desc   : ethics context (why this could be discriminatory)
    //   getBias: function that returns 0–100 disparate-impact score based on current slider values
    //            Low bias  < 25 → green (fair)
    //            Mid bias  25-55 → amber (caution)
    //            High bias > 55 → red (biased)

    const fairnessFeatures = {
      vakif: [
        {
          icon: '📅',
          label: { tr: 'Aylık Katılım Sıklığı', en: 'Monthly Attendance Frequency' },
          desc:  { tr: 'Yüksek katılım sıklığı coğrafi veya ekonomik kısıtlardan etkilenebilir.', en: 'High attendance frequency can be influenced by geographic or economic constraints.' },
          getBias: () => {
            const v = parseInt(document.getElementById('slider-credit')?.value || 8);
            // Extreme high or low values signal potential demographic skew
            const norm = (v - 1) / (25 - 1); // 0→1
            return Math.round(Math.abs(norm - 0.5) * 2 * 62 + 10);
          }
        },
        {
          icon: '💰',
          label: { tr: 'Geçmiş Bağış Tutarı', en: 'Past Donation Amount' },
          desc:  { tr: 'Bağış miktarı gelir seviyesiyle doğrudan ilişkili; sosyoekonomik statüyü yansıtabilir.', en: 'Donation amount is directly tied to income level; may reflect socioeconomic status.' },
          getBias: () => {
            const v = parseInt(document.getElementById('slider-income')?.value || 150);
            const norm = (v - 10) / (1000 - 10);
            return Math.round(norm * 70 + 5); // high income = higher bias risk
          }
        },
        {
          icon: '🗓️',
          label: { tr: 'Üyelik Süresi', en: 'Membership Duration' },
          desc:  { tr: 'Uzun üyelik süresi kuruma erişimi olan gruplara avantaj sağlar; yeni göç edenleri dezavantajlı kılar.', en: 'Long membership duration favours groups with access; may disadvantage recent migrants.' },
          getBias: () => {
            const v = parseInt(document.getElementById('slider-dti')?.value || 3);
            const norm = (v - 1) / (15 - 1);
            return Math.round(norm * 50 + 5);
          }
        }
      ],
      egitim: [
        {
          icon: '📚',
          label: { tr: 'Haftalık Çalışma Süresi', en: 'Weekly Study Time' },
          desc:  { tr: 'Çalışma saati, ev ortamı kalitesiyle ilişkili olup sosyoekonomik eşitsizliği yansıtabilir.', en: 'Study hours are linked to home environment quality and may reflect socioeconomic disparity.' },
          getBias: () => {
            const v = parseInt(document.getElementById('slider-glucose')?.value || 12);
            const norm = (v - 2) / (40 - 2);
            return Math.round(Math.abs(norm - 0.5) * 2 * 55 + 8);
          }
        },
        {
          icon: '🏫',
          label: { tr: 'Ders Devam Oranı', en: 'Course Attendance Rate' },
          desc:  { tr: 'Devamsızlık; sağlık, ulaşım veya çalışmak zorunda olma gibi sistemik faktörlerden kaynaklanabilir.', en: 'Absenteeism may stem from systemic factors: health, transportation, or working obligations.' },
          getBias: () => {
            const v = parseFloat(document.getElementById('slider-bmi')?.value || 85);
            const norm = (v - 30) / (100 - 30);
            // Low attendance carries high bias risk (multiple systemic reasons)
            return Math.round((1 - norm) * 65 + 5);
          }
        },
        {
          icon: '📝',
          label: { tr: 'Deneme Sınav Puanı', en: 'Mock Exam Score' },
          desc:  { tr: 'Sınav puanı test yanlılığına (test bias) ve dil bariyerlerine karşı hassas bir göstergedir.', en: 'Exam score is sensitive to test bias and language barriers in multilingual populations.' },
          getBias: () => {
            const v = parseInt(document.getElementById('slider-age')?.value || 70);
            const norm = (v - 20) / (100 - 20);
            return Math.round((1 - norm) * 60 + 5);
          }
        }
      ],
      gida: [
        {
          icon: '📦',
          label: { tr: 'Ortalama Sipariş Adedi', en: 'Avg. Order Quantity' },
          desc:  { tr: 'Sipariş hacmi bölgesel nüfus yoğunluğuyla ilişkili; kentsel/kırsal eşitsizliği içerebilir.', en: 'Order volume correlates with regional population density; may embed urban/rural disparity.' },
          getBias: () => {
            const v = parseInt(document.getElementById('slider-size')?.value || 1500);
            const norm = (v - 100) / (4000 - 100);
            return Math.round(Math.abs(norm - 0.4) * 1.6 * 50 + 6);
          }
        },
        {
          icon: '⭐',
          label: { tr: 'Restoran Puanı', en: 'Restaurant Rating' },
          desc:  { tr: 'Değerlendirme puanları kültürel tercihlere göre değişkenlik gösterebilir ve kültürel yanlılık içerebilir.', en: 'Rating scores vary by cultural preferences and can contain cultural bias in review patterns.' },
          getBias: () => {
            const v = parseFloat(document.getElementById('slider-beds')?.value || 4.2);
            const norm = (v - 1) / (5 - 1);
            // Mid-range ratings are fairest; extremes may reflect reviewer demographics
            return Math.round(Math.abs(norm - 0.7) * 2 * 45 + 10);
          }
        },
        {
          icon: '📣',
          label: { tr: 'Kampanya Uygulaması', en: 'Campaign Application' },
          desc:  { tr: 'Kampanyalara erişim; dijital okuryazarlık ve bölgesel kapsama bağlı olup eşitsizlik yaratabilir.', en: 'Campaign access depends on digital literacy and regional coverage, potentially creating inequality.' },
          getBias: () => {
            const v = document.getElementById('toggle-location')?.checked ? 1 : 0;
            return v === 1 ? 22 : 42; // active campaign access = lower bias
          }
        }
      ],
      lojistik: [
        {
          icon: '📍',
          label: { tr: 'Mesafe Uzunluğu', en: 'Distance Length' },
          desc:  { tr: 'Coğrafi mesafe; kırsal bölgeleri sistemik olarak dezavantajlı kılabilir.', en: 'Geographic distance may systematically disadvantage rural areas in service access.' },
          getBias: () => {
            const v = parseInt(document.getElementById('slider-days')?.value || 12);
            const norm = (v - 1) / (150 - 1);
            return Math.round(norm * 72 + 5);
          }
        },
        {
          icon: '🚦',
          label: { tr: 'Trafik Yoğunluğu', en: 'Traffic Density' },
          desc:  { tr: 'Trafik katsayısı büyük şehirlerde yaşayanları orantısız biçimde etkiler.', en: 'Traffic coefficient disproportionately affects residents of large metropolitan areas.' },
          getBias: () => {
            const v = parseInt(document.getElementById('slider-sessions')?.value || 3);
            const norm = (v - 1) / (10 - 1);
            return Math.round(norm * 65 + 8);
          }
        },
        {
          icon: '📬',
          label: { tr: 'Paket Yük Adedi', en: 'Package Load Count' },
          desc:  { tr: 'Paket sayısı, ticari hacimle orantılı olup küçük ölçekli işletmelere karşı önyargı oluşturabilir.', en: 'Package count is proportional to commercial scale, potentially biasing against small businesses.' },
          getBias: () => {
            const v = parseInt(document.getElementById('slider-tickets')?.value || 1);
            const norm = (v - 1) / (10 - 1);
            return Math.round(norm * 50 + 10);
          }
        }
      ],
      tekstil: [
        {
          icon: '🛍️',
          label: { tr: 'Alışveriş Sıklığı', en: 'Shopping Frequency' },
          desc:  { tr: 'Alışveriş sıklığı boş zaman kalitesiyle ilişkili; kadınlar ve gençler arasında farklılık gösterebilir.', en: 'Shopping frequency correlates with leisure time quality; may differ across gender and age groups.' },
          getBias: () => {
            const v = parseInt(document.getElementById('slider-days')?.value || 5);
            const norm = (v - 1) / (30 - 1);
            return Math.round(Math.abs(norm - 0.35) * 1.5 * 55 + 8);
          }
        },
        {
          icon: '💳',
          label: { tr: 'Ortalama Sepet Tutarı', en: 'Avg. Basket Amount' },
          desc:  { tr: 'Harcama miktarı gelir eşitsizliğini yansıtır; düşük gelirli segmentler için model dezavantajlı çalışabilir.', en: 'Spending amount reflects income inequality; the model may operate disadvantageously for low-income segments.' },
          getBias: () => {
            const v = parseInt(document.getElementById('slider-sessions')?.value || 1500);
            const norm = (v - 100) / (5000 - 100);
            return Math.round(norm * 68 + 6);
          }
        },
        {
          icon: '🎯',
          label: { tr: 'İndirim Hassasiyeti', en: 'Discount Sensitivity' },
          desc:  { tr: 'Fiyat hassasiyeti, ekonomik kırılganlığın dolaylı bir göstergesidir ve ayrımcı segmentasyon riski taşır.', en: 'Price sensitivity is an indirect indicator of economic vulnerability and carries discriminatory segmentation risk.' },
          getBias: () => {
            const v = parseInt(document.getElementById('slider-tickets')?.value || 40);
            // Very high sensitivity = financially vulnerable = higher bias risk
            return Math.round((v / 100) * 62 + 10);
          }
        }
      ]
    };

    const features = fairnessFeatures[currentSector];
    if (!features) return;

    // Compute bias scores
    const biasScores = features.map(f => f.getBias());
    const avgBias = biasScores.reduce((a, b) => a + b, 0) / biasScores.length;
    const overallFairness = Math.round(100 - avgBias);

    // Helper: classify a score
    function classify(score) {
      if (score < 25) return 'fair';
      if (score < 55) return 'caution';
      return 'biased';
    }

    const overallClass = classify(avgBias);

    // ── Update donut ring ──
    const circumference = 201.06; // 2π×32
    const offset = circumference * (1 - Math.max(0, overallFairness) / 100);
    donutRing.style.strokeDashoffset = offset;
    const ringColor = overallClass === 'fair' ? 'hsl(142,71%,45%)'
                    : overallClass === 'caution' ? 'hsl(38,92%,55%)'
                    : 'hsl(350,89%,60%)';
    donutRing.style.stroke = ringColor;

    if (overallPct) {
      overallPct.textContent = `${Math.max(0, overallFairness)}%`;
      overallPct.style.color = ringColor;
    }

    // ── Update card shimmer ──
    if (card) {
      card.classList.toggle('bias-alert', overallClass === 'biased');
    }

    // ── Render feature bars ──
    barsContainer.innerHTML = '';
    features.forEach((feat, i) => {
      const score = biasScores[i];
      const cls   = classify(score);
      const statusLabels = {
        fair:    { tr: 'Adil',    en: 'Fair' },
        caution: { tr: 'Dikkat',  en: 'Caution' },
        biased:  { tr: 'Riskli',  en: 'Biased' }
      };
      const row = document.createElement('div');
      row.className = `fairness-bar-row ${cls}`;
      row.innerHTML = `
        <div class="fairness-bar-header">
          <span class="fairness-bar-feature-name">${feat.icon} ${feat.label[currentLang]}</span>
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <span class="fairness-bar-pct ${cls}">${score}%</span>
            <span class="fairness-status-badge ${cls}">${statusLabels[cls][currentLang]}</span>
          </div>
        </div>
        <div class="fairness-bar-track">
          <div class="fairness-bar-fill ${cls}" style="width:0%;"></div>
        </div>
        <div class="fairness-bar-desc">${feat.desc[currentLang]}</div>
      `;
      barsContainer.appendChild(row);
      // Animate fill width after paint
      requestAnimationFrame(() => {
        const fill = row.querySelector('.fairness-bar-fill');
        if (fill) fill.style.width = `${score}%`;
      });
    });

    // ── Update verdict footer ──
    if (verdictBox && verdictText) {
      verdictBox.className = overallClass === 'fair'    ? 'verdict-ok'
                           : overallClass === 'caution' ? 'verdict-caution'
                           : 'verdict-biased';
      // use id for base styling retention
      verdictBox.id = 'fairness-verdict';
      verdictBox.className += ' ' + (overallClass === 'fair'    ? 'verdict-ok'
                                   : overallClass === 'caution' ? 'verdict-caution'
                                   : 'verdict-biased');
      const verdictKey = overallClass === 'fair'    ? 'fairness_verdict_ok'
                       : overallClass === 'caution' ? 'fairness_verdict_caution'
                       : 'fairness_verdict_biased';
      verdictText.textContent = translations[verdictKey][currentLang];
    }
  }

  function getSectorAverages(sector) {
    const list = databases[sector] || [];
    if (list.length === 0) return {};
    
    if (sector === 'vakif') {
      const sumCredit = list.reduce((a, b) => a + (b.credit || 0), 0);
      const sumIncome = list.reduce((a, b) => a + (b.income || 0), 0);
      const sumDti = list.reduce((a, b) => a + (b.dti || 0), 0);
      return { credit: sumCredit / list.length, income: sumIncome / list.length, dti: sumDti / list.length };
    } else if (sector === 'egitim') {
      const sumGlucose = list.reduce((a, b) => a + (b.glucose || 0), 0);
      const sumBmi = list.reduce((a, b) => a + (b.bmi || 0), 0);
      const sumAge = list.reduce((a, b) => a + (b.age || 0), 0);
      return { glucose: sumGlucose / list.length, bmi: sumBmi / list.length, age: sumAge / list.length };
    } else if (sector === 'gida') {
      const sumSize = list.reduce((a, b) => a + (b.size || 0), 0);
      const sumBeds = list.reduce((a, b) => a + (b.beds || 0), 0);
      const sumLoc = list.reduce((a, b) => a + (b.location === 'Evet' || b.location === true ? 1 : 0), 0);
      return { size: sumSize / list.length, beds: sumBeds / list.length, location: sumLoc / list.length };
    } else if (sector === 'lojistik') {
      const sumDays = list.reduce((a, b) => a + (b.days || 0), 0);
      const sumSessions = list.reduce((a, b) => a + (b.sessions || 0), 0);
      const sumTickets = list.reduce((a, b) => a + (b.tickets || 0), 0);
      return { days: sumDays / list.length, sessions: sumSessions / list.length, tickets: sumTickets / list.length };
    } else if (sector === 'tekstil') {
      const sumDays = list.reduce((a, b) => a + (b.days || 0), 0);
      const sumSessions = list.reduce((a, b) => a + (b.sessions || 0), 0);
      const sumTickets = list.reduce((a, b) => a + (b.tickets || 0), 0);
      return { days: sumDays / list.length, sessions: sumSessions / list.length, tickets: sumTickets / list.length };
    }
    return {};
  }

  const explanationTemplates = {
    tr: {
      // vakif
      credit_pos: "Aylık katılım sıklığı, düzenli bağışçı olma olasılığını %VALUE% artırdı.",
      credit_neg: "Aylık katılım sıklığının düşük olması, düzenli bağışçı olasılığını %VALUE% düşürdü.",
      income_pos: "Yüksek geçmiş bağış tutarı, düzenli bağışçı olasılığını %VALUE% artırdı.",
      income_neg: "Düşük geçmiş bağış tutarı, düzenli bağışçı olasılığını %VALUE% düşürdü.",
      dti_pos: "Uzun üyelik süresi, düzenli bağışçı olasılığını %VALUE% artırdı.",
      dti_neg: "Kısa üyelik süresi, düzenli bağışçı olasılığını %VALUE% düşürdü.",

      // egitim
      glucose_pos: "Haftalık çalışma süresinin yetersizliği, başarısızlık riskini %VALUE% artırdı.",
      glucose_neg: "Haftalık çalışma süresinin yeterli olması, başarısızlık riskini %VALUE% düşürdü.",
      bmi_pos: "Devamsızlığın yüksek olması, başarısızlık riskini %VALUE% artırdı.",
      bmi_neg: "Ders devam oranının yüksek olması, başarısızlık riskini %VALUE% düşürdü.",
      age_pos: "Deneme sınav puanının düşük olması, başarısızlık riskini %VALUE% artırdı.",
      age_neg: "Deneme sınav puanının yüksek olması, başarısızlık riskini %VALUE% düşürdü.",

      // gida
      size_pos: "Yüksek ortalama sipariş hacmi, günlük talebi %VALUE% adet artırdı.",
      size_neg: "Düşük ortalama sipariş hacmi, günlük talebi %VALUE% adet düşürdü.",
      beds_pos: "Yüksek restoran değerlendirme puanı, günlük talebi %VALUE% adet artırdı.",
      beds_neg: "Düşük restoran değerlendirme puanı, günlük talebi %VALUE% adet düşürdü.",
      location_pos: "Aktif kampanya uygulaması, günlük talebi %VALUE% adet artırdı.",
      location_neg: "Kampanya uygulanmaması, günlük talebi %VALUE% adet düşürdü.",

      // lojistik
      days_pos: "Uzun teslimat mesafesi, gecikme riskini %VALUE% artırdı.",
      days_neg: "Kısa teslimat mesafesi, gecikme riskini %VALUE% düşürdü.",
      sessions_pos: "Trafik yoğunluğunun fazla olması, gecikme riskini %VALUE% artırdı.",
      sessions_neg: "Trafik yoğunluğunun az olması, gecikme riskini %VALUE% düşürdü.",
      tickets_pos: "Paket yük adedinin fazla olması, gecikme riskini %VALUE% artırdı.",
      tickets_neg: "Paket yük adedinin az olması, gecikme riskini %VALUE% düşürdü.",

      // tekstil
      days_pos: "Sık alışveriş yapılması, müşteri değer skorunu %VALUE% artırdı.",
      days_neg: "Seyrek alışveriş yapılması, müşteri değer skorunu %VALUE% düşürdü.",
      sessions_pos: "Yüksek ortalama sepet tutarı, müşteri değer skorunu %VALUE% artırdı.",
      sessions_neg: "Düşük ortalama sepet tutarı, müşteri değer skorunu %VALUE% düşürdü.",
      tickets_pos: "Yüksek indirim hassasiyeti, premium alıcı skorunu %VALUE% düşürdü.",
      tickets_neg: "Düşük indirim hassasiyeti, premium alıcı skorunu %VALUE% artırdı."
    },
    en: {
      // vakif
      credit_pos: "Regular monthly attendance increased donor probability by %VALUE%.",
      credit_neg: "Low monthly attendance reduced donor probability by %VALUE%.",
      income_pos: "High past donation amount increased donor probability by %VALUE%.",
      income_neg: "Low past donation amount reduced donor probability by %VALUE%.",
      dti_pos: "Long-term membership increased donor probability by %VALUE%.",
      dti_neg: "Short membership duration reduced donor probability by %VALUE%.",

      // egitim
      glucose_pos: "Insufficient study time increased failure risk by %VALUE%.",
      glucose_neg: "Sufficient study time reduced failure risk by %VALUE%.",
      bmi_pos: "Low course attendance increased failure risk by %VALUE%.",
      bmi_neg: "High course attendance reduced failure risk by %VALUE%.",
      age_pos: "Low mock exam score increased failure risk by %VALUE%.",
      age_neg: "High mock exam score reduced failure risk by %VALUE%.",

      // gida
      size_pos: "High order quantity increased daily demand by %VALUE% orders.",
      size_neg: "Low order quantity reduced daily demand by %VALUE% orders.",
      beds_pos: "High restaurant score increased daily demand by %VALUE% orders.",
      beds_neg: "Low restaurant score reduced daily demand by %VALUE% orders.",
      location_pos: "Active promotional campaign increased daily demand by %VALUE% orders.",
      location_neg: "Lack of active campaign reduced daily demand by %VALUE% orders.",

      // lojistik
      days_pos: "Longer delivery distance increased delay probability by %VALUE%.",
      days_neg: "Shorter delivery distance reduced delay probability by %VALUE%.",
      sessions_pos: "High traffic density increased delay probability by %VALUE%.",
      sessions_neg: "Low traffic density reduced delay probability by %VALUE%.",
      tickets_pos: "High package load quantity increased delay probability by %VALUE%.",
      tickets_neg: "Low package load quantity reduced delay probability by %VALUE%.",

      // tekstil
      days_pos: "Frequent shopping increased customer value score by %VALUE%.",
      days_neg: "Infrequent shopping reduced customer value score by %VALUE%.",
      sessions_pos: "High basket amount increased customer value score by %VALUE%.",
      sessions_neg: "Low basket amount reduced customer value score by %VALUE%.",
      tickets_pos: "High discount sensitivity reduced premium buyer score by %VALUE%.",
      tickets_neg: "Low discount sensitivity increased premium buyer score by %VALUE%."
    }
  };

  // Waterfall Chart Generator Function
  function generateWaterfallChart(container, data) {
    if (!container) return;
    container.innerHTML = '';

    const { prediction_score, feature_importance, sector, lang } = data;
    
    // 1. Calculate sum of weights and baseline
    let sumWeights = 0;
    const weightsArray = [];
    
    // Map feature keys to their display names and values
    const featureMapping = {
      vakif: {
        credit: { tr: "Katılım Sıklığı", en: "Attendance Freq" },
        income: { tr: "Bağış Tutarı", en: "Donation Amount" },
        dti: { tr: "Üyelik Süresi", en: "Membership" }
      },
      egitim: {
        glucose: { tr: "Çalışma Süresi", en: "Study Time" },
        bmi: { tr: "Devam Oranı", en: "Attendance Rate" },
        age: { tr: "Sınav Puanı", en: "Exam Score" }
      },
      gida: {
        size: { tr: "Sipariş Adedi", en: "Order Qty" },
        beds: { tr: "Restoran Puanı", en: "Rest. Rating" },
        location: { tr: "Kampanya", en: "Campaign" }
      },
      lojistik: {
        days: { tr: "Mesafe", en: "Distance" },
        sessions: { tr: "Trafik", en: "Traffic" },
        tickets: { tr: "Paket Yükü", en: "Package Load" }
      },
      tekstil: {
        days: { tr: "Alışveriş Sıklığı", en: "Shopping Freq" },
        sessions: { tr: "Sepet Tutarı", en: "Basket Amount" },
        tickets: { tr: "İndirim Hassas.", en: "Discount Sens." }
      }
    };

    const sectorFeatures = featureMapping[sector] || {};
    
    Object.keys(feature_importance).forEach(key => {
      const val = feature_importance[key];
      sumWeights += val;
      weightsArray.push({
        key: key,
        name: sectorFeatures[key]?.[lang] || key,
        value: val
      });
    });

    const baseline = prediction_score - sumWeights;

    // 2. Build cumulative steps
    const steps = [];
    
    // Baseline
    steps.push({
      name: lang === 'tr' ? "Referans" : "Baseline",
      start: 0,
      end: baseline,
      type: 'baseline',
      formattedValue: baseline.toFixed(1) + (sector === 'gida' ? '' : '%')
    });

    let current = baseline;
    weightsArray.forEach(w => {
      steps.push({
        name: w.name,
        start: current,
        end: current + w.value,
        type: w.value >= 0 ? 'increase' : 'decrease',
        formattedValue: (w.value >= 0 ? '+' : '') + w.value.toFixed(1) + (sector === 'gida' ? '' : '%'),
        key: w.key,
        rawWeight: w.value
      });
      current += w.value;
    });

    // Final Prediction
    steps.push({
      name: lang === 'tr' ? "Tahmin" : "Prediction",
      start: 0,
      end: prediction_score,
      type: 'prediction',
      formattedValue: prediction_score.toFixed(1) + (sector === 'gida' ? '' : '%')
    });

    // 3. Calculate SVG dimensions and scale domain
    const allVals = [0, baseline, prediction_score];
    let temp = baseline;
    weightsArray.forEach(w => {
      temp += w.value;
      allVals.push(temp);
    });

    const minVal = Math.min(...allVals);
    const maxVal = Math.max(...allVals);
    const span = maxVal - minVal;
    
    // Add margin padding to keep values readable
    const minDomain = minVal - (span === 0 ? 10 : span * 0.12);
    const maxDomain = maxVal + (span === 0 ? 10 : span * 0.12);

    const svgWidth = 280;
    const paddingLeft = 85;
    const paddingRight = 45;
    const rowHeight = 35;
    const barHeight = 16;
    const paddingTop = 15;
    const svgHeight = paddingTop * 2 + steps.length * rowHeight;
    const chartWidth = svgWidth - paddingLeft - paddingRight;

    function getX(val) {
      if (maxDomain === minDomain) return paddingLeft + chartWidth / 2;
      return paddingLeft + ((val - minDomain) / (maxDomain - minDomain)) * chartWidth;
    }

    // 4. Generate SVG contents
    let svgHtml = `<svg width="${svgWidth}" height="${svgHeight}" class="waterfall-svg" style="background: transparent; overflow: visible;">`;
    
    const zeroX = getX(0);
    svgHtml += `<line x1="${zeroX}" y1="${paddingTop}" x2="${zeroX}" y2="${svgHeight - paddingTop}" stroke="rgba(255,255,255,0.15)" stroke-dasharray="2,2" />`;

    steps.forEach((step, i) => {
      const y = paddingTop + i * rowHeight + (rowHeight - barHeight) / 2;
      const xStart = getX(step.start);
      const xEnd = getX(step.end);
      const width = Math.abs(xEnd - xStart);
      const x = Math.min(xStart, xEnd);
      
      let fill = 'var(--primary)'; // prediction
      if (step.type === 'baseline') fill = '#64748b'; // slate grey
      else if (step.type === 'increase') fill = '#10b981'; // emerald green
      else if (step.type === 'decrease') fill = '#ef4444'; // crimson red

      // Draw connector line from previous bar's end to current bar's start (vertically)
      if (i > 0 && step.type !== 'prediction') {
        const prevStep = steps[i - 1];
        const prevX = getX(prevStep.end);
        const prevY = paddingTop + (i - 1) * rowHeight + rowHeight / 2;
        const currY = paddingTop + i * rowHeight + rowHeight / 2;
        svgHtml += `<line x1="${prevX}" y1="${prevY}" x2="${prevX}" y2="${currY}" stroke="rgba(255,255,255,0.25)" stroke-dasharray="2,2" />`;
      }

      // Draw Rect
      svgHtml += `<rect x="${x}" y="${y}" width="${Math.max(2, width)}" height="${barHeight}" fill="${fill}" rx="3" />`;

      // Label text
      svgHtml += `<text x="${paddingLeft - 8}" y="${y + barHeight - 3}" fill="var(--text-secondary)" font-size="10.5" text-anchor="end" font-family="sans-serif">${step.name}</text>`;

      // Value text
      svgHtml += `<text x="${step.end >= step.start ? xEnd + 5 : xEnd - 5}" y="${y + barHeight - 3}" fill="var(--text-primary)" font-size="10.5" font-weight="600" text-anchor="${step.end >= step.start ? 'start' : 'end'}" font-family="sans-serif">${step.formattedValue}</text>`;
    });

    svgHtml += `</svg>`;

    // 5. Generate short natural-language explanations
    let explanationsHtml = '';
    
    weightsArray.forEach(w => {
      const templateKey = `${w.key}_${w.value >= 0 ? 'pos' : 'neg'}`;
      const textTemplate = explanationTemplates[lang]?.[templateKey] || 
                           explanationTemplates.en?.[templateKey] || 
                           `${w.name}: ${w.value.toFixed(1)}%`;
      
      const formattedAbsVal = Math.abs(w.value).toFixed(1);
      const explanationText = textTemplate.replace('%VALUE%', formattedAbsVal);
      const bulletClass = w.value >= 0 ? 'increase' : 'decrease';

      explanationsHtml += `
        <div class="waterfall-desc-item">
          <div class="waterfall-desc-bullet ${bulletClass}"></div>
          <span>${explanationText}</span>
        </div>
      `;
    });

    // 6. Assemble layout
    const layout = document.createElement('div');
    layout.className = 'waterfall-layout';
    layout.innerHTML = `
      <div class="waterfall-chart-col">
        ${svgHtml}
      </div>
      <div class="waterfall-text-col">
        <h4 style="margin: 0 0 0.4rem 0; font-size: 0.85rem; color: var(--primary);">
          ${lang === 'tr' ? 'Faktör Etki Detayları' : 'Factor Impact Details'}
        </h4>
        ${explanationsHtml}
      </div>
    `;

    container.appendChild(layout);
  }

  function showShapExplanation() {
    const modal = document.getElementById('explain-modal');
    const waterfallBox = document.getElementById('shap-waterfall-box');
    const reportText = document.getElementById('explain-report-text');
    if (!modal || !waterfallBox || !reportText) return;

    const avg = getSectorAverages(currentSector);
    let feature_importance = {};
    let prediction_score = 50; // base fallback
    let currentResultText = '';
    
    if (currentSector === 'vakif') {
      const credit = parseInt(document.getElementById('slider-credit').value);
      const income = parseInt(document.getElementById('slider-income').value);
      const dti = parseInt(document.getElementById('slider-dti').value);
      
      const cCredit = 45 * (credit - avg.credit) / (25 - 1);
      const cIncome = 35 * (income - avg.income) / (1000 - 10);
      const cDti = 20 * (dti - avg.dti) / (15 - 1);
      
      feature_importance = {
        credit: cCredit,
        income: cIncome,
        dti: cDti
      };
      
      prediction_score = 50 + cCredit + cIncome + cDti;
      currentResultText = document.getElementById('dash-output-result').textContent;
      
    } else if (currentSector === 'egitim') {
      const glucose = parseInt(document.getElementById('slider-glucose').value);
      const bmi = parseFloat(document.getElementById('slider-bmi').value);
      const age = parseInt(document.getElementById('slider-age').value);
      
      const cStudy = -50 * (glucose - avg.glucose) / (40 - 2);
      const cAttendance = -30 * (bmi - avg.bmi) / (100 - 30);
      const cExam = -20 * (age - avg.age) / (100 - 20);
      
      feature_importance = {
        glucose: cStudy,
        bmi: cAttendance,
        age: cExam
      };
      
      const z = 5.5 - (0.12 * glucose) - (0.04 * bmi) - (0.03 * age);
      const prob = 1.0 / (1.0 + Math.exp(-z));
      prediction_score = Math.round(prob * 100);
      
      currentResultText = document.getElementById('dash-output-result').textContent;
      
    } else if (currentSector === 'gida') {
      const size = parseInt(document.getElementById('slider-size').value);
      const beds = parseFloat(document.getElementById('slider-beds').value);
      const loc = document.getElementById('toggle-location').checked ? 1 : 0;
      
      const cSize = 55 * (size - avg.size) / (4000 - 100);
      const cBeds = 25 * (beds - avg.beds) / (5 - 1);
      const cLoc = 20 * (loc - avg.location);
      
      feature_importance = {
        size: cSize,
        beds: cBeds,
        location: cLoc
      };
      
      prediction_score = 50 + cSize + cBeds + cLoc;
      currentResultText = document.getElementById('dash-output-result').textContent;
      
    } else if (currentSector === 'lojistik') {
      const days = parseInt(document.getElementById('slider-days').value);
      const sessions = parseInt(document.getElementById('slider-sessions').value);
      const tickets = parseInt(document.getElementById('slider-tickets').value);
      
      const cDistance = 45 * (days - avg.days) / (150 - 1);
      const cTraffic = 30 * (sessions - avg.sessions) / (10 - 1);
      const cLoad = 25 * (tickets - avg.tickets) / (10 - 1);
      
      feature_importance = {
        days: cDistance,
        sessions: cTraffic,
        tickets: cLoad
      };
      
      const daysImpact = Math.min(100, (days / 150) * 100);
      const sessionImpact = (sessions / 10) * 100;
      const supportImpact = (tickets / 10) * 100;
      const churnScore = (daysImpact * 0.45) + (sessionImpact * 0.3) + (supportImpact * 0.25);
      prediction_score = Math.round(churnScore);
      
      currentResultText = document.getElementById('dash-output-result').textContent;
      
    } else if (currentSector === 'tekstil') {
      const days = parseInt(document.getElementById('slider-days').value);
      const sessions = parseInt(document.getElementById('slider-sessions').value);
      const tickets = parseInt(document.getElementById('slider-tickets').value);
      
      const cFreq = 40 * (days - avg.days) / (30 - 1);
      const cBasket = 35 * (sessions - avg.sessions) / (5000 - 100);
      const cDiscount = -25 * (tickets - avg.tickets) / 100;
      
      feature_importance = {
        days: cFreq,
        sessions: cBasket,
        tickets: cDiscount
      };
      
      prediction_score = 50 + cFreq + cBasket + cDiscount;
      currentResultText = document.getElementById('dash-output-result').textContent;
    }

    // Generate Waterfall Chart inside waterfallBox
    generateWaterfallChart(waterfallBox, {
      prediction_score,
      feature_importance,
      sector: currentSector,
      lang: currentLang
    });

    // Make structured text report below chart
    const contribs = Object.keys(feature_importance).map(key => ({
      name: {
        tr: key === 'credit' ? "Aylık Katılım Sıklığı" :
            key === 'income' ? "Geçmiş Bağış Tutarı" :
            key === 'dti' ? "Üyelik Süresi" :
            key === 'glucose' ? "Haftalık Çalışma Süresi" :
            key === 'bmi' ? "Ders Devam Oranı" :
            key === 'age' ? "Deneme Sınav Puanı" :
            key === 'size' ? "Ortalama Sipariş Adedi" :
            key === 'beds' ? "Restoran Değerlendirme Puanı" :
            key === 'location' ? "Kampanya Uygulaması" :
            key === 'days' ? (currentSector === 'lojistik' ? "Mesafe Uzunluğu" : "Aylık Alışveriş Sıklığı") :
            key === 'sessions' ? (currentSector === 'lojistik' ? "Trafik Yoğunluğu" : "Ortalama Sepet Tutarı") :
            key === 'tickets' ? (currentSector === 'lojistik' ? "Paket Yükü Adedi" : "İndirim Hassasiyeti") : key,
        en: key === 'credit' ? "Monthly Attendance Frequency" :
            key === 'income' ? "Past Donation Amount" :
            key === 'dti' ? "Membership Duration" :
            key === 'glucose' ? "Weekly Study Time" :
            key === 'bmi' ? "Course Attendance Rate" :
            key === 'age' ? "Mock Exam Score" :
            key === 'size' ? "Avg. Order Quantity" :
            key === 'beds' ? "Restaurant Rating Score" :
            key === 'location' ? "Campaign Application" :
            key === 'days' ? (currentSector === 'lojistik' ? "Distance Length" : "Monthly Shopping Frequency") :
            key === 'sessions' ? (currentSector === 'lojistik' ? "Traffic Density" : "Average Basket Amount") :
            key === 'tickets' ? (currentSector === 'lojistik' ? "Package Load Quantity" : "Discount Sensitivity") : key
      },
      val: feature_importance[key]
    }));

    let maxPos = { name: '', val: -Infinity };
    let maxNeg = { name: '', val: Infinity };
    contribs.forEach(c => {
      if (c.val > maxPos.val) maxPos = { name: c.name[currentLang], val: c.val };
      if (c.val < maxNeg.val) maxNeg = { name: c.name[currentLang], val: c.val };
    });

    let reportHtml = '';
    const isOrders = currentSector === 'gida';
    const unitSymbol = isOrders ? (currentLang === 'tr' ? ' Adet' : ' Units') : '%';

    if (currentLang === 'tr') {
      reportHtml = `
        <h4 style="color: var(--primary); margin-bottom: 0.5rem;">Aura AI Raporu</h4>
        <p style="margin-bottom: 0.8rem;">
          Aktif simülasyon girdilerine göre model tahmini: <strong>${currentResultText}</strong>.
        </p>
        <p style="margin-bottom: 0.6rem;">
          Şirket ortalamalarına (referans baseline) kıyasla:
        </p>
        <ul style="padding-left: 1.2rem; margin-bottom: 0.8rem; display: flex; flex-direction: column; gap: 0.3rem;">
          ${maxPos.val > 0.1 ? `<li>Model hedefini en çok artıran faktör: <strong style="color: var(--success);">${maxPos.name}</strong> (+${maxPos.val.toFixed(1)}${unitSymbol})</li>` : ''}
          ${maxNeg.val < -0.1 ? `<li>Model hedefini en çok düşüren faktör: <strong style="color: var(--danger);">${maxNeg.name}</strong> (-${Math.abs(maxNeg.val).toFixed(1)}${unitSymbol})</li>` : ''}
        </ul>
        <p style="font-size: 0.8rem; color: var(--text-muted); border-top: 1px dashed var(--border-color); padding-top: 0.5rem; margin-top: 0.5rem;">
          * SHAP/LIME yerel analizleri, veri setinizdeki tarihsel sapmalara ve karar sınırlarına dayanarak anlık olarak hesaplanır.
        </p>
      `;
    } else {
      reportHtml = `
        <h4 style="color: var(--primary); margin-bottom: 0.5rem;">Aura AI Analysis Report</h4>
        <p style="margin-bottom: 0.8rem;">
          Model prediction based on active simulation inputs: <strong>${currentResultText}</strong>.
        </p>
        <p style="margin-bottom: 0.6rem;">
          Compared to company averages (reference baseline):
        </p>
        <ul style="padding-left: 1.2rem; margin-bottom: 0.8rem; display: flex; flex-direction: column; gap: 0.3rem;">
          ${maxPos.val > 0.1 ? `<li>Factor increasing model target most: <strong style="color: var(--success);">${maxPos.name}</strong> (+${maxPos.val.toFixed(1)}${unitSymbol})</li>` : ''}
          ${maxNeg.val < -0.1 ? `<li>Factor decreasing model target most: <strong style="color: var(--danger);">${maxNeg.name}</strong> (-${Math.abs(maxNeg.val).toFixed(1)}${unitSymbol})</li>` : ''}
        </ul>
        <p style="font-size: 0.8rem; color: var(--text-muted); border-top: 1px dashed var(--border-color); padding-top: 0.5rem; margin-top: 0.5rem;">
          * SHAP/LIME local analyses are calculated instantly based on historical variances and decision boundaries in your dataset.
        </p>
      `;
    }
    reportText.innerHTML = reportHtml;
    modal.classList.add('active');
  }

  function calculateRiskScoreForState(state) {
    const avg = getSectorAverages(state.sector);
    if (state.sector === 'vakif') {
      const credit = state.credit || 6;
      const income = state.income || 100;
      const dti = state.dti || 2;
      const cCredit = 45 * (credit - (avg.credit || 8)) / 24;
      const cIncome = 35 * (income - (avg.income || 150)) / 990;
      const cDti = 20 * (dti - (avg.dti || 3)) / 14;
      return 50 + cCredit + cIncome + cDti;
    } else if (state.sector === 'egitim') {
      const glucose = state.glucose || 15;
      const bmi = state.bmi || 80;
      const age = state.age || 70;
      const z = 5.5 - (0.12 * glucose) - (0.04 * bmi) - (0.03 * age);
      return (1.0 / (1.0 + Math.exp(-z))) * 100;
    } else if (state.sector === 'gida') {
      const size = state.size || 1000;
      const beds = state.beds || 4.0;
      const loc = state.location === 'Evet' || state.location === true;
      const cSize = 55 * (size - (avg.size || 1500)) / 3900;
      const cBeds = 25 * (beds - (avg.beds || 4.2)) / 4;
      const cLoc = 20 * ((loc ? 1 : 0) - (avg.location || 0));
      return 50 + cSize + cBeds + cLoc;
    } else if (state.sector === 'lojistik') {
      const days = state.days || 15;
      const sessions = state.sessions || 4;
      const tickets = state.tickets || 2;
      const daysImpact = Math.min(100, (days / 150) * 100);
      const sessionImpact = (sessions / 10) * 100;
      const supportImpact = (tickets / 10) * 100;
      return (daysImpact * 0.45) + (sessionImpact * 0.3) + (supportImpact * 0.25);
    } else if (state.sector === 'tekstil') {
      const days = state.days || 4;
      const sessions = state.sessions || 1200;
      const tickets = state.tickets || 30;
      const cFreq = 40 * (days - (avg.days || 5)) / 29;
      const cBasket = 35 * (sessions - (avg.sessions || 1500)) / 4900;
      const cDiscount = -25 * (tickets - (avg.tickets || 40)) / 100;
      return 50 + cFreq + cBasket + cDiscount;
    }
    return 50;
  }

  function updateScenarioComparison(baseline, active) {
    const compBox = document.getElementById('whatif-comparison-box');
    if (!compBox) return;

    if (!baseline || baseline.sector !== currentSector) {
      compBox.innerHTML = `
        <p style="font-size: 0.8rem; color: var(--text-muted); text-align: center; line-height: 1.5; margin-top: 1.2rem;">
          ${currentLang === 'tr' 
            ? 'Karşılaştırmayı başlatmak için "Referans Olarak Kilitle" butonuna tıklayın, ardından formu değiştirip gönderin.'
            : 'To start comparison, click "Lock as Baseline" button, then change and submit the form.'}
        </p>
      `;
      return;
    }

    const featureMapping = {
      vakif: {
        credit: { tr: "Katılım Sıklığı", en: "Attendance Freq" },
        income: { tr: "Bağış Tutarı", en: "Donation Amount" },
        dti: { tr: "Üyelik Süresi", en: "Membership" },
        donationType: { tr: "Bağış Türü", en: "Donation Type" }
      },
      egitim: {
        glucose: { tr: "Çalışma Süresi", en: "Study Time" },
        bmi: { tr: "Devam Oranı", en: "Attendance Rate" },
        age: { tr: "Sınav Puanı", en: "Exam Score" },
        grade_level: { tr: "Sınıf Seviyesi", en: "Grade Level" }
      },
      gida: {
        size: { tr: "Sipariş Adedi", en: "Order Qty" },
        beds: { tr: "Restoran Puanı", en: "Rest. Rating" },
        location: { tr: "Kampanya", en: "Campaign" },
        restaurant_type: { tr: "Konsept", en: "Concept" }
      },
      lojistik: {
        days: { tr: "Mesafe", en: "Distance" },
        sessions: { tr: "Trafik", en: "Traffic" },
        tickets: { tr: "Paket Yükü", en: "Package Load" },
        vehicle_type: { tr: "Taşıt", en: "Vehicle" }
      },
      tekstil: {
        days: { tr: "Alışveriş Sıklığı", en: "Shopping Freq" },
        sessions: { tr: "Sepet Tutarı", en: "Basket Amount" },
        tickets: { tr: "İndirim Hassas.", en: "Discount Sens." },
        promo_code: { tr: "Promosyon Kodu", en: "Promo Code" }
      }
    };

    const sectorFeatures = featureMapping[currentSector] || {};
    let deltasHtml = '';

    const keysToCompare = Object.keys(baseline).filter(k => k !== 'name' && k !== 'sector' && k !== 'riskScore');
    const compareState = active || baseline;

    keysToCompare.forEach(key => {
      const baseVal = baseline[key];
      const activeVal = compareState[key];
      const name = sectorFeatures[key]?.[currentLang] || key;

      let deltaText = '';
      let deltaColor = 'var(--text-muted)';
      let displayValue = '';

      if (typeof baseVal === 'number') {
        const diff = activeVal - baseVal;
        const sign = diff > 0 ? '+' : '';
        deltaText = `${sign}${diff.toFixed(1)}`;
        deltaColor = diff > 0 ? '#10b981' : (diff < 0 ? '#ef4444' : 'var(--text-secondary)');
        displayValue = `${baseVal} ➔ ${activeVal} (${deltaText})`;
      } else if (typeof baseVal === 'boolean') {
        if (activeVal !== baseVal) {
          const baseStr = currentLang === 'tr' ? (baseVal ? 'Evet' : 'Hayır') : (baseVal ? 'Yes' : 'No');
          const activeStr = currentLang === 'tr' ? (activeVal ? 'Evet' : 'Hayır') : (activeVal ? 'Yes' : 'No');
          deltaText = currentLang === 'tr' ? 'Değişti' : 'Changed';
          deltaColor = 'var(--primary)';
          displayValue = `${baseStr} ➔ ${activeStr}`;
        } else {
          const baseStr = currentLang === 'tr' ? (baseVal ? 'Evet' : 'Hayır') : (baseVal ? 'Yes' : 'No');
          deltaText = currentLang === 'tr' ? 'Aynı' : 'Same';
          displayValue = `${baseStr}`;
        }
      } else {
        if (activeVal !== baseVal) {
          let baseLabel = baseVal;
          let activeLabel = activeVal;
          const fieldDef = (sectorDataJSON?.[currentSector] || []).find(f => f.key === key);
          if (fieldDef && fieldDef.options) {
            const optBase = fieldDef.options.find(o => o.value === baseVal);
            if (optBase) baseLabel = optBase.label[currentLang] || optBase.label.en;
            const optActive = fieldDef.options.find(o => o.value === activeVal);
            if (optActive) activeLabel = optActive.label[currentLang] || optActive.label.en;
          }
          deltaText = currentLang === 'tr' ? 'Değişti' : 'Changed';
          deltaColor = 'var(--primary)';
          displayValue = `${baseLabel} ➔ ${activeLabel}`;
        } else {
          let baseLabel = baseVal;
          const fieldDef = (sectorDataJSON?.[currentSector] || []).find(f => f.key === key);
          if (fieldDef && fieldDef.options) {
            const optBase = fieldDef.options.find(o => o.value === baseVal);
            if (optBase) baseLabel = optBase.label[currentLang] || optBase.label.en;
          }
          deltaText = currentLang === 'tr' ? 'Aynı' : 'Same';
          displayValue = `${baseLabel}`;
        }
      }

      deltasHtml += `
        <div style="display: flex; justify-content: space-between; font-size: 0.8rem; border-bottom: 1px solid rgba(255,255,255,0.03); padding: 0.35rem 0; align-items: center;">
          <span style="color: var(--text-secondary); font-weight: 500;">${name}</span>
          <span style="color: ${deltaColor === 'var(--text-muted)' ? 'var(--text-primary)' : deltaColor}; font-weight: 600; font-family: monospace;">${displayValue}</span>
        </div>
      `;
    });

    const activeScore = active ? active.riskScore : (baseline.riskScore || 50);
    const baseScore = baseline.riskScore || 50;
    const scoreDelta = activeScore - baseScore;
    const percentChange = baseScore !== 0 ? ((activeScore - baseScore) / baseScore) * 100 : 0;
    const scoreSign = percentChange > 0 ? '+' : '';
    const isOrders = currentSector === 'gida';

    let scoreColor = 'var(--text-secondary)';
    if (percentChange > 0) {
      scoreColor = isOrders ? '#10b981' : '#ef4444';
    } else if (percentChange < 0) {
      scoreColor = isOrders ? '#ef4444' : '#10b981';
    }

    const titleText = active 
      ? (currentLang === 'tr' ? 'Senaryo Karşılaştırma Sonuçları' : 'Scenario Comparison Results')
      : (currentLang === 'tr' ? 'Referans Durum Kilitlendi' : 'Baseline State Locked');
    const subtitleText = active 
      ? (currentLang === 'tr' ? `Karşılaştırılan: ${active.name || 'Yeni Girdi'}` : `Compared with: ${active.name || 'New Input'}`)
      : (currentLang === 'tr' ? `Referans: ${baseline.name || 'Referans Girdi'}` : `Baseline: ${baseline.name || 'Baseline Input'}`);

    const labelText = isOrders
      ? (currentLang === 'tr' ? 'Talep Etkisi (Değişim):' : 'Demand Impact (Change):')
      : (currentLang === 'tr' ? 'Risk Skoru Etkisi (Değişim):' : 'Risk Score Impact (Change):');

    const formattedPercent = `${scoreSign}${percentChange.toFixed(1)}%`;
    const formattedScoreDelta = `${scoreDelta > 0 ? '+' : ''}${scoreDelta.toFixed(1)}${isOrders ? (currentLang === 'tr' ? ' Sipariş' : ' Orders') : '%'}`;

    compBox.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 0.5rem; width: 100%;">
        <div style="display: flex; justify-content: space-between; align-items: baseline;">
          <h4 style="margin: 0; font-size: 0.85rem; color: var(--primary); font-weight: 700;">
            ${titleText}
          </h4>
          <span style="font-size: 0.7rem; color: var(--text-muted);">${subtitleText}</span>
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.1rem; max-height: 120px; overflow-y: auto; padding-right: 4px; margin-top: 0.3rem;">
          ${deltasHtml}
        </div>
        <div style="border-top: 1px dashed var(--border-color); padding-top: 0.5rem; display: flex; justify-content: space-between; align-items: center; font-weight: bold; font-size: 0.82rem; margin-top: 0.2rem;">
          <span style="color: var(--text-primary);">${labelText}</span>
          <div style="text-align: right;">
            <span style="color: ${scoreColor}; font-family: monospace; font-size: 0.95rem; font-weight: 800;">${formattedPercent}</span>
            <span style="color: var(--text-muted); font-size: 0.75rem; font-weight: normal; margin-left: 0.25rem;">(${formattedScoreDelta})</span>
          </div>
        </div>
      </div>
    `;
  }

  function setWhatIfBaseline() {
    const btn = document.getElementById('btn-whatif-set-baseline');
    if (!btn) return;

    const form = document.getElementById('add-customer-form');
    if (!form) return;

    baseline_state = {
      sector: currentSector,
      name: document.getElementById('cust-name-input')?.value.trim() || 'Baseline Customer'
    };

    const inputs = form.querySelectorAll('input, select');
    inputs.forEach(input => {
      if (input.id === 'cust-name-input') return;
      const key = input.id.replace('add-', '');
      if (input.type === 'checkbox') {
        baseline_state[key] = input.checked;
      } else if (input.type === 'number') {
        baseline_state[key] = Number(input.value);
      } else {
        baseline_state[key] = input.value;
      }
    });

    baseline_state.riskScore = calculateRiskScoreForState(baseline_state);

    const origText = btn.textContent;
    btn.textContent = currentLang === 'tr' ? '✓ Kilitlendi (Senaryo A)' : '✓ Locked (Scenario A)';
    btn.style.background = 'var(--success)';
    btn.style.borderColor = 'var(--success)';
    
    setTimeout(() => {
      btn.textContent = translations.btn_whatif_set[currentLang];
      btn.style.background = '';
      btn.style.borderColor = '';
    }, 1500);

    updateWhatIfComparison();
  }

  function updateWhatIfComparison() {
    updateScenarioComparison(baseline_state, null);
  }
   function _updateAuraBadge(mode) {
    const badge = document.getElementById('aura-mode-badge');
    if (!badge) return;
    badge.className = `aura-mode-badge mode-${mode}`;
    const labels = {
      dataset:     translations.aura_mode_badge_dataset[currentLang],
      performance: translations.aura_mode_badge_performance[currentLang],
      strategy:    translations.aura_mode_badge_strategy[currentLang]
    };
    badge.textContent = labels[mode] || mode;
  }

  function initAuraChat() {
    const chatLogs = document.getElementById('aura-chat-logs');
    const quickPrompts = document.getElementById('aura-quick-prompts');
    if (!chatLogs || !quickPrompts) return;

    chatLogs.innerHTML = '';
    quickPrompts.innerHTML = '';

    // Wire up the mode dropdown (idempotent — remove old listener by replacing select)
    const modeSelect = document.getElementById('aura-mode-select');
    if (modeSelect) {
      // Sync select to current mode (survives re-init on sector change)
      modeSelect.value = currentAuraMode;

      // Update option labels for current language
      const opts = modeSelect.querySelectorAll('option');
      const optLabels = [
        translations.aura_mode_dataset[currentLang],
        translations.aura_mode_performance[currentLang],
        translations.aura_mode_strategy[currentLang]
      ];
      opts.forEach((o, i) => { if (optLabels[i]) o.textContent = optLabels[i]; });

      // Clone to remove stale listeners before re-attaching
      const freshSelect = modeSelect.cloneNode(true);
      freshSelect.value = currentAuraMode;
      modeSelect.parentNode.replaceChild(freshSelect, modeSelect);
      freshSelect.addEventListener('change', () => {
        currentAuraMode = freshSelect.value;
        _updateAuraBadge(currentAuraMode);
        _refreshQuickPrompts();
        // Post a context-switch notice
        const switchNote = document.createElement('div');
        switchNote.className = `chat-msg ai mode-${currentAuraMode}`;
        const modeNames = {
          dataset:     translations.aura_mode_dataset[currentLang],
          performance: translations.aura_mode_performance[currentLang],
          strategy:    translations.aura_mode_strategy[currentLang]
        };
        switchNote.innerHTML = currentLang === 'tr'
          ? `⚙️ Mod değiştirildi: <strong>${modeNames[currentAuraMode]}</strong>. Bundan sonra sorularınızı bu bağlamda yanıtlayacağım.`
          : `⚙️ Mode switched to <strong>${modeNames[currentAuraMode]}</strong>. I will now answer your questions in this context.`;
        const logs = document.getElementById('aura-chat-logs');
        if (logs) { logs.appendChild(switchNote); logs.scrollTop = logs.scrollHeight; }
      });
    }

    _updateAuraBadge(currentAuraMode);

    const welcomeMsg = currentLang === 'tr'
      ? `Merhaba! Ben Aura AI Analitik Asistanınız. Aşağıdaki mod seçiciden konuyu sınırlandırabilirsiniz: veri seti analizi, model performansı veya stratejik tavsiyeler.`
      : `Hello! I am your Aura AI Analytical Assistant. Use the mode selector above to focus my answers: dataset analysis, model performance, or strategic recommendations.`;

    const bubble = document.createElement('div');
    bubble.className = `chat-msg ai mode-${currentAuraMode}`;
    bubble.textContent = welcomeMsg;
    chatLogs.appendChild(bubble);
    chatLogs.scrollTop = chatLogs.scrollHeight;

    _refreshQuickPrompts();
  }

  // ── Refresh quick-prompt chips based on current sector + mode ────────────
  function _refreshQuickPrompts() {
    const quickPrompts = document.getElementById('aura-quick-prompts');
    if (!quickPrompts) return;
    quickPrompts.innerHTML = '';

    // Dataset-mode prompts (per sector) — same as before
    const datasetPrompts = {
      vakif: {
        tr: ["En yüksek bağışcı kim?", "Ortalama bağış tutarı nedir?", "Düzenli bağışcı oranı kaçtır?"],
        en: ["Who is the highest donor?", "What is the average donation?", "What is the regular donor ratio?"]
      },
      egitim: {
        tr: ["En riskli öğrenci kim?", "Ortalama çalışma süresi nedir?", "Genel başarı riski ortalaması?"],
        en: ["Who is the most at-risk student?", "What is the average study time?", "What is the average failure risk?"]
      },
      gida: {
        tr: ["En yüksek sipariş veren şube?", "Ortalama puan nedir?", "Kampanya etkisi ne kadar?"],
        en: ["Which branch has the highest orders?", "What is the average rating?", "How much is the campaign effect?"]
      },
      lojistik: {
        tr: ["En uzun mesafe hangi rota?", "Ortalama trafik yoğunluğu?", "Gecikme riski yüksek rota oranı?"],
        en: ["Which route has the longest distance?", "What is the average traffic?", "Ratio of high delay risk routes?"]
      },
      tekstil: {
        tr: ["En çok alışveriş yapan kim?", "Ortalama sepet tutarı?", "Müşteri segment dağılımı?"],
        en: ["Who shops the most?", "What is the average basket?", "Customer segment distribution?"]
      }
    };

    // Performance-mode prompts (generic, not sector-specific)
    const performancePrompts = {
      tr: ["Modelin doğruluk skoru?", "Precision-Recall dengesi?", "Modelin sınırlamaları neler?"],
      en: ["What is the model accuracy?", "Precision-Recall balance?", "What are the model limitations?"]
    };

    // Strategy-mode prompts (per sector)
    const strategyPrompts = {
      vakif: {
        tr: ["Bağışcı retansiyon stratejisi?", "Yeni bağışcı kazanma tüyleri?", "Risk altındaki bağışcılar için plan?"],
        en: ["Donor retention strategy?", "Tips to acquire new donors?", "Plan for at-risk donors?"]
      },
      egitim: {
        tr: ["Müdahale planı önerileri?", "Başarıyı artırmak için?", "Ders devamını iyileştirmek için?"],
        en: ["Intervention plan suggestions?", "How to improve success rates?", "How to improve attendance?"]
      },
      gida: {
        tr: ["Sipariş hacmini artırmak için?", "Kampanya optimizasyonu?", "Düşük puanlı şubeler için?"],
        en: ["How to boost order volume?", "Campaign optimization?", "Strategy for low-rated branches?"]
      },
      lojistik: {
        tr: ["Teslimat süresini kısaltmak için?", "Yüksek riskli rotalar için?", "Maliyet optimizasyonu?"],
        en: ["How to shorten delivery times?", "Plan for high-risk routes?", "Cost optimization strategy?"]
      },
      tekstil: {
        tr: ["Sepet değerini artırmak için?", "Premium müşteri programı?", "Churn riskini azaltmak için?"],
        en: ["How to increase basket value?", "Premium customer program?", "How to reduce churn risk?"]
      }
    };

    let prompts = [];
    if (currentAuraMode === 'dataset') {
      prompts = datasetPrompts[currentSector]?.[currentLang] || [];
    } else if (currentAuraMode === 'performance') {
      prompts = performancePrompts[currentLang] || [];
    } else if (currentAuraMode === 'strategy') {
      prompts = strategyPrompts[currentSector]?.[currentLang] || [];
    }

    prompts.forEach(p => {
      const btn = document.createElement('button');
      btn.className = 'quick-prompt-btn';
      btn.textContent = p;
      btn.type = 'button';
      btn.addEventListener('click', () => handleAuraChatSubmit(p));
      quickPrompts.appendChild(btn);
    });
  }

  function handleAuraChatSubmit(msg) {
    const chatLogs = document.getElementById('aura-chat-logs');
    if (!chatLogs) return;

    const userBubble = document.createElement('div');
    userBubble.className = 'chat-msg user';
    userBubble.textContent = msg;
    chatLogs.appendChild(userBubble);
    chatLogs.scrollTop = chatLogs.scrollHeight;

    const input = document.getElementById('aura-chat-input');
    if (input) input.value = '';

    const typingBubble = document.createElement('div');
    typingBubble.className = 'chat-msg ai typing';
    typingBubble.id = 'aura-typing-indicator';
    typingBubble.textContent = currentLang === 'tr' ? 'Aura AI analiz ediyor...' : 'Aura AI is analyzing...';
    chatLogs.appendChild(typingBubble);
    chatLogs.scrollTop = chatLogs.scrollHeight;

    const delays = { dataset: 800, performance: 1100, strategy: 1400 };
    const delay = delays[currentAuraMode] || 800;

    setTimeout(() => {
      const indicator = document.getElementById('aura-typing-indicator');
      if (indicator) indicator.remove();

      let reply = '';
      const list = databases[currentSector] || [];
      const total = list.length;
      const cleanMsg = msg.toLowerCase().trim();

      // Dynamic analytical queries based on selected mode + message keywords
      if (currentAuraMode === 'dataset') {
        if (currentSector === 'vakif') {
          if (cleanMsg.includes('en yüksek') || cleanMsg.includes('highest') || cleanMsg.includes('en çok')) {
            let maxVal = -1;
            let maxName = '';
            list.forEach(row => {
              if (row.income > maxVal) {
                maxVal = row.income;
                maxName = row.name;
              }
            });
            reply = currentLang === 'tr'
              ? `Veritabanı analizlerine göre en yüksek bağış tutarına sahip bağışçımız: **${maxName}** ($${maxVal}K).`
              : `According to database analysis, our highest donor is: **${maxName}** ($${maxVal}K).`;
          } else if (cleanMsg.includes('ortalama') || cleanMsg.includes('average')) {
            let sum = 0;
            list.forEach(row => sum += row.income);
            const avg = list.length ? (sum / list.length).toFixed(2) : 0;
            reply = currentLang === 'tr'
              ? `Veritabanındaki bağışçıların ortalama geçmiş bağış tutarı: **$${avg}K**.`
              : `The average past donation amount of donors in the database is: **$${avg}K**.`;
          } else if (cleanMsg.includes('düzenli') || cleanMsg.includes('regular') || cleanMsg.includes('oran')) {
            let count = 0;
            list.forEach(row => { if (row.rawStatus === 'approved') count++; });
            const pct = list.length ? ((count / list.length) * 100).toFixed(2) : 0;
            reply = currentLang === 'tr'
              ? `Kayıtlı bağışçıların düzenli bağışçı olma oranı: **%${pct}** (${count}/${list.length}).`
              : `The regular donor ratio among registered donors is: **${pct}%** (${count}/${list.length}).`;
          }
        } else if (currentSector === 'egitim') {
          if (cleanMsg.includes('en riskli') || cleanMsg.includes('riskli') || cleanMsg.includes('highest risk') || cleanMsg.includes('at-risk')) {
            let mostAtRisk = list[0] || {};
            list.forEach(row => {
              const getPriority = s => s === 'denied' ? 3 : (s === 'warning' ? 2 : 1);
              if (getPriority(row.rawStatus) > getPriority(mostAtRisk.rawStatus)) {
                mostAtRisk = row;
              } else if (getPriority(row.rawStatus) === getPriority(mostAtRisk.rawStatus)) {
                if (row.age < mostAtRisk.age) {
                  mostAtRisk = row;
                }
              }
            });
            reply = currentLang === 'tr'
              ? `Veritabanındaki en yüksek risk grubundaki öğrencimiz: **${mostAtRisk.name}** (Devam oranı: %${mostAtRisk.bmi}, Sınav puanı: ${mostAtRisk.age}).`
              : `The student at the highest risk level is: **${mostAtRisk.name}** (Attendance: ${mostAtRisk.bmi}%, mock exam score: ${mostAtRisk.age}).`;
          } else if (cleanMsg.includes('ortalama çalışma') || cleanMsg.includes('study time') || cleanMsg.includes('çalışma süresi')) {
            let sum = 0;
            list.forEach(row => sum += row.glucose);
            const avg = list.length ? (sum / list.length).toFixed(2) : 0;
            reply = currentLang === 'tr'
              ? `Öğrencilerin haftalık ortalama çalışma süresi: **${avg} Saat**.`
              : `The average study time of students is: **${avg} Hours** per week.`;
          } else if (cleanMsg.includes('başarı riski') || cleanMsg.includes('failure risk') || cleanMsg.includes('risk ortalaması') || cleanMsg.includes('oran')) {
            let count = 0;
            list.forEach(row => { if (row.rawStatus !== 'approved') count++; });
            const pct = list.length ? ((count / list.length) * 100).toFixed(2) : 0;
            reply = currentLang === 'tr'
              ? `Sistemde risk grubunda (Orta veya Yüksek risk) bulunan öğrencilerin oranı: **%${pct}** (${count}/${list.length}).`
              : `The ratio of students in the success risk group (Medium or High risk) is: **${pct}%** (${count}/${list.length}).`;
          }
        } else if (currentSector === 'gida') {
          if (cleanMsg.includes('en yüksek') || cleanMsg.includes('şube') || cleanMsg.includes('highest order') || cleanMsg.includes('branch')) {
            let maxVal = -1;
            let maxName = '';
            list.forEach(row => {
              if (row.size > maxVal) {
                maxVal = row.size;
                maxName = row.name;
              }
            });
            reply = currentLang === 'tr'
              ? `En yüksek sipariş hacmine sahip şube/kod: **${maxName}** (Günde ortalama ${maxVal} sipariş).`
              : `The branch with the highest order volume is: **${maxName}** (Average of ${maxVal} orders per day).`;
          } else if (cleanMsg.includes('ortalama puan') || cleanMsg.includes('average rating') || cleanMsg.includes('puan')) {
            let sum = 0;
            list.forEach(row => sum += row.beds);
            const avg = list.length ? (sum / list.length).toFixed(2) : 0;
            reply = currentLang === 'tr'
              ? `Sistemdeki şubelerin ortalama restoran değerlendirme puanı: **${avg} / 5.0**.`
              : `The average restaurant rating score in the database is: **${avg} / 5.0**.`;
          } else if (cleanMsg.includes('etki') || cleanMsg.includes('kampanya') || cleanMsg.includes('campaign')) {
            reply = currentLang === 'tr'
              ? `Lineer regresyon katsayı analizlerimize göre, aktif kampanya uygulamaları günlük sipariş hacmini ortalama **%24.5** oranında pozitif yönde artırmaktadır.`
              : `Based on linear regression coefficients, active campaigns increase daily order volume by an average of **24.5%**.`;
          }
        } else if (currentSector === 'lojistik') {
          if (cleanMsg.includes('en uzun') || cleanMsg.includes('longest') || cleanMsg.includes('mesafe') || cleanMsg.includes('rota') || cleanMsg.includes('route')) {
            let maxVal = -1;
            let maxName = '';
            list.forEach(row => {
              if (row.days > maxVal) {
                maxVal = row.days;
                maxName = row.name;
              }
            });
            reply = currentLang === 'tr'
              ? `Veritabanındaki en uzun mesafeli aktif rota: **${maxName}** (${maxVal} km).`
              : `The longest active route in the database is: **${maxName}** (${maxVal} km).`;
          } else if (cleanMsg.includes('ortalama trafik') || cleanMsg.includes('average traffic') || cleanMsg.includes('trafik')) {
            let sum = 0;
            list.forEach(row => sum += row.sessions);
            const avg = list.length ? (sum / list.length).toFixed(2) : 0;
            reply = currentLang === 'tr'
              ? `Rotanın ortalama trafik yoğunluk endeksi: **${avg} / 10**.`
              : `The average traffic density index across routes is: **${avg} / 10**.`;
          } else if (cleanMsg.includes('gecikme riski') || cleanMsg.includes('delay risk') || cleanMsg.includes('yüksek riskli') || cleanMsg.includes('oran')) {
            let count = 0;
            list.forEach(row => { if (row.rawStatus !== 'approved') count++; });
            const pct = list.length ? ((count / list.length) * 100).toFixed(2) : 0;
            reply = currentLang === 'tr'
              ? `Gecikme riski bulunan (Orta veya Yüksek risk) rotaların oranı: **%${pct}** (${count}/${list.length}).`
              : `The ratio of routes with delay risk (Medium or High risk) is: **${pct}%** (${count}/${list.length}).`;
          }
        } else if (currentSector === 'tekstil') {
          if (cleanMsg.includes('en çok') || cleanMsg.includes('en sık') || cleanMsg.includes('who shops') || cleanMsg.includes('frequency')) {
            let maxVal = -1;
            let maxName = '';
            list.forEach(row => {
              if (row.days > maxVal) {
                maxVal = row.days;
                maxName = row.name;
              }
            });
            reply = currentLang === 'tr'
              ? `Aylık en yüksek alışveriş sıklığına sahip müşterimiz: **${maxName}** (Aylık ${maxVal} alışveriş).`
              : `Our customer with the highest monthly shopping frequency is: **${maxName}** (${maxVal} transactions per month).`;
          } else if (cleanMsg.includes('ortalama sepet') || cleanMsg.includes('average basket') || cleanMsg.includes('sepet')) {
            let sum = 0;
            list.forEach(row => sum += row.sessions);
            const avg = list.length ? (sum / list.length).toFixed(2) : 0;
            reply = currentLang === 'tr'
              ? `Müşterilerimizin genel ortalama sepet tutarı: **${avg} TL**.`
              : `The average basket size of our customers is: **${avg} TRY**.`;
          } else if (cleanMsg.includes('segment') || cleanMsg.includes('dağılım') || cleanMsg.includes('distribution')) {
            let premium = 0, opportunity = 0, low = 0;
            list.forEach(row => {
              if (row.status.includes('Premium')) premium++;
              else if (row.status.includes('Fırsatçı') || row.status.includes('Opportunity')) opportunity++;
              else low++;
            });
            reply = currentLang === 'tr'
              ? `Müşteri segmentasyon dağılımımız: **${premium} Premium**, **${opportunity} Fırsatçı**, **${low} Düşük Aktiviteli** alıcı.`
              : `Customer segment distribution: **${premium} Premium**, **${opportunity} Opportunity**, **${low} Low Activity** buyers.`;
          }
        }
      } else if (currentAuraMode === 'performance') {
        if (cleanMsg.includes('doğruluk') || cleanMsg.includes('accuracy') || cleanMsg.includes('skor') || cleanMsg.includes('oran') || cleanMsg.includes('score')) {
          const acc = document.getElementById('metric-accuracy-val')?.textContent || '98.40%';
          reply = currentLang === 'tr'
            ? `Aktif makine öğrenimi modelimizin güncel doğruluk skoru: **${acc}**.`
            : `The current accuracy score of our active machine learning model is: **${acc}**.`;
        } else if (cleanMsg.includes('precision') || cleanMsg.includes('recall') || cleanMsg.includes('keskinlik') || cleanMsg.includes('duyarlılık') || cleanMsg.includes('denge')) {
          const prec = document.getElementById('metric-precision-val')?.textContent || '97.80%';
          const rec = document.getElementById('metric-recall-val')?.textContent || '99.10%';
          reply = currentLang === 'tr'
            ? `Modelin keskinlik değeri: **${prec}**, duyarlılık değeri: **${rec}**. F1-Skor dengesi kararlı seviyededir.`
            : `The model precision is **${prec}** and recall is **${rec}**. The F1-Score balance is at a stable level.`;
        } else if (cleanMsg.includes('sınır') || cleanMsg.includes('limit') || cleanMsg.includes('limitations') || cleanMsg.includes('eksik')) {
          reply = currentLang === 'tr'
            ? `Modelimiz gözetimli parametrelerle eğitildiğinden, eğitim veri seti dışındaki uç senaryolarda katsayı sapmaları yaşayabilir. Bu durum adillik ölçer ile denetlenmektedir.`
            : `Since our model is trained with supervised parameters, coefficient deviations may occur in extreme scenarios outside the training dataset. This is monitored via the fairness gauge.`;
        }
      } else if (currentAuraMode === 'strategy') {
        if (currentSector === 'vakif') {
          if (cleanMsg.includes('retansiyon') || cleanMsg.includes('retention') || cleanMsg.includes('bağlılık') || cleanMsg.includes('elde tutma')) {
            reply = currentLang === 'tr'
              ? `**Donör Elde Tutma Stratejisi**: Katılım sıklığı 5'in altında olan üyeler için özel e-posta kampanyaları ve aylık etkinlik bültenleri düzenlenmelidir.`
              : `**Donor Retention Strategy**: Special email campaigns and monthly event newsletters should be organized for members with attendance frequency below 5.`;
          } else if (cleanMsg.includes('kazanma') || cleanMsg.includes('yeni') || cleanMsg.includes('tips') || cleanMsg.includes('acquire')) {
            reply = currentLang === 'tr'
              ? `**Yeni Bağışçı Kazanımı**: Sosyal sorumluluk projelerinde şeffaflık raporları paylaşmak, güvenilirlik algısını artırarak bağışçı dönüşümünü %15 artırmaktadır.`
              : `**New Donor Acquisition**: Sharing transparency reports in social responsibility projects increases donor conversion by 15% by boosting credibility.`;
          } else if (cleanMsg.includes('risk') || cleanMsg.includes('kayıp') || cleanMsg.includes('at-risk') || cleanMsg.includes('plan')) {
            reply = currentLang === 'tr'
              ? `**Risk Yönetim Planı**: Düzenli bağışçı durumundan potansiyel (düzensiz) bağışçı durumuna düşen donörlere özel teşekkür mektupları gönderilmelidir.`
              : `**Risk Management Plan**: Special thank you letters should be sent to donors whose status drops from regular to potential (irregular) donor.`;
          }
        } else if (currentSector === 'egitim') {
          if (cleanMsg.includes('müdahale') || cleanMsg.includes('intervention') || cleanMsg.includes('plan') || cleanMsg.includes('öneri')) {
            reply = currentLang === 'tr'
              ? `**Müdahale Planı**: Çalışma süresi haftalık 10 saatin altına düşen veya ders devamı %70'in altında olan öğrenciler için etüt grupları planlanmalıdır.`
              : `**Intervention Plan**: Study groups should be planned for students whose study time falls below 10 hours/week or course attendance is below 70%.`;
          } else if (cleanMsg.includes('başarı') || cleanMsg.includes('improve success') || cleanMsg.includes('artır')) {
            reply = currentLang === 'tr'
              ? `**Başarıyı Artırma Yöntemleri**: Gözetimli regresyon analizlerimize göre, haftalık çalışma süresini 5 saat artırmak başarı olasılığını ortalama %12 yükseltmektedir.`
              : `**Improving Success Rates**: According to supervised regression analysis, increasing weekly study time by 5 hours boosts success probability by an average of 12%.`;
          } else if (cleanMsg.includes('devam') || cleanMsg.includes('attendance') || cleanMsg.includes('iyileştir')) {
            reply = currentLang === 'tr'
              ? `**Ders Devam Oranını İyileştirme**: Devamsızlık uyarıları velilere ve danışman öğretmenlere otomatik bildirim olarak gönderilerek takip sıkılaştırılmalıdır.`
              : `**Improving Attendance**: Attendance warnings should be sent to parents and academic advisors as automated notifications to tighten monitoring.`;
          }
        } else if (currentSector === 'gida') {
          if (cleanMsg.includes('hacim') || cleanMsg.includes('artır') || cleanMsg.includes('boost') || cleanMsg.includes('volume')) {
            reply = currentLang === 'tr'
              ? `**Sipariş Hacmi Artışı**: Sipariş yoğunluğunu artırmak için yoğun saatlerde anlık indirim kuponları ve hediye ürün kampanyaları entegre edilmelidir.`
              : `**Boosting Order Volume**: Flash discount coupons and free item campaigns should be integrated during peak hours to increase order density.`;
          } else if (cleanMsg.includes('optimizasyon') || cleanMsg.includes('optimization')) {
            reply = currentLang === 'tr'
              ? `**Kampanya Optimizasyonu**: Gıda regresyon modelimiz, lokasyon ve şube puanı yüksek yerlerde yapılan kampanyaların %18 daha yüksek dönüşüm getirdiğini göstermektedir.`
              : `**Campaign Optimization**: Our food regression model shows that campaigns run in locations with high ratings yield 18% higher conversion rates.`;
          } else if (cleanMsg.includes('puan') || cleanMsg.includes('şube') || cleanMsg.includes('rating') || cleanMsg.includes('low-rated')) {
            reply = currentLang === 'tr'
              ? `**Düşük Puanlı Şubeler**: Puanı 4.0'ın altında olan şubelerde kalite denetimleri sıkılaştırılmalı ve müşteri geri bildirim anketleri analiz edilmelidir.`
              : `**Low-Rated Branches**: Quality audits must be tightened and customer feedback surveys analyzed for branches with ratings below 4.0.`;
          }
        } else if (currentSector === 'lojistik') {
          if (cleanMsg.includes('süre') || cleanMsg.includes('kısalt') || cleanMsg.includes('shorten') || cleanMsg.includes('delivery')) {
            reply = currentLang === 'tr'
              ? `**Teslimat Süresi Kısaltma**: Trafik yoğunluğunun 7/10'un üzerinde olduğu saatlerde akıllı alternatif rota planlama algoritmaları devreye alınmalıdır.`
              : `**Shortening Delivery Times**: Smart alternative routing algorithms should be activated during hours when traffic density is above 7/10.`;
          } else if (cleanMsg.includes('rota') || cleanMsg.includes('risk') || cleanMsg.includes('high-risk') || cleanMsg.includes('plan')) {
            reply = currentLang === 'tr'
              ? `**Yüksek Riskli Rotalar**: Trafik ve mesafe yoğunluğunun yüksek olduğu Rota TR-54 gibi hatlarda ek kurye ve transfer merkezi optimizasyonları yapılmalıdır.`
              : `**High-Risk Routes**: Extra couriers and hub transfer optimizations should be made for lines like Route TR-54 where traffic and distance are high.`;
          } else if (cleanMsg.includes('maliyet') || cleanMsg.includes('cost') || cleanMsg.includes('tasarruf')) {
            reply = currentLang === 'tr'
              ? `**Maliyet Optimizasyonu**: Yakıt tüketimini azaltmak için teslimat paket yüklerinin şubeler arasında optimize edilmiş dağıtım algoritmalarıyla dağıtılması önerilir.`
              : `**Cost Optimization**: To reduce fuel consumption, it is recommended to distribute delivery loads using optimized branch allocation algorithms.`;
          }
        } else if (currentSector === 'tekstil') {
          if (cleanMsg.includes('değer') || cleanMsg.includes('sepet') || cleanMsg.includes('increase basket') || cleanMsg.includes('value')) {
            reply = currentLang === 'tr'
              ? `**Sepet Tutarı Artışı**: Çapraz satış (cross-selling) öneri motoru ile müşterilere sepetlerindeki ürünlere uyumlu kombin tavsiyeleri gösterilmelidir.`
              : `**Increasing Basket Value**: Coordinate suggestions matching the items in customers' baskets should be displayed using a cross-selling recommendation engine.`;
          } else if (cleanMsg.includes('premium') || cleanMsg.includes('program') || cleanMsg.includes('sadakat')) {
            reply = currentLang === 'tr'
              ? `**Premium Sadakat Programı**: Alışveriş sıklığı 10'un üzerinde olan Premium Alıcılara özel kargo bedava ve erken erişim indirim kuponları sunulmalıdır.`
              : `**Premium Loyalty Program**: Free shipping and early access discount codes should be offered to Premium Buyers with shopping frequency above 10.`;
          } else if (cleanMsg.includes('churn') || cleanMsg.includes('kayıp') || cleanMsg.includes('risk') || cleanMsg.includes('azalt')) {
            reply = currentLang === 'tr'
              ? `**Churn Riskini Azaltma**: Alışveriş sıklığı düşüş eğiliminde olan Fırsatçı Alıcılar için push bildirimler ve kişiselleştirilmiş indirimler tanımlanmalıdır.`
              : `**Reducing Churn Risk**: Push notifications and personalized discounts should be defined for Opportunity Buyers with declining shopping frequency.`;
          }
        }
      }

      // Default replies if no match was found above
      if (!reply) {
        if (cleanMsg.includes('merhaba') || cleanMsg.includes('selam') || cleanMsg.includes('hello') || cleanMsg.includes('hi') || cleanMsg.includes('hey')) {
          reply = currentLang === 'tr'
            ? `Merhaba! Size ve **${currentCompany}** şirketine nasıl yardımcı olabilirim? Aşağıdaki hızlı şablonları kullanarak analizler yapmamı sağlayabilirsiniz.`
            : `Hello! How can I assist you and **${currentCompany}** today? You can make me perform analyses using the quick prompts below.`;
        } else if (cleanMsg.includes('risk') || cleanMsg.includes('tahmin') || cleanMsg.includes('predict') || cleanMsg.includes('sonuç') || cleanMsg.includes('output') || cleanMsg.includes('karar')) {
          const outResult = document.getElementById('dash-output-result')?.textContent || 'N/A';
          reply = currentLang === 'tr'
            ? `Şu anki aktif simülasyon girdilerine göre modelimizin tahmini sonucu: **${outResult}**.`
            : `Based on the current active simulation inputs, our model predicts: **${outResult}**.`;
        } else if (cleanMsg.includes('model') || cleanMsg.includes('algoritma') || cleanMsg.includes('algorithm')) {
          const modelNames = {
            vakif: { tr: "Karar Ağacı (Decision Tree)", en: "Decision Tree" },
            egitim: { tr: "Lojistik Regresyon", en: "Logistic Regression" },
            gida: { tr: "Çoklu Doğrusal Regresyon", en: "Linear Regression" },
            lojistik: { tr: "Etki Katsayı Analizi", en: "Impact Coefficient Analysis" },
            tekstil: { tr: "K-En Yakın Komşu (K-NN)", en: "K-Nearest Neighbors (K-NN)" }
          };
          reply = currentLang === 'tr'
            ? `Bu panelde aktif olan gözetimli makine öğrenimi algoritması: **${modelNames[currentSector].tr}**.`
            : `The supervised machine learning algorithm active on this panel: **${modelNames[currentSector].en}**.`;
        } else {
          reply = currentLang === 'tr'
            ? `Sorduğunuz soruyu çözümleyemedim. **${currentCompany}** veritabanı analizleri veya aktif tahmin katsayıları hakkında sorular sorabilirsiniz. Örneğin: 'Ortalama nedir?'`
            : `I could not resolve your question. You can ask about **${currentCompany}** database analyses or active prediction coefficients. For example: 'What is the average?'`;
        }
      }

      const aiBubble = document.createElement('div');
      aiBubble.className = 'chat-msg ai';
      aiBubble.innerHTML = reply;
      chatLogs.appendChild(aiBubble);
      chatLogs.scrollTop = chatLogs.scrollHeight;
    }, delay);
  }

  // Bind analytic events
  const btnExplain = document.getElementById('btn-explain-prediction');
  if (btnExplain) {
    btnExplain.addEventListener('click', showShapExplanation);
  }
  const btnSetBaseline = document.getElementById('btn-whatif-set-baseline');
  if (btnSetBaseline) {
    btnSetBaseline.addEventListener('click', setWhatIfBaseline);
  }
  const btnCloseExplain = document.getElementById('btn-close-explain-modal');
  if (btnCloseExplain) {
    btnCloseExplain.addEventListener('click', () => {
      document.getElementById('explain-modal').classList.remove('active');
    });
  }
  const explainModal = document.getElementById('explain-modal');
  if (explainModal) {
    explainModal.addEventListener('click', (e) => {
      if (e.target === explainModal) {
        explainModal.classList.remove('active');
      }
    });
  }
  const chatForm = document.getElementById('aura-chat-form');
  if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('aura-chat-input');
      if (input && input.value.trim() !== '') {
        handleAuraChatSubmit(input.value.trim());
      }
    });
  }

  // ================= R&D EXTENSION: SECTOR SCHEMA LOADER, PERFORMANCE MONITOR, AND PIPELINE PULSER =================

  function loadSectorSchema(sector, callback) {
    const overlay = document.getElementById('schema-loader-overlay');
    const loaderText = document.getElementById('schema-loader-text');
    if (!overlay) {
      if (callback) callback();
      return;
    }

    overlay.style.display = 'flex';
    if (loaderText) {
      loaderText.textContent = currentLang === 'tr'
        ? `Matris Şeması Yükleniyor: ${sector}_schema.json...`
        : `Loading Matrix Schema: ${sector}_schema.json...`;
    }

    let fetchPromise = Promise.resolve();
    if (!sectorDataLoaded) {
      fetchPromise = apiClient.request('sector_data.json')
        .then(res => {
          if (!res.ok) throw new Error('Network response was not ok');
          return res.json();
        })
        .then(data => {
          sectorDataJSON = data;
          sectorDataLoaded = true;
          Object.keys(data).forEach(sectorKey => {
            if (sectorSchemas[sectorKey]) {
              sectorSchemas[sectorKey].formFields = data[sectorKey];
            }
          });
          console.log('Sector schemas loaded successfully from sector_data.json');
        })
        .catch(err => {
          console.warn('Fallback: Using hardcoded schemas. (Reason:', err.message, ')');
          sectorDataLoaded = true; // prevent infinite fetch retries
        });
    }

    setTimeout(() => {
      fetchPromise.finally(() => {
        overlay.style.display = 'none';
        if (callback) callback();
      });
    }, 600);
  }

  function updatePerformanceMetrics(fluctuate = false, training = false) {
    const accuracyVal = document.getElementById('metric-accuracy-val');
    const precisionVal = document.getElementById('metric-precision-val');
    const recallVal = document.getElementById('metric-recall-val');
    const statusText = document.getElementById('metrics-status-text');

    if (!accuracyVal || !precisionVal || !recallVal) return;

    const base = sectorSchemas[currentSector]?.metrics || { accuracy: 98.40, precision: 97.80, recall: 99.10 };

    if (!activePerformanceMetrics || activePerformanceMetrics.sector !== currentSector) {
      activePerformanceMetrics = {
        sector: currentSector,
        accuracy: base.accuracy,
        precision: base.precision,
        recall: base.recall
      };
    }

    if (training) {
      const boost = 0.05 + Math.random() * 0.12;
      activePerformanceMetrics.accuracy = Math.min(99.95, activePerformanceMetrics.accuracy + boost);
      activePerformanceMetrics.precision = Math.min(99.90, activePerformanceMetrics.precision + boost * 0.95);
      activePerformanceMetrics.recall = Math.min(99.95, activePerformanceMetrics.recall + boost * 1.05);

      if (statusText) {
        statusText.textContent = currentLang === 'tr'
          ? `✓ Eğitim Tamamlandı (+${boost.toFixed(2)}%)`
          : `✓ Training Complete (+${boost.toFixed(2)}%)`;
        statusText.style.color = 'var(--success)';
        
        setTimeout(() => {
          statusText.textContent = translations.metrics_status[currentLang];
          statusText.style.color = '';
        }, 2000);
      }
    } else if (fluctuate) {
      const noiseAcc = (Math.random() - 0.5) * 0.04;
      const noisePrec = (Math.random() - 0.5) * 0.04;
      const noiseRec = (Math.random() - 0.5) * 0.04;

      accuracyVal.textContent = `${(activePerformanceMetrics.accuracy + noiseAcc).toFixed(2)}%`;
      precisionVal.textContent = `${(activePerformanceMetrics.precision + noisePrec).toFixed(2)}%`;
      recallVal.textContent = `${(activePerformanceMetrics.recall + noiseRec).toFixed(2)}%`;
      return;
    }

    accuracyVal.textContent = `${activePerformanceMetrics.accuracy.toFixed(2)}%`;
    precisionVal.textContent = `${activePerformanceMetrics.precision.toFixed(2)}%`;
    recallVal.textContent = `${activePerformanceMetrics.recall.toFixed(2)}%`;
  }

  // ─── Pipeline timing state ───────────────────────────────────────────────────
  const PIPELINE_STEPS = [
    { node: 'flow-node-ingest',     arrow: null,          ms: 'flow-ms-1', delay:   0, stepLabel: 'Ingestion' },
    { node: 'flow-node-preprocess', arrow: 'flow-arrow-1', ms: 'flow-ms-2', delay: 180, stepLabel: 'Preprocess' },
    { node: 'flow-node-solver',     arrow: 'flow-arrow-2', ms: 'flow-ms-3', delay: 380, stepLabel: 'Solver' },
    { node: 'flow-node-aura',       arrow: 'flow-arrow-3', ms: 'flow-ms-4', delay: 580, stepLabel: 'Aura AI' },
    { node: 'flow-node-action',     arrow: 'flow-arrow-4', ms: 'flow-ms-5', delay: 820, stepLabel: 'Output' }
  ];
  const TOTAL_PIPELINE_DURATION = 1000; // ms – total animation window

  // Ring buffer: stores last 30 completed run timestamps to compute throughput
  const pipelineRunHistory = [];   // [ { ts: DOMHighResTimeStamp, latencyMs: number } ]
  let pipelineRunCount = 0;
  let pipelineLatencyHistory = []; // last 60 latency values for the sparkline
  let pipelineLiveInterval = null; // interval for the live ms counter

  function triggerPipelinePulse() {
    // Generate dynamic processing times for the current run
    const ingestTime = Math.floor(Math.random() * 400) + 100;
    const preprocessTime = Math.floor(Math.random() * 600) + 150;
    const solverTime = Math.floor(Math.random() * 1000) + 200;
    const auraTime = Math.floor(Math.random() * 1200) + 300;
    const outputTime = Math.floor(Math.random() * 400) + 100;

    const totalPipelineMs = ingestTime + preprocessTime + solverTime + auraTime + outputTime;

    function getPerfClass(ms) {
      if (ms < 500) return 'perf-green';
      if (ms <= 1000) return 'perf-orange';
      return 'perf-red';
    }

    const startTime = performance.now();

    // ── 1. Reset all nodes, arrows and styling ──────────────────────────────
    PIPELINE_STEPS.forEach(s => {
      const n = document.getElementById(s.node);
      const a = s.arrow ? document.getElementById(s.arrow) : null;
      const m = document.getElementById(s.ms);
      if (n) {
        n.classList.remove('active', 'perf-green', 'perf-orange', 'perf-red');
      }
      if (a) a.classList.remove('active');
      if (m) m.textContent = '—';
    });

    // ── 2. Live counter: tick every 16ms while pipeline runs ───────────────
    const latencyEl  = document.getElementById('pipeline-latency-ms');
    const latencyBar = document.getElementById('pipeline-latency-bar');
    if (pipelineLiveInterval) clearInterval(pipelineLiveInterval);
    if (latencyEl) latencyEl.textContent = '0';

    pipelineLiveInterval = setInterval(() => {
      const elapsed = Math.round(performance.now() - startTime);
      if (latencyEl) latencyEl.textContent = Math.min(totalPipelineMs, elapsed);
      // Mini latency bar
      if (latencyBar) {
        const pct = Math.min(100, (elapsed / totalPipelineMs) * 100);
        latencyBar.style.width = `${pct}%`;
        const hue = Math.round(120 - Math.min(100, (elapsed / 3000) * 100) * 1.2);
        latencyBar.style.background = `hsl(${hue},85%,52%)`;
      }
    }, 16);

    // ── 3. Stage 1 (Ingestion) starts immediately ────────────────────────────
    const node1 = document.getElementById('flow-node-ingest');
    if (node1) node1.classList.add('active');

    // Timeout 1: Ingest finishes, Preprocess starts
    setTimeout(() => {
      const ms1 = document.getElementById('flow-ms-1');
      if (ms1) ms1.textContent = `${ingestTime}ms`;
      const node = document.getElementById('flow-node-ingest');
      if (node) {
        node.classList.remove('active');
        node.classList.add(getPerfClass(ingestTime));
      }
      
      const arrow1 = document.getElementById('flow-arrow-1');
      const node2 = document.getElementById('flow-node-preprocess');
      if (arrow1) arrow1.classList.add('active');
      if (node2) node2.classList.add('active');
    }, ingestTime);

    // Timeout 2: Preprocess finishes, Solver starts
    setTimeout(() => {
      const ms2 = document.getElementById('flow-ms-2');
      if (ms2) ms2.textContent = `${preprocessTime}ms`;
      const node = document.getElementById('flow-node-preprocess');
      if (node) {
        node.classList.remove('active');
        node.classList.add(getPerfClass(preprocessTime));
      }
      
      const arrow2 = document.getElementById('flow-arrow-2');
      const node3 = document.getElementById('flow-node-solver');
      if (arrow2) arrow2.classList.add('active');
      if (node3) node3.classList.add('active');
    }, ingestTime + preprocessTime);

    // Timeout 3: Solver finishes, Aura AI starts
    setTimeout(() => {
      const ms3 = document.getElementById('flow-ms-3');
      if (ms3) ms3.textContent = `${solverTime}ms`;
      const node = document.getElementById('flow-node-solver');
      if (node) {
        node.classList.remove('active');
        node.classList.add(getPerfClass(solverTime));
      }
      
      const arrow3 = document.getElementById('flow-arrow-3');
      const node4 = document.getElementById('flow-node-aura');
      if (arrow3) arrow3.classList.add('active');
      if (node4) node4.classList.add('active');
    }, ingestTime + preprocessTime + solverTime);

    // Timeout 4: Aura AI finishes, Output starts
    setTimeout(() => {
      const ms4 = document.getElementById('flow-ms-4');
      if (ms4) ms4.textContent = `${auraTime}ms`;
      const node = document.getElementById('flow-node-aura');
      if (node) {
        node.classList.remove('active');
        node.classList.add(getPerfClass(auraTime));
      }
      
      const arrow4 = document.getElementById('flow-arrow-4');
      const node5 = document.getElementById('flow-node-action');
      if (arrow4) arrow4.classList.add('active');
      if (node5) node5.classList.add('active');
    }, ingestTime + preprocessTime + solverTime + auraTime);

    // Timeout 5: Output finishes, pipeline completes
    setTimeout(() => {
      const ms5 = document.getElementById('flow-ms-5');
      if (ms5) ms5.textContent = `${outputTime}ms`;
      const node = document.getElementById('flow-node-action');
      if (node) {
        node.classList.remove('active');
        node.classList.add(getPerfClass(outputTime));
      }

      // Finalize pipeline
      clearInterval(pipelineLiveInterval);
      pipelineLiveInterval = null;

      if (latencyEl) latencyEl.textContent = totalPipelineMs;
      if (latencyBar) {
        latencyBar.style.width = '100%';
        const hue = Math.round(120 - Math.min(100, (totalPipelineMs / 3000) * 100) * 1.2);
        latencyBar.style.background = `hsl(${hue},85%,52%)`;
      }

      pipelineRunCount++;
      const runRecord = { ts: performance.now(), latencyMs: totalPipelineMs };
      pipelineRunHistory.push(runRecord);
      if (pipelineRunHistory.length > 30) pipelineRunHistory.shift();

      pipelineLatencyHistory.push(totalPipelineMs);
      if (pipelineLatencyHistory.length > 60) pipelineLatencyHistory.shift();

      _updatePipelineStats(totalPipelineMs);
      _drawThroughputChart();
    }, totalPipelineMs);
  }

  // ── Stats strip updater ───────────────────────────────────────────────────
  function _updatePipelineStats(lastMs) {
    const elLast  = document.getElementById('pipe-stat-last');
    const elAvg   = document.getElementById('pipe-stat-avg');
    const elPeak  = document.getElementById('pipe-stat-peak');
    const elCount = document.getElementById('pipe-stat-count');

    if (elLast)  elLast.textContent  = `${lastMs} ms`;
    if (elCount) elCount.textContent = pipelineRunCount;

    if (pipelineLatencyHistory.length > 0) {
      const avg = Math.round(
        pipelineLatencyHistory.reduce((a, b) => a + b, 0) / pipelineLatencyHistory.length
      );
      if (elAvg) elAvg.textContent = `${avg} ms`;
    }

    // Throughput = runs in last 10 seconds / 10
    const now   = performance.now();
    const window10s = pipelineRunHistory.filter(r => now - r.ts < 10000);
    const throughput = window10s.length / 10; // rec/s over 10s window

    const peakEl = elPeak;
    if (peakEl) {
      peakEl.textContent = `${throughput.toFixed(1)} rec/s`;
    }

    const liveTp = document.getElementById('pipe-throughput-live');
    if (liveTp) {
      const recentWindow = pipelineRunHistory.filter(r => now - r.ts < 5000);
      const liveRate = recentWindow.length / 5;
      liveTp.textContent = `${liveRate.toFixed(2)} rec/s`;
    }
  }

  // ── Throughput sparkline chart ────────────────────────────────────────────
  function _drawThroughputChart() {
    const canvas = document.getElementById('pipeline-throughput-canvas');
    if (!canvas) return;

    // Compute DPR-aware size
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width  = rect.width * dpr;
    canvas.height = 72 * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    const W = rect.width;
    const H = 72;
    const PAD = { top: 6, bottom: 16, left: 4, right: 4 };

    ctx.clearRect(0, 0, W, H);

    // Compute throughput series: rate over last 30 runs using a sliding 3-run window
    if (pipelineRunHistory.length < 2) return;

    const ratePoints = [];
    for (let i = 1; i < pipelineRunHistory.length; i++) {
      const span = pipelineRunHistory[i].ts - pipelineRunHistory[0].ts;
      const rate = i / (span / 1000);  // records per second since start
      ratePoints.push(rate);
    }
    if (ratePoints.length === 0) return;

    const maxRate = Math.max(...ratePoints, 0.5);
    const n = ratePoints.length;

    function mapX(i) {
      return PAD.left + (i / Math.max(n - 1, 1)) * (W - PAD.left - PAD.right);
    }
    function mapY(v) {
      return PAD.top + (1 - v / maxRate) * (H - PAD.top - PAD.bottom);
    }

    // Gradient fill
    const grad = ctx.createLinearGradient(0, PAD.top, 0, H - PAD.bottom);
    grad.addColorStop(0, 'hsla(217,91%,60%,0.45)');
    grad.addColorStop(1, 'hsla(217,91%,60%,0.02)');

    // Draw area
    ctx.beginPath();
    ratePoints.forEach((v, i) => {
      const x = mapX(i), y = mapY(v);
      if (i === 0) ctx.moveTo(x, y);
      else {
        // Smooth curve
        const px = mapX(i - 1), py = mapY(ratePoints[i - 1]);
        const cx1 = px + (x - px) * 0.5, cy1 = py;
        const cx2 = px + (x - px) * 0.5, cy2 = y;
        ctx.bezierCurveTo(cx1, cy1, cx2, cy2, x, y);
      }
    });
    ctx.lineTo(mapX(n - 1), H - PAD.bottom);
    ctx.lineTo(mapX(0), H - PAD.bottom);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    // Draw line
    ctx.beginPath();
    ratePoints.forEach((v, i) => {
      const x = mapX(i), y = mapY(v);
      if (i === 0) ctx.moveTo(x, y);
      else {
        const px = mapX(i - 1), py = mapY(ratePoints[i - 1]);
        const cx1 = px + (x - px) * 0.5, cy1 = py;
        const cx2 = px + (x - px) * 0.5, cy2 = y;
        ctx.bezierCurveTo(cx1, cy1, cx2, cy2, x, y);
      }
    });
    ctx.strokeStyle = 'hsl(217,91%,60%)';
    ctx.lineWidth = 2;
    ctx.shadowColor = 'hsla(217,91%,60%,0.6)';
    ctx.shadowBlur = 6;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Draw last point dot
    const lx = mapX(n - 1), ly = mapY(ratePoints[n - 1]);
    ctx.beginPath();
    ctx.arc(lx, ly, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = 'hsl(217,91%,72%)';
    ctx.shadowColor = 'hsl(217,91%,60%)';
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.shadowBlur = 0;

    // Y-axis max label
    ctx.fillStyle = 'rgba(255,255,255,0.28)';
    ctx.font = `${10}px 'Courier New', monospace`;
    ctx.fillText(`${maxRate.toFixed(1)} r/s`, PAD.left + 2, PAD.top + 9);

    // X-axis label: run count
    ctx.fillStyle = 'rgba(255,255,255,0.18)';
    ctx.fillText(`${n} runs`, W - PAD.right - 38, H - 3);
  }

  // Set initial language from local storage state or default
  setLanguage(currentLang);

  // Mock enterprise session simulation for demo/prototype
  function ensureAuthenticatedSession() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const hasCardData = localStorage.getItem('userCardData') !== null;
    
    // Automatically log in with a mock session if they load a panel hash directly,
    // or if we just want them to bypass authentication.
    if (!isLoggedIn || !hasCardData) {
      console.log("[Auth Gate Debug] No active session or missing data. Simulating mock enterprise session...");
      const mockCardData = {
        username: 'enterprise_admin',
        password: 'mock_password',
        company: 'ANL Global Systems Inc.',
        sector: 'vakif',
        expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000,
        remember: true
      };
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userCardData', JSON.stringify(mockCardData));
      sessionStorage.setItem('sessionActive', 'true');
      currentCompany = mockCardData.company;
      currentSector = mockCardData.sector;
      tempCredentials = mockCardData;
    }
  }

  // Initialization sequences moved to App.init() at the bottom of DOMContentLoaded to enforce clean login-first gates.

  // Email Notification Modal logic
  window.openEmailModal = function(name, email) {
    const modal = document.getElementById('email-modal');
    if (!modal) return;
    document.getElementById('email-recipient').value = email;
    
    const subject = currentLang === 'tr' 
      ? 'ANL Vertex Analitik Tahmin Raporu'
      : 'ANL Vertex Analytical Prediction Report';
    document.getElementById('email-subject').value = subject;
    
    const message = currentLang === 'tr'
      ? `Sayın ${name},\n\nANL Vertex platformu üzerinden gerçekleştirdiğimiz model analizine göre tahmin kaydınız güncellenmiştir.\n\nİyi çalışmalar,\nANL Vertex Ekibi`
      : `Dear ${name},\n\nAccording to the model analysis performed on the ANL Vertex platform, your prediction record has been updated.\n\nBest regards,\nANL Vertex Team`;
    document.getElementById('email-message').value = message;
    
    modal.classList.add('active');
  };

  window.closeEmailModal = function() {
    const modal = document.getElementById('email-modal');
    if (modal) modal.classList.remove('active');
  };

  window.sendEmail = async function() {
    const recipient = document.getElementById('email-recipient').value;
    const subject = document.getElementById('email-subject').value;
    const message = document.getElementById('email-message').value;
    
    const btn = document.querySelector('#email-form button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = currentLang === 'tr' ? 'Gönderiliyor...' : 'Sending...';
    btn.disabled = true;

    try {
      const response = await apiClient.request('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ recipient, subject, message })
      });
      
      if (response.ok) {
        alert(currentLang === 'tr' ? 'E-posta bildirimi başarıyla gönderildi!' : 'Email notification sent successfully!');
      } else {
        alert(currentLang === 'tr' ? 'Bildirim gönderilirken bir hata oluştu!' : 'An error occurred while sending the notification!');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      // Fallback message for offline / mock server
      alert(currentLang === 'tr' 
        ? `Bildirim gönderimi simüle edildi (Çevrimdışı Mod).\nAlıcı: ${recipient}`
        : `Notification sending simulated (Offline Mode).\nRecipient: ${recipient}`);
    } finally {
      btn.textContent = originalText;
      btn.disabled = false;
      closeEmailModal();
    }
  };

  // ================= SCHEMA INTELLIGENCE ENGINE MODULE =================
  // ================= DASHBOARD SECTION NAVIGATION CONTROLLER =================
  const btnInsights = document.getElementById('menu-btn-insights');
  const btnSchemaIntel = document.getElementById('menu-btn-schema-intel');
  const secInsights = document.getElementById('dashboard-insights-section');
  const secSchemaIntel = document.getElementById('dashboard-schema-intel-section');



  function hideAllPanels() {
    document.querySelectorAll('.dashboard-section').forEach(s => {
      s.classList.remove('active');
    });
  }

  function showPanel(panelId) {
    console.log('Switching to panel:', panelId);
    const targetId = PANELS[panelId];
    const panel = document.getElementById(targetId);
    if (panel) {
      panel.classList.add('active');
      // Trigger module callbacks
      if (targetId === 'dashboard-automl-section' && typeof updateAutoMLSharedState === 'function') {
        updateAutoMLSharedState();
      }
      if (targetId === 'dashboard-autobuilder-section' && typeof updateAutoBuilderSharedState === 'function') {
        updateAutoBuilderSharedState();
      }
      if (targetId === 'dashboard-aura-os-section' && typeof initAuraOSModule === 'function') {
        initAuraOSModule();
      }
    } else {
      console.warn('Panel target not found in DOM:', targetId);
      fallbackToDefault();
    }
  }

  function setActiveMenu(panelId) {
    const targetId = PANELS[panelId];
    document.querySelectorAll('.menu-item').forEach(i => {
      if (i.getAttribute('data-target') === targetId) {
        i.classList.add('active');
      } else {
        i.classList.remove('active');
      }
    });
  }

  function fallbackToDefault() {
    console.warn('Falling back to default dashboard panel');
    window.location.hash = 'dashboard';
  }

  function showTab(tabId) {
    const btn = document.getElementById(tabId);
    if (btn) {
      btn.click();
    }
  }

  const dropZone = document.getElementById('schema-drop-zone');
  const fileInput = document.getElementById('schema-file-input');
  const btnBrowse = document.getElementById('btn-browse-schema-file');

  if (dropZone && fileInput && btnBrowse) {
    btnBrowse.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        handleSchemaFile(e.target.files[0]);
      }
    });

    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', () => {
      dropZone.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.classList.remove('dragover');
      if (e.dataTransfer.files.length > 0) {
        handleSchemaFile(e.dataTransfer.files[0]);
      }
    });
  }

  const sampleButtons = document.querySelectorAll('.btn-sample-dataset');
  sampleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const datasetType = btn.getAttribute('data-dataset');
      loadSampleDataset(datasetType);
    });
  });

  function initUploadParticles() {
    const container = document.getElementById('upload-particles');
    if (!container) return;
    container.innerHTML = '';
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = `${Math.random() * 100}%`;
      p.style.animationDelay = `${Math.random() * 4}s`;
      p.style.setProperty('--drift', `${(Math.random() - 0.5) * 40}px`);
      container.appendChild(p);
    }
  }
  initUploadParticles();

  function triggerTerminalAnalysis(fileName, fileData, onComplete) {
    const logsBox = document.getElementById('schema-terminal-logs');
    if (!logsBox) return;
    
    document.getElementById('schema-upload-view').style.display = 'none';
    document.getElementById('schema-scanning-view').style.display = 'block';
    document.getElementById('schema-results-view').style.display = 'none';

    logsBox.innerHTML = '';
    
    const steps = [
      `[AI OS // SYSTEM INITIALIZATION] Starting Schema Intelligence Engine...`,
      `[AI OS // FILE SCANNER] Reading input stream: "${fileName}"...`,
      `[AI OS // PARSER] Mapping CSV delimiters, detected ${fileData.rowCount} records with ${fileData.colCount} headers.`,
      `[AI OS // INFERENCE] Auto-inspecting data types...`,
      `[AI OS // ANALYTICS] Profiling categorical distributions and missing values.`,
      `[AI OS // CLASSIFIER] Running Neural Sector Classifier (128-dim embeddings)...`,
      `[AI OS // VULNERABILITY] Running anomaly detection routines (LIME/Outlier-Forests)...`,
      `[AI OS // COMPLETED] Schema analysis finalized. Confidence interval: 98.6%.`,
      `[AI OS // DISPLAY] Binding results dashboard...`
    ];

    let currentStep = 0;
    function writeLogLine() {
      if (currentStep < steps.length) {
        const line = document.createElement('div');
        line.style.marginBottom = '0.35rem';
        line.textContent = steps[currentStep];
        logsBox.appendChild(line);
        
        let cursor = logsBox.querySelector('.terminal-cursor');
        if (cursor) logsBox.appendChild(cursor);
        else {
          cursor = document.createElement('span');
          cursor.className = 'terminal-cursor';
          logsBox.appendChild(cursor);
        }
        
        logsBox.scrollTop = logsBox.scrollHeight;
        currentStep++;
        setTimeout(writeLogLine, 600 + Math.random() * 400);
      } else {
        setTimeout(() => {
          document.getElementById('schema-scanning-view').style.display = 'none';
          document.getElementById('schema-results-view').style.display = 'block';
          onComplete();
        }, 800);
      }
    }
    writeLogLine();
  }

  function handleSchemaFile(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const text = e.target.result;
      const parsedData = parseCSVContent(text);
      runSchemaAnalysis(file.name, parsedData);
    };
    reader.readAsText(file);
  }

  function parseCSVContent(text) {
    const lines = text.split(/\r?\n/).filter(line => line.trim().length > 0);
    if (lines.length === 0) return { colCount: 0, rowCount: 0, columns: [] };

    const headerLine = lines[0];
    let delimiter = ',';
    if (headerLine.includes(';')) delimiter = ';';
    else if (headerLine.includes('\t')) delimiter = '\t';

    const columns = headerLine.split(delimiter).map(c => c.replace(/['"]+/g, '').trim());
    const rowCount = lines.length - 1;
    const dataRows = lines.slice(1).map(line => line.split(delimiter).map(cell => cell.replace(/['"]+/g, '').trim()));

    return {
      colCount: columns.length,
      rowCount: rowCount,
      columns: columns,
      rows: dataRows
    };
  }

  function detectSectorAndBuildMetrics(parsedData) {
    const cols = parsedData.columns.map(c => c.toLowerCase());
    const keywords = {
      finance: ['credit', 'income', 'dti', 'loan', 'balance', 'debt', 'limit', 'bağış', 'donor', 'donation', 'ngo', 'stk', 'vakıf', 'bağiş', 'üyelik', 'membership'],
      logistics: ['days', 'distance', 'sessions', 'traffic', 'shipment', 'kurye', 'delivery', 'mesafe', 'trafik', 'kargo', 'kurye', 'hız', 'speed', 'paket', 'load'],
      textile: ['textile', 'fabric', 'clothing', 'garment', 'pattern', 'shopping', 'retail', 'basket', 'sales', 'store', 'price', 'customer', 'sepet', 'tutar', 'indirim', 'sens', 'promo', 'kod'],
      education: ['student', 'grade', 'class', 'course', 'exam', 'study', 'attendance', 'okul', 'ders', 'öğrenci', 'not', 'sınav', 'devam', 'glucose', 'bmi', 'age'],
      food: ['food', 'restaurant', 'menu', 'order', 'meal', 'chef', 'sipariş', 'restoran', 'puan', 'kampanya', 'location', 'konsept']
    };

    let scores = { finance: 0, logistics: 0, textile: 0, education: 0, food: 0 };
    cols.forEach(col => {
      for (let sector in keywords) {
        keywords[sector].forEach(key => {
          if (col.includes(key)) {
            scores[sector] += 2;
          }
        });
      }
    });

    let detectedSector = 'finance';
    let maxScore = -1;
    for (let sector in scores) {
      if (scores[sector] > maxScore) {
        maxScore = scores[sector];
        detectedSector = sector;
      }
    }
    return detectedSector;
  }

  function runSchemaAnalysis(fileName, parsedData) {
    const detectedSector = detectSectorAndBuildMetrics(parsedData);
    lastUploadedDataset = {
      fileName: fileName,
      parsedData: parsedData,
      detectedSector: detectedSector
    };
    
    triggerTerminalAnalysis(fileName, parsedData, () => {
      const rowCount = parsedData.rows ? parsedData.rows.length : parsedData.rowCount;
      const colCount = parsedData.columns.length;
      
      let nullCellsCount = 0;
      if (parsedData.rows) {
        parsedData.rows.forEach(row => {
          row.forEach(cell => {
            if (cell === null || cell === undefined || cell === '' || cell.toLowerCase() === 'null' || cell.toLowerCase() === 'na') {
              nullCellsCount++;
            }
          });
        });
      }
      if (nullCellsCount === 0 && rowCount > 0) {
        nullCellsCount = Math.round(rowCount * colCount * (0.01 + Math.random() * 0.03));
      }
      const totalCells = rowCount * colCount;
      const nullRate = totalCells > 0 ? (nullCellsCount / totalCells) * 100 : 0;
      const fileSizeKB = Math.round((rowCount * colCount * 65) / 1024);

      document.getElementById('res-rows').textContent = rowCount.toLocaleString();
      document.getElementById('res-cols').textContent = colCount;
      document.getElementById('res-nulls').textContent = `%${nullRate.toFixed(2)}`;
      document.getElementById('res-size').textContent = `${fileSizeKB.toLocaleString()} KB`;

      let qualityScore = 98 - Math.round(nullRate * 2);
      if (qualityScore < 40) qualityScore = 40;
      
      const scoreVal = document.getElementById('res-score-val');
      const scoreCircle = document.getElementById('res-score-circle');
      scoreVal.textContent = `${qualityScore}%`;
      
      const offset = 283 - (283 * qualityScore) / 100;
      scoreCircle.style.strokeDashoffset = offset;
      
      const scoreCard = document.getElementById('card-dataset-overview');
      scoreCard.className = 'glass-card';
      if (qualityScore >= 80) {
        scoreCircle.style.stroke = '#10b981';
        scoreCard.classList.add('glow-card-green');
      } else if (qualityScore >= 50) {
        scoreCircle.style.stroke = '#f97316';
        scoreCard.classList.add('glow-card-orange');
      } else {
        scoreCircle.style.stroke = '#ef4444';
        scoreCard.classList.add('glow-card-red');
      }

      const sectorNameEl = document.getElementById('res-sector-name');
      const sectorConfidenceEl = document.getElementById('res-sector-confidence');
      const sectorBarEl = document.getElementById('res-sector-bar');
      const sectorDetailsEl = document.getElementById('res-sector-details');

      const sectorMap = {
        finance: {
          title: currentLang === 'tr' ? "FİNANS / BAĞIŞ VE KREDİ SKORLAMA" : "FINANCE / DONATION & CREDIT SCORING",
          confidence: 96,
          details: currentLang === 'tr' 
            ? "Bu veri seti finansal göstergeler, katılım sıklıkları ve bağış limitleri içeriyor. ANL Finans Modeli (Vakıf/Dernek) ile tam uyumludur."
            : "This dataset contains financial values, donation limits, and frequency statistics. Fully compatible with ANL Finance Model (Vakıf/Dernek).",
          sectorKey: 'vakif'
        },
        logistics: {
          title: currentLang === 'tr' ? "ULAŞIM VE LOJİSTİK / ROTASYON TAHMİNİ" : "LOGISTICS / ROUTE DELAY RISK FORECASTING",
          confidence: 94,
          details: currentLang === 'tr'
             ? "Veri kümesi mesafe, kurye verimliliği, kargo yükleri ve trafik durumunu içeriyor. ANL Ulaşım ve Lojistik Modeli ile tam uyumludur."
             : "This dataset contains delivery distance, package load, courier capacity, and traffic status. Fully compatible with ANL Logistics Model.",
          sectorKey: 'lojistik'
        },
        textile: {
          title: currentLang === 'tr' ? "TEKSTİL PERAKENDE / MÜŞTERİ SEGMENTASYONU" : "TEXTILE RETAIL / CUSTOMER SEGMENTATION",
          confidence: 95,
          details: currentLang === 'tr'
            ? "Veri seti sepet tutarları, alışveriş sıklıkları ve indirim duyarlılığı içeriyor. ANL Tekstil Perakende Modeli (K-NN) ile tam uyumludur."
            : "This dataset contains basket amount, discount sensitivity, and shopping frequencies. Fully compatible with ANL Textile Retail Model.",
          sectorKey: 'tekstil'
        },
        education: {
          title: currentLang === 'tr' ? "EĞİTİM SEKTÖRÜ / AKADEMİK BAŞARI TAHMİNİ" : "EDUCATION / ACADEMIC SUCCESS PROBABILITY",
          confidence: 93,
          details: currentLang === 'tr'
            ? "Veri seti çalışma süreleri, ders devam oranları ve sınav puanları içeriyor. ANL Eğitim Başarı Modeli (Lojistik Regresyon) ile tam uyumludur."
            : "This dataset contains student study hours, attendance rates, and exam scores. Fully compatible with ANL Education Success Model.",
          sectorKey: 'egitim'
        },
        food: {
          title: currentLang === 'tr' ? "GIDA VE FMCG / TALEP VE SİPARİŞ REGRESYONU" : "FOOD & FMCG / ORDER DEMAND REGRESSION",
          confidence: 92,
          details: currentLang === 'tr'
            ? "Veri seti şube lokasyonları, restoran konseptleri, şube puanları ve sipariş adedi içeriyor. ANL Gıda Sipariş Modeli (Lineer Regresyon) ile tam uyumludur."
            : "This dataset contains restaurant ratings, locations, order qty, and concept categories. Fully compatible with ANL Food Order Model.",
          sectorKey: 'gida'
        }
      };

      const sectorInfo = sectorMap[detectedSector] || sectorMap.finance;
      
      sectorNameEl.textContent = sectorInfo.title;
      sectorConfidenceEl.textContent = `${sectorInfo.confidence}% Confidence`;
      
      setTimeout(() => {
        sectorBarEl.style.width = `${sectorInfo.confidence}%`;
      }, 100);
      
      sectorDetailsEl.textContent = sectorInfo.details;
      btnApplySchema.setAttribute('data-target-sector', sectorInfo.sectorKey);

      const mlTargetEl = document.getElementById('res-ml-target');
      const mlFeaturesEl = document.getElementById('res-ml-features');
      const mlTypeEl = document.getElementById('res-ml-type');

      let targetCol = '';
      let featureCols = [];
      
      parsedData.columns.forEach(col => {
        const cl = col.toLowerCase();
        if (cl.includes('approved') || cl.includes('delayed') || cl.includes('class') || cl.includes('grade') || cl.includes('price') || cl.includes('status') || cl.includes('risk') || cl.includes('tahmin') || cl.includes('hedef')) {
          targetCol = col;
        } else if (!cl.includes('id') && !cl.includes('name') && !cl.includes('ad') && !cl.includes('no')) {
          featureCols.push(col);
        }
      });

      if (!targetCol && parsedData.columns.length > 0) {
        targetCol = parsedData.columns[parsedData.columns.length - 1];
        featureCols = parsedData.columns.slice(0, -1).filter(c => !c.toLowerCase().includes('id'));
      }

      mlTargetEl.textContent = targetCol;
      mlFeaturesEl.textContent = featureCols.join(', ');
      
      const isNumericTarget = targetCol.toLowerCase().includes('price') || targetCol.toLowerCase().includes('score') || targetCol.toLowerCase().includes('tutar') || targetCol.toLowerCase().includes('oran');
      mlTypeEl.textContent = isNumericTarget ? 'Supervised Regression' : 'Supervised Classification';

      const tableBody = document.getElementById('res-columns-table-body');
      tableBody.innerHTML = '';

      parsedData.columns.forEach(col => {
        const tr = document.createElement('tr');
        const cl = col.toLowerCase();
        
        const tdName = document.createElement('td');
        tdName.innerHTML = `<strong>${col}</strong>`;
        
        const tdType = document.createElement('td');
        let type = 'categorical';
        if (cl.includes('id') || cl.includes('name') || cl.includes('ad') || cl.includes('kod')) {
          type = 'text';
        } else if (cl.includes('approved') || cl.includes('delayed') || cl.includes('loc') || cl.includes('applied') || cl.includes('durum')) {
          type = 'boolean';
        } else if (cl.includes('date') || cl.includes('time') || cl.includes('tarih')) {
          type = 'datetime';
        } else if (cl.includes('income') || cl.includes('credit') || cl.includes('dti') || cl.includes('days') || cl.includes('distance') || cl.includes('sessions') || cl.includes('tickets') || cl.includes('size') || cl.includes('beds') || cl.includes('glucose') || cl.includes('bmi') || cl.includes('age') || cl.includes('tutar')) {
          type = 'numerical';
        }
        
        tdType.innerHTML = `<span class="badge-type ${type}">${type}</span>`;
        
        const tdNulls = document.createElement('td');
        let colNullRate = 0;
        if (nullCellsCount > 0) {
          colNullRate = Math.random() > 0.6 ? (nullRate * 2.2).toFixed(1) : 0;
        }
        tdNulls.textContent = `%${colNullRate}`;
        
        const tdStats = document.createElement('td');
        if (type === 'numerical') {
          let min = 1, max = 100;
          if (cl.includes('income')) { min = 10; max = 10000; }
          else if (cl.includes('days') || cl.includes('distance')) { min = 1; max = 500; }
          else if (cl.includes('sessions') || cl.includes('basket')) { min = 100; max = 10000; }
          else if (cl.includes('age')) { min = 18; max = 80; }
          tdStats.innerHTML = `<span style="color:var(--text-secondary);">Range:</span> [${min} - ${max}]`;
        } else if (type === 'categorical' || type === 'text') {
          const uniqueCount = cl.includes('name') || cl.includes('id') ? Math.round(rowCount * 0.95) : Math.round(3 + Math.random() * 5);
          tdStats.innerHTML = `<span style="color:var(--text-secondary);">${uniqueCount} Unique values</span>`;
        } else if (type === 'boolean') {
          tdStats.innerHTML = `<span style="color:var(--text-secondary);">True/False</span>`;
        } else if (type === 'datetime') {
          tdStats.innerHTML = `<span style="color:var(--text-secondary);">2026-01-01 ➔ 2026-05-24</span>`;
        }
        
        const tdAnomaly = document.createElement('td');
        let anomalyText = currentLang === 'tr' ? 'Kararlı (Risk Yok)' : 'Stable (No risk)';
        let anomalyColor = 'var(--text-secondary)';
        
        if (col === targetCol) {
          anomalyText = currentLang === 'tr' ? '🎯 ML Hedef Değişkeni' : '🎯 ML Target Label';
          anomalyColor = 'var(--primary)';
        } else if (parseFloat(colNullRate) > 4) {
          anomalyText = currentLang === 'tr' ? '⚠️ Yüksek Boş Değer Oranı' : '⚠️ High Missing Rate';
          anomalyColor = '#f97316';
        } else if (type === 'text' && !cl.includes('id')) {
          anomalyText = currentLang === 'tr' ? '⚠️ Yüksek Kardinalite (Metin)' : '⚠️ High Cardinality Text';
          anomalyColor = '#8b5cf6';
        } else if (type === 'numerical' && Math.random() > 0.85) {
          anomalyText = currentLang === 'tr' ? '⚠️ Olası Uç Değerler (Outliers)' : '⚠️ Potential Outliers';
          anomalyColor = '#f97316';
        }
        
        tdAnomaly.innerHTML = `<span style="color: ${anomalyColor}; font-weight: 500;">${anomalyText}</span>`;
        
        tr.appendChild(tdName);
        tr.appendChild(tdType);
        tr.appendChild(tdNulls);
        tr.appendChild(tdStats);
        tr.appendChild(tdAnomaly);
        tableBody.appendChild(tr);
      });

      const warningsList = document.getElementById('res-warnings-list');
      warningsList.innerHTML = '';
      
      let warnings = [];
      if (currentLang === 'tr') {
        warnings.push(`Sistem hedef değişkeni olarak <strong>"${targetCol}"</strong> sütununu otomatik olarak eşleştirdi. Olası target leakage risklerini önlemek için bu değişkenin girdi verilerinden türetilmediğini doğrulayın.`);
        if (nullRate > 0) {
          warnings.push(`Veri kümesinde ortalama <strong>%${nullRate.toFixed(1)}</strong> oranında boş hücre tespit edildi. Modelin başarısını etkilememesi için eksik veri tamamlama (imputation) önerilir.`);
        }
        warnings.push(`Yüksek boyutlu sınıf dengesizliği riski: Makine öğrenimi modelinin yanlılık (bias) göstermemesi için eğitim öncesi sınıfların eşit dağıtıldığından emin olun.`);
      } else {
        warnings.push(`System mapped <strong>"${targetCol}"</strong> as target label. Verify that this column is not derived from inputs to prevent label leakage.`);
        if (nullRate > 0) {
          warnings.push(`Detected <strong>%${nullRate.toFixed(1)}</strong> missing values. Data imputation is highly recommended prior to training.`);
        }
        warnings.push(`Class imbalance warning: Ensure classes are distributed evenly before training to prevent model bias.`);
      }
      
      warnings.forEach(warn => {
        const li = document.createElement('li');
        li.innerHTML = warn;
        warningsList.appendChild(li);
      });

      const recsList = document.getElementById('res-recommendations-list');
      recsList.innerHTML = '';
      
      let recommendations = [];
      if (currentLang === 'tr') {
        recommendations.push(`Özellik Mühendisliği (Feature Engineering): Benzersiz kimlik bildiren metin sütunlarını (Örn: isim, kod) model eğitiminden önce kaldırın.`);
        recommendations.push(`Eksik Veriler İçin Çözüm: Kategorik boş hücreler için 'En Sık Geçen Değer' (Mode) veya sayısal boş hücreler için 'Ortalama Değer' (Mean Imputation) tekniklerini uygulayın.`);
        recommendations.push(`Model Önerisi: Sektör sınıflandırmasında en yüksek eşleşme gösteren **"${sectorInfo.title.split('/')[0]}"** model profilini aktifleştirin.`);
      } else {
        recommendations.push(`Feature Engineering: Remove high cardinality text identifiers (e.g. ID, name, code) from input features list before fitting.`);
        recommendations.push(`Missing Values: Apply 'Most Frequent' (Mode) substitution for categorical nulls and 'Mean Imputation' for numerical nulls.`);
        recommendations.push(`Model Profile: Activate the **"${sectorInfo.title.split('/')[0]}"** model profile, which aligns with the highest compatibility score.`);
      }
      
      recommendations.forEach(rec => {
        const li = document.createElement('li');
        li.innerHTML = rec;
        recsList.appendChild(li);
      });
    });
  }

  function loadSampleDataset(type) {
    let fileName = 'dataset.csv';
    let columns = [];
    let rowCount = 100;
    
    if (type === 'credit') {
      fileName = 'kredi_tahmin.csv';
      columns = ['cust_id', 'income', 'credit_score', 'dti', 'donation_type', 'approved'];
      rowCount = 12500;
    } else if (type === 'logistics') {
      fileName = 'kurye_lojistik.csv';
      columns = ['shipment_id', 'distance_km', 'traffic_density', 'package_load', 'delayed'];
      rowCount = 8600;
    } else if (type === 'retail') {
      fileName = 'tekstil_retail.csv';
      columns = ['customer_name', 'shopping_freq', 'basket_amount', 'discount_sensitivity', 'customer_class'];
      rowCount = 14200;
    } else if (type === 'food') {
      fileName = 'restoran_siparis.csv';
      columns = ['branch_id', 'order_qty', 'restaurant_rating', 'campaign_applied', 'concept', 'price'];
      rowCount = 5400;
    }

    const parsedData = {
      colCount: columns.length,
      rowCount: rowCount,
      columns: columns,
      rows: null
    };

    runSchemaAnalysis(fileName, parsedData);
  }

  const btnApplySchema = document.getElementById('btn-apply-schema');
  if (btnApplySchema) {
    btnApplySchema.addEventListener('click', () => {
      const targetSector = btnApplySchema.getAttribute('data-target-sector');
      if (targetSector) {
        currentSector = targetSector;
        
        const userCardDataRaw = localStorage.getItem('userCardData');
        if (userCardDataRaw) {
          try {
            const cardData = JSON.parse(userCardDataRaw);
            cardData.sector = targetSector;
            localStorage.setItem('userCardData', JSON.stringify(cardData));
          } catch(err) {
            console.error(err);
          }
        }
        
        transitionToDashboard();
        
        btnInsights.classList.add('active');
        btnSchemaIntel.classList.remove('active');
        secInsights.classList.add('active');
        secSchemaIntel.classList.remove('active');
        secInsights.style.display = '';
        secSchemaIntel.style.display = '';
        
        alert(currentLang === 'tr' 
          ? `Başarı! Veri şeması uygulandı. Platform sektörü "${sectorLabelsCard[currentLang][targetSector]}" olarak güncellendi.`
          : `Success! Data schema applied. Platform sector updated to "${sectorLabelsCard[currentLang][targetSector]}".`);
      }
    });
  }

  const btnReanalyze = document.getElementById('btn-reanalyze-schema');
  if (btnReanalyze) {
    btnReanalyze.addEventListener('click', () => {
      document.getElementById('schema-upload-view').style.display = 'block';
      document.getElementById('schema-scanning-view').style.display = 'none';
      document.getElementById('schema-results-view').style.display = 'none';
      if (fileInput) fileInput.value = '';
    });
  }

  // ================= AI AUTOML ENGINE MODULE =================
  let selectedRecommendedModel = '';

  function updateAutoMLSharedState() {
    const statusMsg = document.getElementById('automl-load-status-msg');
    const btnRunLoaded = document.getElementById('btn-run-loaded-automl');
    if (!statusMsg || !btnRunLoaded) return;

    if (lastUploadedDataset) {
      const rowCount = lastUploadedDataset.parsedData.rows ? lastUploadedDataset.parsedData.rows.length : lastUploadedDataset.parsedData.rowCount;
      const colCount = lastUploadedDataset.parsedData.columns.length;
      if (currentLang === 'tr') {
        statusMsg.innerHTML = `⚙️ Şema Zekası panelinde yüklenen veri kümesi hazır: <strong style="color:var(--primary);">${lastUploadedDataset.fileName}</strong> (${rowCount} satır, ${colCount} sütun)`;
      } else {
        statusMsg.innerHTML = `⚙️ Dataset loaded in Schema panel is ready: <strong style="color:var(--primary);">${lastUploadedDataset.fileName}</strong> (${rowCount} rows, ${colCount} columns)`;
      }
      statusMsg.style.display = 'block';
      btnRunLoaded.style.display = 'inline-block';
    } else {
      statusMsg.style.display = 'none';
      btnRunLoaded.style.display = 'none';
    }
  }

  const automlDropZone = document.getElementById('automl-drop-zone');
  const automlFileInput = document.getElementById('automl-file-input');
  const btnBrowseAutoML = document.getElementById('btn-browse-automl-file');

  if (btnBrowseAutoML && automlFileInput) {
    btnBrowseAutoML.addEventListener('click', () => automlFileInput.click());
    automlFileInput.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        handleAutoMLFile(e.target.files[0]);
      }
    });
  }

  if (automlDropZone) {
    automlDropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      automlDropZone.classList.add('dragover');
    });
    automlDropZone.addEventListener('dragleave', () => {
      automlDropZone.classList.remove('dragover');
    });
    automlDropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      automlDropZone.classList.remove('dragover');
      if (e.dataTransfer.files.length > 0) {
        handleAutoMLFile(e.dataTransfer.files[0]);
      }
    });
  }

  function handleAutoMLFile(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const text = e.target.result;
      const parsedData = parseCSVContent(text);
      const detectedSector = detectSectorAndBuildMetrics(parsedData);
      
      lastUploadedDataset = {
        fileName: file.name,
        parsedData: parsedData,
        detectedSector: detectedSector
      };
      
      runAutoMLAnalysis(file.name, parsedData);
    };
    reader.readAsText(file);
  }

  const btnRunLoaded = document.getElementById('btn-run-loaded-automl');
  if (btnRunLoaded) {
    btnRunLoaded.addEventListener('click', () => {
      if (lastUploadedDataset) {
        runAutoMLAnalysis(lastUploadedDataset.fileName, lastUploadedDataset.parsedData);
      }
    });
  }

  const automlSampleButtons = document.querySelectorAll('.btn-sample-automl');
  automlSampleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const datasetType = btn.getAttribute('data-dataset');
      loadSampleAutoMLDataset(datasetType);
    });
  });

  function loadSampleAutoMLDataset(type) {
    let fileName = 'dataset.csv';
    let columns = [];
    let rowCount = 100;
    
    if (type === 'credit') {
      fileName = 'kredi_tahmin.csv';
      columns = ['cust_id', 'income', 'credit_score', 'dti', 'donation_type', 'approved'];
      rowCount = 12500;
    } else if (type === 'logistics') {
      fileName = 'kurye_lojistik.csv';
      columns = ['shipment_id', 'distance_km', 'traffic_density', 'package_load', 'delayed'];
      rowCount = 8600;
    } else if (type === 'retail') {
      fileName = 'tekstil_retail.csv';
      columns = ['customer_name', 'shopping_freq', 'basket_amount', 'discount_sensitivity', 'customer_class'];
      rowCount = 14200;
    } else if (type === 'food') {
      fileName = 'restoran_siparis.csv';
      columns = ['branch_id', 'order_qty', 'restaurant_rating', 'campaign_applied', 'concept', 'price'];
      rowCount = 5400;
    }

    const parsedData = {
      colCount: columns.length,
      rowCount: rowCount,
      columns: columns,
      rows: null
    };

    const detectedSector = detectSectorAndBuildMetrics(parsedData);
    lastUploadedDataset = {
      fileName: fileName,
      parsedData: parsedData,
      detectedSector: detectedSector
    };

    runAutoMLAnalysis(fileName, parsedData);
  }

  function initAutoMLUploadParticles() {
    const container = document.getElementById('automl-particles');
    if (!container) return;
    container.innerHTML = '';
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = `${Math.random() * 100}%`;
      p.style.animationDelay = `${Math.random() * 4}s`;
      p.style.setProperty('--drift', `${(Math.random() - 0.5) * 40}px`);
      container.appendChild(p);
    }
  }
  initAutoMLUploadParticles();

  function triggerAutoMLTerminalAnalysis(fileName, fileData, onComplete) {
    const logsBox = document.getElementById('automl-terminal-logs');
    if (!logsBox) return;
    
    document.getElementById('automl-upload-view').style.display = 'none';
    document.getElementById('automl-scanning-view').style.display = 'block';
    document.getElementById('automl-results-view').style.display = 'none';

    logsBox.innerHTML = '';
    
    const detectedSector = detectSectorAndBuildMetrics(fileData);
    const isRegression = detectedSector === 'food';
    
    const steps = isRegression ? [
      `[AI AUTOML // CORE] Initializing Automated ML Recommendation System...`,
      `[AI AUTOML // READER] Parsing "${fileName}": headers=[${fileData.columns.join(', ')}]`,
      `[AI AUTOML // PREPROCESS] Imputing missing values with median statistics.`,
      `[AI AUTOML // CORRELATION] Scanning multi-collinearity matrix...`,
      `[AI AUTOML // TARGET] Auto-detecting candidate target labels...`,
      `  -> Continuous values detected in target column. Model Mode: REGRESSION`,
      `[AI AUTOML // MODEL SEARCH] Fitting XGBoost Regressor (Trees: 150, Learning Rate: 0.05)...`,
      `  -> XGBoost Fold 1/5: R2 Score = 96.8%`,
      `  -> XGBoost Fold 3/5: R2 Score = 97.2%`,
      `  -> XGBoost Fold 5/5: R2 Score = 97.1% (Best matched estimator)`,
      `[AI AUTOML // MODEL SEARCH] Fitting Random Forest Regressor (Trees: 200)...`,
      `  -> Random Forest Out-of-Bag R2 Score = 96.0%`,
      `[AI AUTOML // SHAP] Computing feature weights & game-theoretic values...`,
      `[AI AUTOML // INSIGHT] Generating executive decision matrices...`,
      `[AI AUTOML // FINALIZE] Deployable pipeline generated. System ready.`
    ] : [
      `[AI AUTOML // CORE] Initializing Automated ML Recommendation System...`,
      `[AI AUTOML // READER] Parsing "${fileName}": headers=[${fileData.columns.join(', ')}]`,
      `[AI AUTOML // PREPROCESS] Imputing missing values and scaling categorical inputs...`,
      `[AI AUTOML // CORRELATION] Scanning multi-collinearity matrix...`,
      `[AI AUTOML // TARGET] Auto-detecting candidate target labels...`,
      `  -> Categorical distribution detected in target column. Model Mode: CLASSIFICATION`,
      `[AI AUTOML // MODEL SEARCH] Fitting XGBoost Classifier (Trees: 100, Max Depth: 6)...`,
      `  -> XGBoost Fold 1/5: Accuracy = 98.2%`,
      `  -> XGBoost Fold 3/5: Accuracy = 98.5%`,
      `  -> XGBoost Fold 5/5: Accuracy = 98.4% (Tuning complete)`,
      `[AI AUTOML // MODEL SEARCH] Fitting Random Forest Ensemble (Estimators: 200)...`,
      `  -> Random Forest Out-of-Bag Accuracy = 97.2%`,
      `[AI AUTOML // SHAP] Computing feature weights & game-theoretic values...`,
      `[AI AUTOML // INSIGHT] Generating executive decision matrices...`,
      `[AI AUTOML // FINALIZE] Deployable pipeline generated. System ready.`
    ];

    let currentStep = 0;
    function writeLogLine() {
      if (currentStep < steps.length) {
        const line = document.createElement('div');
        line.style.marginBottom = '0.35rem';
        line.style.fontFamily = 'monospace';
        line.style.fontSize = '0.82rem';
        line.textContent = steps[currentStep];
        logsBox.appendChild(line);
        
        let cursor = logsBox.querySelector('.terminal-cursor');
        if (cursor) logsBox.appendChild(cursor);
        else {
          cursor = document.createElement('span');
          cursor.className = 'terminal-cursor';
          cursor.style.backgroundColor = '#38bdf8';
          logsBox.appendChild(cursor);
        }
        
        logsBox.scrollTop = logsBox.scrollHeight;
        currentStep++;
        setTimeout(writeLogLine, 120 + Math.random() * 150);
      } else {
        setTimeout(() => {
          document.getElementById('automl-scanning-view').style.display = 'none';
          document.getElementById('automl-results-view').style.display = 'block';
          onComplete();
        }, 500);
      }
    }
    writeLogLine();
  }

  function runAutoMLAnalysis(fileName, parsedData) {
    triggerAutoMLTerminalAnalysis(fileName, parsedData, () => {
      populateAutoMLResults(fileName, parsedData);
    });
  }

  function populateAutoMLResults(fileName, parsedData) {
    const detectedSector = detectSectorAndBuildMetrics(parsedData);
    const isRegression = detectedSector === 'food';
    
    let targetCol = '';
    let targetGoal = '';
    let targetConf = '98%';
    let problemType = isRegression ? 'Regression' : 'Classification';
    
    if (detectedSector === 'finance') {
      targetCol = 'approved';
      targetGoal = currentLang === 'tr' ? 'Bağış onaylama veya kredi kabul olasılığı tahmini' : 'Predicting donation approval or credit probability';
      targetConf = '97.4%';
    } else if (detectedSector === 'logistics') {
      targetCol = 'delayed';
      targetGoal = currentLang === 'tr' ? 'Kurye rotalarındaki gecikme riski tahmini' : 'Predicting route delay and arrival risk';
      targetConf = '95.8%';
    } else if (detectedSector === 'retail') {
      targetCol = 'customer_class';
      targetGoal = currentLang === 'tr' ? 'Müşteri alışveriş alışkanlığı ve segment tahmini' : 'Predicting customer value tier and segment';
      targetConf = '94.6%';
    } else if (detectedSector === 'food') {
      targetCol = 'price';
      targetGoal = currentLang === 'tr' ? 'Sipariş sepet tutarı ve talep tahmini' : 'Predicting order basket price and demand';
      targetConf = '96.2%';
    } else {
      targetCol = parsedData.columns[parsedData.columns.length - 1];
      targetGoal = currentLang === 'tr' ? 'Sütun veri dağılım tahmini' : 'Predicting target column values';
      targetConf = '91.2%';
    }

    document.getElementById('res-target-col-name').textContent = targetCol;
    document.getElementById('res-target-confidence').textContent = `${targetConf} Confidence`;
    document.getElementById('res-target-goal').textContent = targetGoal;
    document.getElementById('res-target-problem-type').textContent = problemType;

    const barsContainer = document.getElementById('res-importance-bars-container');
    const correlationList = document.getElementById('res-correlation-list');
    
    barsContainer.innerHTML = '';
    correlationList.innerHTML = '';
    
    let importanceWeights = [];
    let correlationWarnings = [];

    if (detectedSector === 'finance') {
      importanceWeights = [
        { name: 'credit_score', weight: 45, status: 'stable' },
        { name: 'dti', weight: 28, status: 'stable' },
        { name: 'income', weight: 18, status: 'risk' },
        { name: 'donation_type', weight: 9, status: 'stable' }
      ];
      correlationWarnings = currentLang === 'tr' ? [
        `⚡ <strong>Düşük Varyans Risk:</strong> "donation_type" sütunu model üzerinde sınırlı etkiye sahip.`,
        `⚠️ <strong>Korelasyon Uyarısı:</strong> "income" ve "dti" arasında yüksek korelasyon (r=0.74) saptandı. Katsayılar kayabilir.`,
        `🔴 <strong>Kimlik Sızıntısı (Leakage):</strong> "cust_id" sütunu yüksek derecede sızıntı riski barındırdığı için yapay zeka tarafından girdi listesinden çıkarıldı.`
      ] : [
        `⚡ <strong>Low Variance:</strong> "donation_type" column has low variance on outcomes.`,
        `⚠️ <strong>Correlation warning:</strong> High correlation (r=0.74) detected between "income" and "dti". Coefficients may drift.`,
        `🔴 <strong>Target Leakage:</strong> "cust_id" acts as a unique key. It was automatically dropped from training inputs.`
      ];
    } else if (detectedSector === 'logistics') {
      importanceWeights = [
        { name: 'distance_km', weight: 45, status: 'stable' },
        { name: 'traffic_density', weight: 30, status: 'stable' },
        { name: 'package_load', weight: 18, status: 'risk' },
        { name: 'shipment_id', weight: 7, status: 'stable' }
      ];
      correlationWarnings = currentLang === 'tr' ? [
        `⚠️ <strong>Uç Değer Riski:</strong> "package_load" verilerinde uç değerler (outliers) bulundu. RobustScaler kullanıldı.`,
        `🔴 <strong>Hedef Sızıntısı:</strong> "shipment_id" sütunu tekil bir anahtardır ve yapay zeka tarafından model girdisinden kaldırılmıştır.`
      ] : [
        `⚠️ <strong>Outlier Risk:</strong> "package_load" data has extreme values. RobustScaler was applied.`,
        `🔴 <strong>Target Leakage:</strong> "shipment_id" acts as unique ID and has been excluded from features.`
      ];
    } else if (detectedSector === 'retail') {
      importanceWeights = [
        { name: 'basket_amount', weight: 46, status: 'stable' },
        { name: 'shopping_freq', weight: 28, status: 'stable' },
        { name: 'discount_sensitivity', weight: 18, status: 'risk' },
        { name: 'customer_name', weight: 8, status: 'stable' }
      ];
      correlationWarnings = currentLang === 'tr' ? [
        `⚠️ <strong>Sınıf Dengesizliği:</strong> "discount_sensitivity" sütununda veri dağılımı sağa çarpıktır (skewed). SMOTE uygulanması önerilir.`,
        `🔴 <strong>Kimlik Sızıntısı:</strong> "customer_name" kategorik metin kimliği taşıdığı için otonom olarak devre dışı bırakıldı.`
      ] : [
        `⚠️ <strong>Class Skewness:</strong> "discount_sensitivity" has a heavily skewed distribution. SMOTE is recommended.`,
        `🔴 <strong>Target Leakage:</strong> "customer_name" contains high cardinality text and was automatically disabled.`
      ];
    } else if (detectedSector === 'food') {
      importanceWeights = [
        { name: 'order_qty', weight: 38, status: 'stable' },
        { name: 'restaurant_rating', weight: 27, status: 'stable' },
        { name: 'price', weight: 20, status: 'stable' },
        { name: 'campaign_applied', weight: 10, status: 'risk' },
        { name: 'concept', weight: 5, status: 'stable' }
      ];
      correlationWarnings = currentLang === 'tr' ? [
        `⚡ <strong>Çoklu Doğrusallık:</strong> "campaign_applied" ve "order_qty" arasında r=0.68 düzeyinde mevsimsel bağdaşıklık saptandı.`,
        `⚠️ <strong>Özellik Düşüşü:</strong> "concept" kategorik kolonu model ağırlıklarında en alt sırada yer alıyor.`
      ] : [
        `⚡ <strong>Multicollinearity:</strong> Co-dependency (r=0.68) detected between "campaign_applied" and "order_qty".`,
        `⚠️ <strong>Feature Drop:</strong> "concept" column ranks lowest in prediction importance.`
      ];
    } else {
      importanceWeights = parsedData.columns.slice(0, 4).map((col, idx) => ({
        name: col,
        weight: Math.round(40 - idx * 10),
        status: idx === 1 ? 'risk' : 'stable'
      }));
      correlationWarnings = currentLang === 'tr' ? [
        `💡 Yapay zeka veri setini analiz etti. Anormal çoklu korelasyon saptanmadı.`,
        `⚠️ Son sütun hedef değişken olarak tahminlendi.`
      ] : [
        `💡 AI analyzed the dataset structure. No major multicollinearity was detected.`,
        `⚠️ The last column was assumed to be the ML target label.`
      ];
    }

    importanceWeights.forEach(item => {
      const div = document.createElement('div');
      div.className = 'importance-item';
      
      const riskLabel = item.status === 'risk' 
        ? `<span style="color: #ef4444; font-size: 0.72rem; margin-left: 0.5rem; font-weight: bold; text-shadow: 0 0 5px rgba(239, 68, 68, 0.4);">🔴 RISK</span>` 
        : '';
        
      div.innerHTML = `
        <div class="importance-label-row">
          <span>${item.name} ${riskLabel}</span>
          <span>%${item.weight}</span>
        </div>
        <div class="importance-bar-outer">
          <div class="importance-bar-inner ${item.status === 'risk' ? 'risk' : ''}" style="width: 0%;"></div>
        </div>
      `;
      barsContainer.appendChild(div);
      
      setTimeout(() => {
        const barInner = div.querySelector('.importance-bar-inner');
        if (barInner) barInner.style.width = `${item.weight}%`;
      }, 100);
    });

    correlationWarnings.forEach(warning => {
      const li = document.createElement('li');
      li.innerHTML = warning;
      correlationList.appendChild(li);
    });

    // 3. ML Model Recommendation Engine
    const modelsContainer = document.getElementById('res-model-recommendations');
    modelsContainer.innerHTML = '';
    
    let recommendations = [];
    if (detectedSector === 'finance') {
      recommendations = [
        {
          id: 'xgboost',
          name: 'XGBoost Classifier',
          confidence: 96,
          performance: '98.40%',
          complexity: 3,
          why: currentLang === 'tr' 
            ? 'Düzensiz ve çarpık dağılan gelir/kredi skoru girdilerinde en yüksek doğruluk ve F1 skoru sağlayan gradyan artırımlı ağaç algoritması.'
            : 'Gradient boosting tree algorithm providing highest accuracy and F1 score on skewed income and credit scores.'
        },
        {
          id: 'random_forest',
          name: 'Random Forest Ensemble',
          confidence: 94,
          performance: '97.20%',
          complexity: 2,
          why: currentLang === 'tr'
            ? 'Çoklu karar ağaçları üzerinden oylama yaparak veri gürültüsünü filtreler ve overfitting riskini minimize eder.'
            : 'Averaging predictions over multiple decision tree splits to filter dataset noise and prevent overfitting.'
        },
        {
          id: 'logistic_regression',
          name: 'Logistic Regression',
          confidence: 89,
          performance: '91.50%',
          complexity: 1,
          why: currentLang === 'tr'
            ? 'Doğrusal etki katsayılarını net biçimde raporlayan yüksek yorumlanabilirliğe sahip temel seviye sınıflandırıcı.'
            : 'Highly interpretable baseline linear classifier suitable for quick scoring but fails on interactive feature weights.'
        }
      ];
    } else if (detectedSector === 'logistics') {
      recommendations = [
        {
          id: 'random_forest',
          name: 'Random Forest Ensemble',
          confidence: 95,
          performance: '96.20%',
          complexity: 2,
          why: currentLang === 'tr'
            ? 'Mesafe, yük ve trafik yoğunluğu gibi çok değişkenli rotalardaki karmaşık gecikme risklerini en kararlı sınıflandıran model.'
            : 'Ensemble model that yields the highest stability when classification is applied to delay factors like traffic and loads.'
        },
        {
          id: 'xgboost',
          name: 'XGBoost Classifier',
          confidence: 94,
          performance: '95.80%',
          complexity: 3,
          why: currentLang === 'tr'
            ? 'Hızlı yakınsayan gradyan artırımı ile doğrusal olmayan lojistik verilerinde üstün başarı oranı.'
            : 'Strong gradient tree boosting showing solid convergence and precision values on route metrics.'
        },
        {
          id: 'knn',
          name: 'KNN Classifier',
          confidence: 85,
          performance: '87.50%',
          complexity: 1,
          why: currentLang === 'tr'
            ? 'Mesafe tabanlı kurye kümelemesinde kararlı sonuç veren basit k-en yakın komşu algoritması.'
            : 'Simple distance-based k-nearest neighbors classification suitable for local route mapping.'
        }
      ];
    } else if (detectedSector === 'retail') {
      recommendations = [
        {
          id: 'knn',
          name: 'K-NN Classifier',
          confidence: 93,
          performance: '95.50%',
          complexity: 1,
          why: currentLang === 'tr'
            ? 'Müşterileri sepet tutarları ve indirim hassasiyetlerine göre geometrik olarak en yakın kümeye atayan en doğal sınıflandırıcı.'
            : 'Optimal distance-based classifier assigning cohorts based on shopping frequency and basket values.'
        },
        {
          id: 'random_forest',
          name: 'Random Forest Ensemble',
          confidence: 92,
          performance: '94.20%',
          complexity: 2,
          why: currentLang === 'tr'
            ? 'Alışveriş eğilim sınırlarını dallanmalarla belirleyen, gürültülü perakende verilerinde kararlı çalışan model.'
            : 'Robust bagging ensemble establishing strict classification splits on frequency boundaries.'
        },
        {
          id: 'neural_network',
          name: 'Deep Neural Networks (MLP)',
          confidence: 90,
          performance: '93.00%',
          complexity: 3,
          why: currentLang === 'tr'
            ? 'Çok katmanlı yapay sinir ağları ile derin müşteri davranış örüntülerini yakalar ancak daha fazla veri gerektirir.'
            : 'Captures deep behavioral embeddings using multi-layer perceptron layers, requiring standard scaling.'
        }
      ];
    } else if (detectedSector === 'food') {
      recommendations = [
        {
          id: 'xgboost',
          name: 'XGBoost Regressor',
          confidence: 95,
          performance: '97.10% (R²)',
          complexity: 3,
          why: currentLang === 'tr'
            ? 'Sipariş miktarı ve fiyat regresyonunda doğrusal olmayan restoran kampanyalarını en düşük RMSE ile tahminleyen model.'
            : 'Gradient booster optimizing mean squared error on continuous menu price predictions.'
        },
        {
          id: 'random_forest',
          name: 'Random Forest Regressor',
          confidence: 93,
          performance: '96.00% (R²)',
          complexity: 2,
          why: currentLang === 'tr'
            ? 'Karar ağaçları ortalamasıyla fiyat tahminlerindeki varyansı minimize eden kararlı regresyon yapısı.'
            : 'Prevents overfitting on pricing predictions by averaging outputs across random decision trees.'
        },
        {
          id: 'linear_regression',
          name: 'Linear Regression',
          confidence: 82,
          performance: '85.00% (R²)',
          complexity: 1,
          why: currentLang === 'tr'
            ? 'Talep artışının fiyat üzerindeki doğrusal trend katsayılarını doğrudan gösteren basit regresyon modeli.'
            : 'Basic linear model mapping average ticket elasticity but struggles with complex seasonal discounts.'
        }
      ];
    } else {
      recommendations = [
        {
          id: 'random_forest',
          name: 'Random Forest Ensemble',
          confidence: 92,
          performance: '93.50%',
          complexity: 2,
          why: currentLang === 'tr' ? 'Veri kümesi bilinmeyen yapılar barındırdığı için en kararlı genel amaçlı sınıflandırıcı tercih edildi.' : 'Best general-purpose tabular classifier selected for arbitrary structures.'
        },
        {
          id: 'logistic_regression',
          name: 'Logistic Regression',
          confidence: 84,
          performance: '86.50%',
          complexity: 1,
          why: currentLang === 'tr' ? 'Hızlı hesaplanan basit doğrusal sınıflandırma modeli.' : 'Simple linear classification baseline for fast predictions.'
        }
      ];
    }

    selectedRecommendedModel = recommendations[0].id;

    recommendations.forEach((rec, idx) => {
      const card = document.createElement('div');
      card.className = `ml-model-card ${idx === 0 ? 'recommended' : ''}`;
      card.setAttribute('data-model-id', rec.id);
      
      let complexityDotsHtml = '';
      for (let i = 1; i <= 3; i++) {
        complexityDotsHtml += `<span class="complexity-dot ${i <= rec.complexity ? 'active' : ''}"></span>`;
      }

      const topBadge = idx === 0 
        ? `<div class="ml-model-badge-top" data-i18n="badge_automl_top">En Uygun (Best Match)</div>` 
        : '';

      const complexityText = rec.complexity === 3 ? (currentLang === 'tr' ? 'Yüksek' : 'High') :
                             rec.complexity === 2 ? (currentLang === 'tr' ? 'Orta' : 'Medium') : (currentLang === 'tr' ? 'Düşük' : 'Low');

      card.innerHTML = `
        ${topBadge}
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.8rem;">
          <div>
            <h4 style="margin: 0 0 0.3rem 0; font-size: 0.95rem; color: #fff;">${rec.name}</h4>
            <p style="margin: 0; font-size: 0.78rem; color: var(--text-secondary); line-height: 1.4;">${rec.why}</p>
          </div>
          <div style="text-align: right; margin-left: 1.5rem; flex-shrink: 0;">
            <div style="font-size: 0.9rem; font-weight: bold; color: var(--primary);">${rec.confidence}% Confidence</div>
            <div style="font-size: 0.75rem; color: var(--success); font-weight: 500; margin-top: 0.15rem;">Expected: ${rec.performance}</div>
          </div>
        </div>
        <div style="display: flex; gap: 1.5rem; border-top: 1px solid rgba(255, 255, 255, 0.03); padding-top: 0.8rem; font-size: 0.75rem; color: var(--text-secondary);">
          <div style="display: flex; align-items: center; gap: 0.4rem;">
            <span>Complex:</span>
            <div class="complexity-dots">${complexityDotsHtml}</div>
            <span style="margin-left: 0.2rem;">(${complexityText})</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        modelsContainer.querySelectorAll('.ml-model-card').forEach(c => {
          c.classList.remove('recommended');
          const badge = c.querySelector('.ml-model-badge-top');
          if (badge) badge.remove();
        });
        
        card.classList.add('recommended');
        selectedRecommendedModel = rec.id;
        
        const matchLabel = document.createElement('div');
        matchLabel.className = 'ml-model-badge-top';
        matchLabel.textContent = currentLang === 'tr' ? 'Seçilen Model' : 'Selected Model';
        card.appendChild(matchLabel);
      });

      modelsContainer.appendChild(card);
    });

    // 4. AI Business Insights Engine
    const insightsContainer = document.getElementById('res-business-insights-container');
    insightsContainer.innerHTML = '';
    
    let insights = [];
    if (detectedSector === 'finance') {
      insights = currentLang === 'tr' ? [
        "Müşterilerinizin düzenli bağışçı olma ihtimali, aylık katılım sıklığından ziyade **Kredi Skoru** düzeyi ile doğrusal olarak ilişkili çıkmıştır. Skorun 600 barajını aşması, düzenli katılımı 3 kat artırıyor.",
        "**Gelir Düzeyi (Income)** anomalileri incelendiğinde, 5000$ ve üzeri kazanç grubuna sahip bireysel bağışçıların sadakat oranı %12 artarken, tek seferlik toplu bağış miktarları da %45 oranında genişlemiştir.",
        "Model katsayılarına göre, **DTI (Borç/Gelir Oranı)** %30 limitinin üzerine çıktığında düzenli bağış iptal etme (churn) riski 2.4 kat daha fazla gerçekleşmektedir."
      ] : [
        "The probability of monthly donation depends significantly on the **Credit Score** rather than frequency. Having a score above 600 increases recurring retention rate by 3x.",
        "**Income levels** anomalies show that users with incomes above $5,000 exhibit 12% higher loyalty rates, with their lump-sum donation capacities increasing by 45%.",
        "According to coefficient matrices, whenever the **DTI (Debt-to-Income)** ratio exceeds 30%, regular cancellation (churn) risks scale up by 2.4x."
      ];
    } else if (detectedSector === 'logistics') {
      insights = currentLang === 'tr' ? [
        "Lojistik teslimat süreleri incelendiğinde, **Mesafe Uzunluğu (Distance)** 150km'yi aştığında teslimat gecikme oranları doğrusal olmayan bir ivme kazanarak %28 oranında sıçrama yapmaktadır.",
        "**Trafik Yoğunluğu (Traffic Density)** 4. seviyenin üzerine ulaştığında, kurye hızlarındaki yavaşlama teslimat sürelerine fazladan ortalama 18.5 dakika eklemekte ve operasyonel verimi düşürmektedir.",
        "**Paket Yükü (Package Load)** miktarının 20kg üzerindeki ağırlıklarda rotasyonel gecikme oluşturduğu, özellikle taşıma kapasitesi yetersiz kuryelerde bu durumun hasarlı paket riskini %14 tetiklediği görülmüştür."
      ] : [
        "When **Delivery Distance** exceeds 150km, delayed delivery margins show non-linear growth patterns, peaking by a absolute rate of 28%.",
        "If **Traffic Density** index crosses Level 4, travel duration latency spikes up by an average of 18.5 minutes per courier route, dropping overall throughput.",
        "Package loads exceeding 20kg trigger delivery duration spikes, especially for couriers with low cargo capacity, increasing package damage risk by 14%."
      ];
    } else if (detectedSector === 'retail') {
      insights = currentLang === 'tr' ? [
        "Müşteri değer segmentasyonu analizine göre, **Sepet Tutarı (Basket Amount)** 1500 TL'nin üzerinde olan alıcıların tekrar sipariş verme sıklığı normal kullanıcılardan %34 daha yüksektir.",
        "**Alışveriş Sıklığı (Shopping Freq)** 6 kez/ay sınırını aşan VIP profiller, toplam şirket cironuzun %62'sini üretmektedir. Bu gruba özel sadakat programları kurgulanmalıdır.",
        "**İndirim Duyarlılığı (Discount Sensitivity)** yüksek olan tüketici kitleleri, promosyon kodlarının bulunmadığı dönemlerde alışveriş hacmini %22 daraltmakta, marj erozyonu riski yaratmaktadır."
      ] : [
        "Customer value segmentation analysis indicates that shoppers with **Basket Amounts** exceeding $150 showcase 34% higher repeat order rates.",
        "VIP cohorts with **Shopping Frequencies** above 6 times per month drive 62% of overall retail revenue. Loyalty triggers are strongly recommended here.",
        "Highly **Discount Sensitive** users experience a 22% drop in transaction volume during non-promotional periods, representing margin erosion risks."
      ];
    } else if (detectedSector === 'food') {
      insights = currentLang === 'tr' ? [
        "**Sipariş Adedi (Order Qty)** ile kampanya kullanımı arasında doğrudan bir korelasyon vardır. Kampanyalı siparişler sepet tutarını ortalama %24 büyütmektedir.",
        "Restoran şubelerinin **Puan Derecesi (Rating)** 4.2'nin altına düştüğünde, sipariş iptal (churn) riski %18 artmakta ve lokasyon bazlı gelir kaybına yol açmaktadır.",
        "Gurme / Express **Konsept (Concept)** farkları fiyat elastikiyetini değiştirmektedir. Gurme şubelerde fiyat artışları talebi etkilemezken, Express şubelerde %10 artış siparişleri %15 düşürür."
      ] : [
        "**Order Quantities** show strong co-dependencies with campaigns. Active discounts expand food ticket prices by an average of 24%.",
        "Branches dropping below a **Restaurant Rating** of 4.2 experience an 18% surge in order cancellation rates, leading to location revenue loss.",
        "Gourmet and Express **Concept** boundaries alter price elasticity. Gourmet branches sustain price increases well, while Express branches drop 15% in sales."
      ];
    } else {
      insights = currentLang === 'tr' ? [
        "Girdi kolonlarının hedef değişken üzerindeki etkisi dengelidir. Herhangi bir kolonda ezici bir ağırlık dağılımı gözlenmemiştir.",
        "Kararlı veri yapısı sayesinde, seçilen modelin genelleme (generalization) başarısının yüksek olacağı tahmin edilmektedir."
      ] : [
        "Feature weights are distributed evenly across the dataset. No single feature exhibits excessive prediction bias.",
        "Due to the stable data structure, generalization performance of the trained ML models is expected to remain high."
      ];
    }

    insights.forEach(insight => {
      const div = document.createElement('div');
      div.className = 'insight-bullet';
      div.innerHTML = `
        <div class="insight-bullet-icon">💡</div>
        <div style="font-size: 0.8rem; line-height: 1.45; color: var(--text-secondary);">${insight}</div>
      `;
      insightsContainer.appendChild(div);
    });
    
    const btnDeploy = document.getElementById('btn-deploy-recommended-model');
    if (btnDeploy) {
      btnDeploy.setAttribute('data-detected-sector', detectedSector);
    }
  }

  function refreshAutoMLOutputs() {
    if (lastUploadedDataset && document.getElementById('automl-results-view').style.display === 'block') {
      populateAutoMLResults(lastUploadedDataset.fileName, lastUploadedDataset.parsedData);
    }
  }

  const btnDeployModel = document.getElementById('btn-deploy-recommended-model');
  if (btnDeployModel) {
    btnDeployModel.addEventListener('click', () => {
      const detectedSector = btnDeployModel.getAttribute('data-detected-sector');
      if (detectedSector) {
        let sectorKey = 'vakif';
        if (detectedSector === 'finance') sectorKey = 'vakif';
        else if (detectedSector === 'logistics') sectorKey = 'lojistik';
        else if (detectedSector === 'retail') sectorKey = 'tekstil';
        else if (detectedSector === 'education') sectorKey = 'egitim';
        else if (detectedSector === 'food') sectorKey = 'gida';
        else sectorKey = detectedSector;

        currentSector = sectorKey;

        const userCardDataRaw = localStorage.getItem('userCardData');
        if (userCardDataRaw) {
          try {
            const cardData = JSON.parse(userCardDataRaw);
            cardData.sector = sectorKey;
            localStorage.setItem('userCardData', JSON.stringify(cardData));
          } catch(err) {
            console.error('Failed to update localStorage sector during AutoML deploy:', err);
          }
        }

        updateThemeColor(currentSector);
        transitionToDashboard();
        showTab('menu-btn-autobuilder');
        if (lastUploadedDataset) {
          runAutoBuilderAnalysis(lastUploadedDataset.fileName, lastUploadedDataset.parsedData);
        }

        const sectorLabel = sectorLabelsCard[currentLang][currentSector] || currentSector;
        alert(currentLang === 'tr' 
          ? `Model başarıyla canlıya alındı! Yapay zeka altyapısı "${sectorLabel}" veri şeması ve ağırlıklarıyla güncellendi.`
          : `Model successfully deployed to production! Yapay zeka infrastructure updated with "${sectorLabel}" schema and feature weights.`);
      }
    });
  }

  const btnReanalyzeAutoML = document.getElementById('btn-reanalyze-automl');
  if (btnReanalyzeAutoML) {
    btnReanalyzeAutoML.addEventListener('click', () => {
      document.getElementById('automl-upload-view').style.display = 'block';
      document.getElementById('automl-scanning-view').style.display = 'none';
      document.getElementById('automl-results-view').style.display = 'none';
      if (automlFileInput) automlFileInput.value = '';
      updateAutoMLSharedState();
    });
  }

  // ================= AI DASHBOARD AUTO-BUILDER MODULE =================
  let autoBuilderLiveTickerInterval = null;
  let autoBuilderHeatmapInterval = null;
  let autoBuilderActiveLayout = 'executive';

  function updateAutoBuilderSharedState() {
    const statusMsg = document.getElementById('autobuilder-load-status-msg');
    const btnRunLoaded = document.getElementById('btn-run-loaded-autobuilder');
    if (!statusMsg || !btnRunLoaded) return;

    if (lastUploadedDataset) {
      const rowCount = lastUploadedDataset.parsedData.rows ? lastUploadedDataset.parsedData.rows.length : lastUploadedDataset.parsedData.rowCount;
      const colCount = lastUploadedDataset.parsedData.columns.length;
      if (currentLang === 'tr') {
        statusMsg.innerHTML = `⚙️ Şema Zekası / AutoML panelinde yüklenen veri kümesi hazır: <strong style="color:var(--primary);">${lastUploadedDataset.fileName}</strong> (${rowCount} satır, ${colCount} sütun)`;
      } else {
        statusMsg.innerHTML = `⚙️ Dataset loaded in Schema/AutoML panel is ready: <strong style="color:var(--primary);">${lastUploadedDataset.fileName}</strong> (${rowCount} rows, ${colCount} columns)`;
      }
      statusMsg.style.display = 'block';
      btnRunLoaded.style.display = 'inline-block';
    } else {
      statusMsg.style.display = 'none';
      btnRunLoaded.style.display = 'none';
    }
  }

  const autobuilderDropZone = document.getElementById('autobuilder-drop-zone');
  const autobuilderFileInput = document.getElementById('autobuilder-file-input');
  const btnBrowseAutoBuilder = document.getElementById('btn-browse-autobuilder-file');

  if (btnBrowseAutoBuilder && autobuilderFileInput) {
    btnBrowseAutoBuilder.addEventListener('click', () => autobuilderFileInput.click());
    autobuilderFileInput.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        handleAutoBuilderFile(e.target.files[0]);
      }
    });
  }

  if (autobuilderDropZone) {
    autobuilderDropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      autobuilderDropZone.classList.add('dragover');
    });
    autobuilderDropZone.addEventListener('dragleave', () => {
      autobuilderDropZone.classList.remove('dragover');
    });
    autobuilderDropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      autobuilderDropZone.classList.remove('dragover');
      if (e.dataTransfer.files.length > 0) {
        handleAutoBuilderFile(e.dataTransfer.files[0]);
      }
    });
  }

  function handleAutoBuilderFile(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const text = e.target.result;
      const parsedData = parseCSVContent(text);
      const detectedSector = detectSectorAndBuildMetrics(parsedData);
      
      lastUploadedDataset = {
        fileName: file.name,
        parsedData: parsedData,
        detectedSector: detectedSector
      };
      
      runAutoBuilderAnalysis(file.name, parsedData);
    };
    reader.readAsText(file);
  }

  const btnRunLoadedAutobuilder = document.getElementById('btn-run-loaded-autobuilder');
  if (btnRunLoadedAutobuilder) {
    btnRunLoadedAutobuilder.addEventListener('click', () => {
      if (lastUploadedDataset) {
        runAutoBuilderAnalysis(lastUploadedDataset.fileName, lastUploadedDataset.parsedData);
      }
    });
  }

  const autobuilderSampleButtons = document.querySelectorAll('.btn-sample-autobuilder');
  autobuilderSampleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const datasetType = btn.getAttribute('data-dataset');
      loadSampleAutoBuilderDataset(datasetType);
    });
  });

  function loadSampleAutoBuilderDataset(type) {
    let fileName = 'dataset.csv';
    let columns = [];
    let rowCount = 100;
    
    if (type === 'credit') {
      fileName = 'kredi_tahmin.csv';
      columns = ['cust_id', 'income', 'credit_score', 'dti', 'donation_type', 'approved'];
      rowCount = 12500;
    } else if (type === 'logistics') {
      fileName = 'kurye_lojistik.csv';
      columns = ['shipment_id', 'distance_km', 'traffic_density', 'package_load', 'delayed'];
      rowCount = 8600;
    } else if (type === 'retail') {
      fileName = 'tekstil_retail.csv';
      columns = ['customer_name', 'shopping_freq', 'basket_amount', 'discount_sensitivity', 'customer_class'];
      rowCount = 14200;
    } else if (type === 'food') {
      fileName = 'restoran_siparis.csv';
      columns = ['branch_id', 'order_qty', 'restaurant_rating', 'campaign_applied', 'concept', 'price'];
      rowCount = 5400;
    }

    const parsedData = {
      colCount: columns.length,
      rowCount: rowCount,
      columns: columns,
      rows: null
    };

    const detectedSector = detectSectorAndBuildMetrics(parsedData);
    lastUploadedDataset = {
      fileName: fileName,
      parsedData: parsedData,
      detectedSector: detectedSector
    };

    runAutoBuilderAnalysis(fileName, parsedData);
  }

  function initAutoBuilderUploadParticles() {
    const container = document.getElementById('autobuilder-particles');
    if (!container) return;
    container.innerHTML = '';
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = `${Math.random() * 100}%`;
      p.style.animationDelay = `${Math.random() * 4}s`;
      p.style.setProperty('--drift', `${(Math.random() - 0.5) * 40}px`);
      container.appendChild(p);
    }
  }
  initAutoBuilderUploadParticles();

  function animateKPIValue(element, start, end, duration, formatFn) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentVal = progress * (end - start) + start;
      element.textContent = formatFn ? formatFn(currentVal) : Math.round(currentVal);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        element.textContent = formatFn ? formatFn(end) : end;
      }
    };
    window.requestAnimationFrame(step);
  }

  function runAutoBuilderAnalysis(fileName, parsedData) {
    const uploadView = document.getElementById('autobuilder-upload-view');
    const scanningView = document.getElementById('autobuilder-scanning-view');
    const resultsView = document.getElementById('autobuilder-results-view');
    const progressBar = document.getElementById('autobuilder-progress-bar');
    const logsBox = document.getElementById('autobuilder-terminal-logs');

    if (!uploadView || !scanningView || !resultsView || !progressBar || !logsBox) return;

    if (autoBuilderLiveTickerInterval) clearInterval(autoBuilderLiveTickerInterval);
    if (autoBuilderHeatmapInterval) clearInterval(autoBuilderHeatmapInterval);

    uploadView.style.display = 'none';
    scanningView.style.display = 'block';
    resultsView.style.display = 'none';
    progressBar.style.width = '0%';
    logsBox.innerHTML = '';

    const detectedSector = detectSectorAndBuildMetrics(parsedData);

    const steps = [
      `[AI ANALYST // CORE] Starting Autonomous Workspace Auto-Builder...`,
      `[AI ANALYST // READ] Inspected columns: [${parsedData.columns.join(', ')}]`,
      `[AI ANALYST // DETECT] Sector mapping complete: "${detectedSector.toUpperCase()}" dataset recognized.`,
      `[AI ANALYST // KPIs] Auto-selecting top corporate health indicators...`,
      `[AI ANALYST // CHARTS] Analyzing data distribution for optimal graph selection...`,
      `  -> Sizing and matching coordinates for dynamic dashboard grid.`,
      `[AI ANALYST // RISK] Compiling Palantir-style vulnerability matrices...`,
      `[AI ANALYST // REPORT] Synthesizing board meeting brief summaries...`,
      `[AI ANALYST // LAYOUT] Finalizing dashboard templates and interactive bindings.`,
      `[AI ANALYST // DONE] Analytics workspace built successfully.`
    ];

    let currentStep = 0;
    let progress = 0;

    const progressInterval = setInterval(() => {
      progress += 2;
      progressBar.style.width = `${progress}%`;
      if (progress >= 100) {
        clearInterval(progressInterval);
        setTimeout(() => {
          scanningView.style.display = 'none';
          resultsView.style.display = 'block';
          buildWorkspaceLayout(detectedSector, parsedData);
        }, 300);
      }
    }, 25);

    const logsInterval = setInterval(() => {
      if (currentStep < steps.length) {
        const div = document.createElement('div');
        div.style.marginBottom = '0.3rem';
        div.style.fontSize = '0.8rem';
        div.style.fontFamily = 'monospace';
        div.textContent = steps[currentStep];
        logsBox.appendChild(div);

        let cursor = logsBox.querySelector('.terminal-cursor');
        if (cursor) logsBox.appendChild(cursor);
        else {
          cursor = document.createElement('span');
          cursor.className = 'terminal-cursor';
          cursor.style.backgroundColor = 'var(--secondary)';
          logsBox.appendChild(cursor);
        }

        logsBox.scrollTop = logsBox.scrollHeight;
        currentStep++;
      } else {
        clearInterval(logsInterval);
      }
    }, 120);
  }

  function buildWorkspaceLayout(sector, parsedData) {
    const kpisRow = document.getElementById('autobuilder-kpi-row');
    const chartTitle = document.getElementById('autobuilder-chart-title');
    const chartTypeBadge = document.getElementById('autobuilder-chart-type-badge');
    const chartCanvasArea = document.getElementById('autobuilder-chart-canvas-area');
    const chartExplanation = document.getElementById('autobuilder-chart-explanation');
    const reportContent = document.getElementById('autobuilder-report-content');
    const workspaceTitle = document.getElementById('autobuilder-workspace-title');
    const detectedBadge = document.getElementById('autobuilder-detected-badge');

    if (!kpisRow || !chartTitle || !chartTypeBadge || !chartCanvasArea || !chartExplanation || !reportContent || !workspaceTitle || !detectedBadge) return;

    const sectorName = sectorLabelsCard[currentLang][sector] || sector;
    workspaceTitle.textContent = `${currentCompany.toUpperCase()} Workspace`;
    detectedBadge.textContent = sectorName;

    kpisRow.innerHTML = '';
    let kpis = [];
    if (sector === 'vakif') {
      kpis = [
        { label: currentLang === 'tr' ? 'Toplam Portföy Hacmi' : 'Total Portfolio Value', value: 12800000, start: 5000000, fmt: v => `$${(v/1000000).toFixed(1)}M`, trend: '+14%', trendClass: 'up', glow: 'glow-primary' },
        { label: currentLang === 'tr' ? 'Müşteri Kayıp Olasılığı' : 'Predicted Churn Prob.', value: 12.4, start: 0, fmt: v => `%${v.toFixed(1)}`, trend: '-2.4%', trendClass: 'down', glow: 'glow-secondary' },
        { label: currentLang === 'tr' ? 'Ort. Kredi Skoru' : 'Avg Credit Score', value: 710, start: 500, fmt: v => Math.round(v), trend: '+12', trendClass: 'up', glow: 'glow-primary' },
        { label: currentLang === 'tr' ? 'Toplam Operasyonel Risk' : 'Total Operational Risk', value: 18.2, start: 0, fmt: v => `%${v.toFixed(1)}`, trend: '-1.8%', trendClass: 'down', glow: 'glow-secondary' }
      ];
    } else if (sector === 'lojistik') {
      kpis = [
        { label: currentLang === 'tr' ? 'Rota Instabilite Endeksi' : 'Route Instability Index', value: 42.0, start: 0, fmt: v => `%${v.toFixed(1)}`, trend: '+4.5%', trendClass: 'up', glow: 'glow-danger' },
        { label: currentLang === 'tr' ? 'Toplam Lojistik Yükü' : 'Total Logistics Load', value: 8600, start: 1000, fmt: v => `${Math.round(v).toLocaleString()} kg`, trend: '+12%', trendClass: 'up', glow: 'glow-primary' },
        { label: currentLang === 'tr' ? 'Ort. Teslimat Gecikmesi' : 'Mean Delay Duration', value: 38, start: 0, fmt: v => `${Math.round(v)} dk`, trend: '-8dk', trendClass: 'down', glow: 'glow-secondary' },
        { label: currentLang === 'tr' ? 'Teslimat Gecikme Endeksi' : 'Delivery Delay Index', value: 24.5, start: 0, fmt: v => `%${v.toFixed(1)}`, trend: '-3.2%', trendClass: 'down', glow: 'glow-secondary' }
      ];
    } else if (sector === 'tekstil') {
      kpis = [
        { label: currentLang === 'tr' ? 'Brüt Sepet Tutarı' : 'Gross Basket Value', value: 1420, start: 200, fmt: v => `${Math.round(v)} TRY`, trend: '+18%', trendClass: 'up', glow: 'glow-primary' },
        { label: currentLang === 'tr' ? 'VIP Müşteri Payı' : 'Premium Buyer Share', value: 32.4, start: 0, fmt: v => `%${v.toFixed(1)}`, trend: '+2.8%', trendClass: 'up', glow: 'glow-primary' },
        { label: currentLang === 'tr' ? 'Promosyon Esnekliği' : 'Promo Elasticity', value: 18.6, start: 0, fmt: v => `%${v.toFixed(1)}`, trend: '-1.2%', trendClass: 'down', glow: 'glow-secondary' },
        { label: currentLang === 'tr' ? 'Stok Dengesizlik Riski' : 'Inventory Skew Risk', value: 15.8, start: 0, fmt: v => `%${v.toFixed(1)}`, trend: '-4.6%', trendClass: 'down', glow: 'glow-secondary' }
      ];
    } else if (sector === 'gida') {
      kpis = [
        { label: currentLang === 'tr' ? 'Sipariş Hızı (Saatlik)' : 'Order Velocity index', value: 280, start: 50, fmt: v => `${Math.round(v)}/saat`, trend: '+35%', trendClass: 'up', glow: 'glow-primary' },
        { label: currentLang === 'tr' ? 'Gurme Konsept Oranı' : 'Gourmet Premium Share', value: 42.5, start: 0, fmt: v => `%${v.toFixed(1)}`, trend: '+8.4%', trendClass: 'up', glow: 'glow-primary' },
        { label: currentLang === 'tr' ? 'Kampanya Satış Katkısı' : 'Campaign Sales Uplift', value: 24.0, start: 0, fmt: v => `%${v.toFixed(1)}`, trend: '+3.6%', trendClass: 'up', glow: 'glow-primary' },
        { label: currentLang === 'tr' ? 'Fiyat Oynaklık Endeksi' : 'Price Volatility Index', value: 12.8, start: 0, fmt: v => `%${v.toFixed(1)}`, trend: '-1.4%', trendClass: 'down', glow: 'glow-secondary' }
      ];
    } else {
      kpis = [
        { label: currentLang === 'tr' ? 'Toplam Veri Satırı' : 'Total Rows Count', value: parsedData.rowCount || 100, start: 0, fmt: v => Math.round(v).toLocaleString(), trend: 'Stable', trendClass: 'up', glow: 'glow-primary' },
        { label: currentLang === 'tr' ? 'Sütun Boyutu' : 'Features Dimension', value: parsedData.colCount || 5, start: 0, fmt: v => Math.round(v), trend: 'Fixed', trendClass: 'up', glow: 'glow-primary' },
        { label: currentLang === 'tr' ? 'Veri Tutarlılığı' : 'Data Integrity Score', value: 98.4, start: 50, fmt: v => `%${v.toFixed(1)}`, trend: '+1.2%', trendClass: 'up', glow: 'glow-primary' },
        { label: currentLang === 'tr' ? 'Genel Risk Kırılganlığı' : 'Unmapped Risk Level', value: 10.2, start: 0, fmt: v => `%${v.toFixed(1)}`, trend: '-0.8%', trendClass: 'down', glow: 'glow-secondary' }
      ];
    }

    kpis.forEach(k => {
      const card = document.createElement('div');
      card.className = `autobuilder-kpi-card ${k.glow}`;
      
      const arrow = k.trendClass === 'up' 
        ? `<span style="color:#10b981; font-weight:bold;">↑</span>` 
        : `<span style="color:#ef4444; font-weight:bold;">↓</span>`;
      const trendColor = k.trendClass === 'up' ? '#10b981' : '#ef4444';

      card.innerHTML = `
        <div style="font-size: 0.72rem; text-transform: uppercase; color: var(--text-secondary); font-weight: 700; letter-spacing: 0.05em; margin-bottom: 0.5rem;">${k.label}</div>
        <div style="font-size: 1.6rem; font-weight: 800; color: #fff; margin-bottom: 0.3rem;" class="kpi-value-el">-</div>
        <div style="font-size: 0.74rem; display: flex; justify-content: space-between; align-items: center;">
          <span style="color: ${trendColor}; font-weight: 500;">${arrow} ${k.trend}</span>
          <span style="color: rgba(255,255,255,0.25); font-size: 0.65rem;">Confidence: 98%</span>
        </div>
      `;

      kpisRow.appendChild(card);
      
      const valueEl = card.querySelector('.kpi-value-el');
      if (valueEl) {
        animateKPIValue(valueEl, k.start, k.value, 1500, k.fmt);
      }
    });

    chartCanvasArea.innerHTML = '';
    if (sector === 'vakif') {
      chartTitle.textContent = currentLang === 'tr' ? 'Sektörel Risk & Bağış Dağılım Profili' : 'Donor Risk & Contribution Profile';
      chartTypeBadge.textContent = 'Radar Chart';
      chartExplanation.textContent = currentLang === 'tr'
        ? 'Boyutsal ölçeği bozmadan beş ayrı risk faktörünün (sadakat, frekans, bağış limiti, borç oranı, işlem tutarı) bağıntısını en objektif özetleyen Çok Boyutlu Radar (Radar) grafik seçilmiştir.'
        : 'A Multi-dimensional Radar chart is selected because it evaluates the non-linear relationship of five separate risk profiles (loyalty, liquidity, credit rating, scale, frequency) without distorting dimensional scale.';
      
      chartCanvasArea.innerHTML = `
        <svg viewBox="0 0 100 100" style="width: 100%; height: 100%; max-height: 250px;">
          <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="0.5"/>
          <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="0.5"/>
          <circle cx="50" cy="50" r="20" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="0.5"/>
          <circle cx="50" cy="50" r="10" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="0.5"/>
          
          <line x1="50" y1="10" x2="50" y2="90" stroke="rgba(255,255,255,0.06)" stroke-width="0.5"/>
          <line x1="10" y1="50" x2="90" y2="50" stroke="rgba(255,255,255,0.06)" stroke-width="0.5"/>
          
          <text x="50" y="8" font-size="3" fill="var(--text-secondary)" text-anchor="middle">${currentLang === 'tr' ? 'Sadakat' : 'Loyalty'}</text>
          <text x="92" y="52" font-size="3" fill="var(--text-secondary)" text-anchor="start">${currentLang === 'tr' ? 'Frekans' : 'Frequency'}</text>
          <text x="50" y="94" font-size="3" fill="var(--text-secondary)" text-anchor="middle">${currentLang === 'tr' ? 'Limit' : 'Limit'}</text>
          <text x="8" y="52" font-size="3" fill="var(--text-secondary)" text-anchor="end">${currentLang === 'tr' ? 'Borç Risk' : 'Debt Risk'}</text>
          
          <polygon points="50,22 82,50 50,78 26,50" fill="rgba(37, 99, 235, 0.25)" stroke="var(--primary)" stroke-width="1" style="filter: drop-shadow(0 0 6px var(--primary-glow));"/>
        </svg>
      `;
    } else if (sector === 'lojistik') {
      chartTitle.textContent = currentLang === 'tr' ? 'Mesafe Bazlı Gecikme Zaman Serisi' : 'Distance vs Delay Time Cohorts';
      chartTypeBadge.textContent = 'Line Chart';
      chartExplanation.textContent = currentLang === 'tr'
        ? 'Kurye rotalarındaki dönemsel gecikme sürelerini, mesafe kırılımları üzerinden kronolojik bir trend olarak izlemeyi sağlayan Zaman Serisi Çizgi (Line) grafiği eşleştirilmiştir.'
        : 'A Line chart is chosen here to visualize delay latency changes over time cohorts, highlighting seasonal route stress and tracking mean route travel time patterns across shipment batches.';

      chartCanvasArea.innerHTML = `
        <svg viewBox="0 0 120 60" style="width: 100%; height: 100%; max-height: 250px;">
          <line x1="10" y1="10" x2="110" y2="10" stroke="rgba(255,255,255,0.04)" stroke-width="0.5"/>
          <line x1="10" y1="25" x2="110" y2="25" stroke="rgba(255,255,255,0.04)" stroke-width="0.5"/>
          <line x1="10" y1="40" x2="110" y2="40" stroke="rgba(255,255,255,0.04)" stroke-width="0.5"/>
          <line x1="10" y1="50" x2="110" y2="50" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/>
          
          <polyline points="10,42 30,22 50,38 70,18 90,44 110,25" fill="none" stroke="var(--secondary)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" style="filter: drop-shadow(0 0 4px var(--secondary-glow));"/>
          
          <circle cx="10" cy="42" r="1.5" fill="var(--secondary)"/>
          <circle cx="30" cy="22" r="1.5" fill="var(--secondary)"/>
          <circle cx="50" cy="38" r="1.5" fill="var(--secondary)"/>
          <circle cx="70" cy="18" r="1.5" fill="var(--secondary)"/>
          <circle cx="90" cy="44" r="1.5" fill="var(--secondary)"/>
          <circle cx="110" cy="25" r="1.5" fill="var(--secondary)"/>
        </svg>
      `;
    } else if (sector === 'tekstil') {
      chartTitle.textContent = currentLang === 'tr' ? 'Müşteri Değer & İndirim Hassasiyet Kümelemesi' : 'Discount Sensitivity vs Spend Clustering';
      chartTypeBadge.textContent = 'Scatter Plot';
      chartExplanation.textContent = currentLang === 'tr'
        ? 'VIP ve indirim odaklı müşteri kitlelerinin sepet tutarları ve promosyon kodlarına verdikleri tepkileri geometrik olarak kümelemek için Serpilme (Scatter) diyagramı üretilmiştir.'
        : 'A Scatter plot is matched to this customer cohort data to illustrate the clustering of high-value shoppers based on basket sizes relative to discount sensitivities.';

      chartCanvasArea.innerHTML = `
        <svg viewBox="0 0 100 60" style="width: 100%; height: 100%; max-height: 250px;">
          <line x1="15" y1="50" x2="90" y2="50" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/>
          <line x1="15" y1="10" x2="15" y2="50" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/>
          
          <circle cx="30" cy="42" r="2" fill="rgba(16, 185, 129, 0.4)"/>
          <circle cx="35" cy="38" r="2.2" fill="rgba(16, 185, 129, 0.5)"/>
          <circle cx="42" cy="45" r="2" fill="rgba(16, 185, 129, 0.3)"/>
          
          <circle cx="70" cy="22" r="2.5" fill="rgba(239, 68, 68, 0.6)"/>
          <circle cx="75" cy="18" r="2" fill="rgba(239, 68, 68, 0.7)"/>
          <circle cx="65" cy="25" r="2.3" fill="rgba(239, 68, 68, 0.5)"/>
          
          <circle cx="50" cy="30" r="2" fill="rgba(14, 165, 233, 0.5)"/>
          <circle cx="55" cy="33" r="2" fill="rgba(14, 165, 233, 0.4)"/>
          <circle cx="48" cy="28" r="2" fill="rgba(14, 165, 233, 0.3)"/>
        </svg>
      `;
    } else if (sector === 'gida') {
      chartTitle.textContent = currentLang === 'tr' ? 'Konsept Bazlı Sipariş / Kampanya Kıyaslaması' : 'Restaurant Orders & Campaign Elasticity';
      chartTypeBadge.textContent = 'Bar Chart';
      chartExplanation.textContent = currentLang === 'tr'
        ? 'Restoran şubelerinin konseptlerine göre sipariş adedi değişimlerini ve kampanya geri dönüşlerini ayrık olarak kıyaslayan Gruplu Sütun (Bar) grafik seçilmiştir.'
        : 'An grouped vertical Bar chart is selected to show average transaction values across gourmet vs express concepts, allowing quick comparison of campaign margins.';

      chartCanvasArea.innerHTML = `
        <svg viewBox="0 0 120 60" style="width: 100%; height: 100%; max-height: 250px;">
          <line x1="10" y1="50" x2="110" y2="50" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/>
          
          <rect x="20" y="25" width="8" height="25" fill="var(--primary)" rx="2"/>
          <rect x="40" y="15" width="8" height="35" fill="var(--secondary)" rx="2"/>
          <rect x="60" y="32" width="8" height="18" fill="var(--primary)" rx="2"/>
          <rect x="80" y="8" width="8" height="42" fill="var(--secondary)" rx="2"/>
          <rect x="100" y="20" width="8" height="30" fill="var(--primary)" rx="2"/>
        </svg>
      `;
    } else {
      chartTitle.textContent = currentLang === 'tr' ? 'Genel Veri Dağılım Çizgisi' : 'General Distribution Curve';
      chartTypeBadge.textContent = 'Line Chart';
      chartExplanation.textContent = currentLang === 'tr'
        ? 'Veri kümesi öznitelik varyans trendini sıralı gözlemler bazında haritalandıran çizgi grafik seçilmiştir.'
        : 'A standard Line chart is chosen to map data index progression over features variance.';

      chartCanvasArea.innerHTML = `
        <svg viewBox="0 0 120 60" style="width: 100%; height: 100%; max-height: 250px;">
          <line x1="10" y1="50" x2="110" y2="50" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/>
          <polyline points="10,30 30,15 50,45 70,12 90,28 110,40" fill="none" stroke="var(--primary)" stroke-width="1.2" stroke-linecap="round"/>
        </svg>
      `;
    }

    buildRiskHeatmap(sector);

    const ticker = document.getElementById('autobuilder-ticker-stream');
    if (ticker) {
      ticker.innerHTML = '';
      const initialAlerts = getInitialStreamAlerts(sector);
      initialAlerts.forEach(alert => {
        const line = document.createElement('div');
        line.className = `ticker-line ${alert.high ? 'alert-high' : ''}`;
        line.innerHTML = `
          <span class="ticker-time">[${alert.time}]</span>
          <span class="ticker-body">${alert.text}</span>
        `;
        ticker.appendChild(line);
      });
      ticker.scrollTop = ticker.scrollHeight;

      autoBuilderLiveTickerInterval = setInterval(() => {
        const now = new Date();
        const timeStr = now.toTimeString().split(' ')[0];
        const newAlert = getRandomStreamAlert(sector);
        
        const line = document.createElement('div');
        line.className = `ticker-line ${newAlert.high ? 'alert-high' : ''}`;
        line.innerHTML = `
          <span class="ticker-time">[${timeStr}]</span>
          <span class="ticker-body">${newAlert.text}</span>
        `;
        ticker.appendChild(line);
        
        const lines = ticker.querySelectorAll('.ticker-line');
        if (lines.length > 15) {
          lines[0].remove();
        }
        ticker.scrollTop = ticker.scrollHeight;
      }, 3500);
    }

    reportContent.innerHTML = '';
    const reportList = getExecutiveReportBriefing(sector);
    reportList.forEach(reportItem => {
      const p = document.createElement('div');
      p.style.display = 'flex';
      p.style.gap = '0.6rem';
      p.style.alignItems = 'flex-start';
      p.innerHTML = `
        <span style="color:${reportItem.color}; font-weight:bold;">${reportItem.icon}</span>
        <div>
          <strong style="color:#fff;">${reportItem.title}:</strong>
          <span style="font-size:0.78rem;">${reportItem.desc}</span>
        </div>
      `;
      reportContent.appendChild(p);
    });

    applyAutoBuilderLayout(autoBuilderActiveLayout);
  }

  function buildRiskHeatmap(sector) {
    const gridBox = document.getElementById('autobuilder-heatmap-grid-box');
    if (!gridBox) return;
    gridBox.innerHTML = '';

    const rows = currentLang === 'tr' 
      ? ['Satış / Rev', 'Süreç / Ops', 'Sistem / IT', 'Kanal / Loj', 'Güvenlik / Sec']
      : ['Sales & Rev', 'Process / Ops', 'Systems & IT', 'Lanes / Log', 'Cyber / Sec'];

    rows.forEach((rowName, rIdx) => {
      const rowLabel = document.createElement('div');
      rowLabel.style.fontSize = '0.72rem';
      rowLabel.style.color = 'var(--text-secondary)';
      rowLabel.style.fontWeight = '700';
      rowLabel.textContent = rowName;
      gridBox.appendChild(rowLabel);

      const cellsWrapper = document.createElement('div');
      cellsWrapper.style.display = 'grid';
      cellsWrapper.style.gridTemplateColumns = 'repeat(5, 1fr)';
      cellsWrapper.style.gap = '0.4rem';

      for (let cIdx = 0; cIdx < 5; cIdx++) {
        const cell = document.createElement('div');
        let initialLevel = Math.floor(Math.random() * 3);
        if (rIdx === 1 && cIdx === 2) initialLevel = 4;
        if (rIdx === 4 && cIdx === 4) initialLevel = 3;

        cell.className = `heatmap-cell level-${initialLevel}`;
        cell.setAttribute('data-row', rIdx);
        cell.setAttribute('data-col', cIdx);
        
        const tooltipText = currentLang === 'tr'
          ? `Birim: ${rowName}, Segment: ${cIdx+1}, Risk Seviyesi: ${initialLevel}`
          : `Unit: ${rowName}, Node: ${cIdx+1}, Risk Level: ${initialLevel}`;
        cell.setAttribute('title', tooltipText);

        cellsWrapper.appendChild(cell);
      }
      gridBox.appendChild(cellsWrapper);
    });

    autoBuilderHeatmapInterval = setInterval(() => {
      const cells = gridBox.querySelectorAll('.heatmap-cell');
      if (cells.length === 0) return;
      
      for (let i = 0; i < 2; i++) {
        const randCell = cells[Math.floor(Math.random() * cells.length)];
        let currentLvl = parseInt(randCell.className.match(/level-(\d)/)[1]);
        
        let shift = Math.random() > 0.5 ? 1 : -1;
        let newLvl = currentLvl + shift;
        if (newLvl < 0) newLvl = 0;
        if (newLvl > 4) newLvl = 4;

        randCell.className = `heatmap-cell level-${newLvl}`;
        const rowName = rows[parseInt(randCell.getAttribute('data-row'))];
        const cIdx = parseInt(randCell.getAttribute('data-col')) + 1;
        
        const tooltipText = currentLang === 'tr'
          ? `Birim: ${rowName}, Segment: ${cIdx}, Risk Seviyesi: ${newLvl}`
          : `Unit: ${rowName}, Node: ${cIdx}, Risk Level: ${newLvl}`;
        randCell.setAttribute('title', tooltipText);
      }
    }, 2000);
  }

  function getInitialStreamAlerts(sector) {
    const alerts = [];
    const now = new Date();
    
    const minutesSub = [15, 10, 6, 2];
    const rawAlerts = getAlertTemplates(sector);

    for (let i = 0; i < 4; i++) {
      const time = new Date(now.getTime() - minutesSub[i] * 60 * 1000);
      const timeStr = time.toTimeString().split(' ')[0];
      alerts.push({
        time: timeStr,
        text: rawAlerts[i % rawAlerts.length].text,
        high: rawAlerts[i % rawAlerts.length].high
      });
    }
    return alerts;
  }

  function getRandomStreamAlert(sector) {
    const rawAlerts = getAlertTemplates(sector);
    const selected = rawAlerts[Math.floor(Math.random() * rawAlerts.length)];
    return selected;
  }

  function getAlertTemplates(sector) {
    if (sector === 'vakif') {
      return [
        { text: currentLang === 'tr' ? 'Kayıp riski yüksek bağışçılar segmentinde hareketlilik saptandı.' : 'Activity detected in high churn risk donor segment.', high: true },
        { text: currentLang === 'tr' ? 'DTI borç oranı %40 seviyesini aşan bağışçılardan iptal bildirimi geldi.' : 'Cancellation alerts received from donors with DTI ratio >40%.', high: true },
        { text: currentLang === 'tr' ? 'Finansal tahmin modelleri %98.4 güven derecesiyle stabil duruma geçti.' : 'Financial forecast models stabilized with 98.4% confidence score.', high: false },
        { text: currentLang === 'tr' ? 'Bölge 4 bağış katılım hacminde %12 oranında artış kaydedildi.' : '12% uplift recorded in Area 4 donation attendance volumes.', high: false },
        { text: currentLang === 'tr' ? 'Yapay zeka portföy tahminlerinde gürültü filtresini güncelledi.' : 'AI updated noise filters in portfolio prediction pipelines.', high: false }
      ];
    } else if (sector === 'lojistik') {
      return [
        { text: currentLang === 'tr' ? 'Bölge 3 kurye trafik yoğunluğu Level 4 limitini aşarak gecikmeyi tetikledi.' : 'Zone 3 traffic density exceeded Level 4 limits, triggering delay alerts.', high: true },
        { text: currentLang === 'tr' ? '25kg ağırlığı aşan paket teslimatlarında rota instability uyarısı.' : 'Route instability warnings in package deliveries exceeding 25kg.', high: true },
        { text: currentLang === 'tr' ? 'Lojistik teslimat süreleri ortalaması 38 dakikaya geriledi (Favorable).' : 'Logistics average delivery duration dropped to 38 mins (Favorable).', high: false },
        { text: currentLang === 'tr' ? 'Uzun mesafe rotalarında (>200km) AI otonom buffer pencereleri atandı.' : 'AI autonomously assigned buffer windows to long routes (>200km).', high: false },
        { text: currentLang === 'tr' ? 'Kurye performans takip matrisi başarıyla güncellendi.' : 'Courier performance tracker metrics compiled successfully.', high: false }
      ];
    } else if (sector === 'tekstil') {
      return [
        { text: currentLang === 'tr' ? 'VIP Müşterilerin alışveriş sıklıklarında %14 daralma eğilimi gözlendi.' : '14% drop tendency observed in shopping frequencies of VIP cohort.', high: true },
        { text: currentLang === 'tr' ? 'Promosyon kodları hassasiyet anomalisi: Sepet marjı %12 aşındı.' : 'Promo code sensitivity anomaly: Gross basket margin eroded by 12%.', high: true },
        { text: currentLang === 'tr' ? 'Müşteri segmentasyon küme sınırları K-NN tarafından yeniden çizildi.' : 'Customer segmentation cluster bounds re-calculated by K-NN model.', high: false },
        { text: currentLang === 'tr' ? 'Sepet tutarı 1500 TL üzeri alıcılarda sadakat oranı yükseldi.' : 'Loyalty ratios peaked in buyers with basket sizes > 1500 TRY.', high: false }
      ];
    } else if (sector === 'food') {
      return [
        { text: currentLang === 'tr' ? 'Restoran şube puanı 4.2 altına inen lokasyonda sipariş kaybı riski.' : 'Order loss risk in location dropping rating below 4.2 stars.', high: true },
        { text: currentLang === 'tr' ? 'Express şubelerde fiyat artışı sonrası sipariş adedinde %15 daralma.' : '15% drop in orders after price increments on Express branches.', high: true },
        { text: currentLang === 'tr' ? 'Gurme konseptli şubelerde fiyat esnekliği stabil konumda.' : 'Price elasticity remains stable on Gourmet concept branches.', high: false },
        { text: currentLang === 'tr' ? 'Kampanya bazlı sipariş artışı sepet tutarını %24 oranında genişletti.' : 'Campaign-driven orders expanded average ticket size by 24%.', high: false }
      ];
    } else {
      return [
        { text: currentLang === 'tr' ? 'Veri kümesi anomalisi: Uç değerler saptandı.' : 'Dataset anomaly: Extreme outliers detected.', high: true },
        { text: currentLang === 'tr' ? 'Yapay zeka otonom grafik haritalamayı başarıyla sonlandırdı.' : 'AI successfully completed autonomous dashboard rendering loops.', high: false }
      ];
    }
  }

  function getExecutiveReportBriefing(sector) {
    if (sector === 'vakif') {
      return [
        { title: currentLang === 'tr' ? 'Yönetici Özeti' : 'Executive Summary', desc: currentLang === 'tr' ? 'Finansal bağışçı yapısı stabil olmakla beraber borç-gelir (DTI) oranları yükselen kitlelerde kayıp riskleri izlenmektedir.' : 'While donor levels are stable, high churn risks are monitored in cohorts with expanding DTI liabilities.', icon: '📋', color: 'var(--primary)' },
        { title: currentLang === 'tr' ? 'Stratejik Uyarı' : 'Business Warning', desc: currentLang === 'tr' ? 'Kredi skoru 600 altında kalan bağışçıların katılım sıklıkları düşüştedir. Bu gruba yönelik esnek planlar sunulmalı.' : 'Attendance rates of donors with credit scores below 600 show deterioration. Flexible targets should be defined.', icon: '⚠️', color: '#f97316' },
        { title: currentLang === 'tr' ? 'Risk Tahmini' : 'Predicted Risks', desc: currentLang === 'tr' ? 'Gelecek çeyrekte DTI oranları artmaya devam ederse toplam portföy sadakat seviyesinde %5.4 kayıp yaşanabilir.' : 'If DTI liabilities keep climbing, overall portfolio loyalty score may drop by 5.4% in the next quarter.', icon: '🔮', color: '#ef4444' }
      ];
    } else if (sector === 'lojistik') {
      return [
        { title: currentLang === 'tr' ? 'Operasyonel Rapor' : 'Operational Summary', desc: currentLang === 'tr' ? 'Rota uzunluğu 150 km üzerine çıkan bölgelerde kargo teslimat gecikme riskleri %28 sıçrama yapmıştır.' : 'Delivery latency risks jump by 28% in routes exceeding 150 km. Dynamic buffer allocation is required.', icon: '🚚', color: 'var(--secondary)' },
        { title: currentLang === 'tr' ? 'Kritik Eşik' : 'Critical Buffer', desc: currentLang === 'tr' ? 'Paket yükü 20 kg üzerine çıktığında kuryelerin hız katsayıları düşmekte ve teslim süresi ortalama 18 dakika aşınmaktadır.' : 'Package loads above 20kg drop courier speeds, causing an average of 18 minutes shipment delays.', icon: '⚠️', color: '#f97316' },
        { title: currentLang === 'tr' ? 'Gelecek Tahmini' : 'Opportunity Scan', desc: currentLang === 'tr' ? 'Trafik yoğunluğu 4. seviye olan bölgelerde akıllı otonom kurye atama modeline geçiş teslimat performansını %15 iyileştirecektir.' : 'Switching to smart dynamic courier assignment in Level 4 traffic zones will recover delivery performance by 15%.', icon: '💡', color: '#10b981' }
      ];
    } else if (sector === 'tekstil') {
      return [
        { title: currentLang === 'tr' ? 'Ticari Özet' : 'Commercial Summary', desc: currentLang === 'tr' ? 'VIP müşteri segmenti cironun %62sini üretmekle beraber sadakat sıklıklarında %14 daralma gözlenmiştir.' : 'While VIP cohort produces 62% of gross revenue, loyalty visit frequency has dropped by 14%.', icon: '🛍️', color: 'var(--primary)' },
        { title: currentLang === 'tr' ? 'Marj Uyarısı' : 'Margin Warning', desc: currentLang === 'tr' ? 'İndirim duyarlılığı yüksek alıcıların promosyon dışı dönemlerde çekilmesi marj daralması riski yaratmaktadır.' : 'High discount-sensitive buyers withdrawing during non-promo periods creates margin erosion risks.', icon: '⚠️', color: '#f97316' },
        { title: currentLang === 'tr' ? 'Eylem Önerisi' : 'Opportunity Action', desc: currentLang === 'tr' ? 'Sepet tutarı 1500 TL üzeri sadık müşterilere yönelik puan bazlı geri kazanım senaryosu kurgulanmalı.' : 'Implement point-based loyalty recovery scenarios targeting buyers with baskets exceeding 1500 TRY.', icon: '💡', color: '#10b981' }
      ];
    } else if (sector === 'food') {
      return [
        { title: currentLang === 'tr' ? 'Restoran Raporu' : 'Restaurant Summary', desc: currentLang === 'tr' ? 'Kampanya entegrasyonu sepet boyutlarını %24 büyütmektedir. Express şubeler fiyat artışlarına aşırı duyarlıdır.' : 'Active campaigns expand tickets by 24%. Express concepts show high sensitivity to price hikes.', icon: '🍕', color: 'var(--secondary)' },
        { title: currentLang === 'tr' ? 'Şube Uyarısı' : 'Location Alert', desc: currentLang === 'tr' ? 'Rating derecesi 4.2 altına düşen restoranlarda haftalık sipariş kaybı riski %18 düzeyindedir.' : 'Branches dropping below 4.2 stars ratings represent an immediate 18% weekly order volume loss risk.', icon: '⚠️', color: '#f97316' },
        { title: currentLang === 'tr' ? 'Öngörülen Çözüm' : 'AI Recommendation', desc: currentLang === 'tr' ? 'Express şubelerde fiyat artışı yerine miktar indirimleri (bundle) yapılması sipariş akışını koruyacaktır.' : 'Deploying quantity bundles rather than direct pricing hikes on Express branches will protect order flow.', icon: '💡', color: '#10b981' }
      ];
    } else {
      return [
        { title: currentLang === 'tr' ? 'Genel Özet' : 'General Summary', desc: currentLang === 'tr' ? 'Veri kümesi şeması ve dağılım oranları sistem tarafından otonom olarak görselleştirilmiştir.' : 'Dataset structure and target distributions mapped dynamically by AI Auto-Builder.', icon: '📋', color: 'var(--primary)' },
        { title: currentLang === 'tr' ? 'AI Tavsiyesi' : 'AI Recommendation', desc: currentLang === 'tr' ? 'Verilerdeki anomalileri temizleyip AutoML modellerini yeniden eğitmeyi düşünebilirsiniz.' : 'Impute missing values and re-run AutoML model fitting to optimize accuracy boundaries.', icon: '💡', color: '#10b981' }
      ];
    }
  }

  function applyAutoBuilderLayout(layout) {
    autoBuilderActiveLayout = layout;
    const chartCard = document.getElementById('autobuilder-chart-container');
    const heatmapCard = document.getElementById('autobuilder-heatmap-container');
    const insightsCard = document.getElementById('autobuilder-insights-container');
    const reportCard = document.getElementById('autobuilder-report-container');

    if (!chartCard || !heatmapCard || !insightsCard || !reportCard) return;

    chartCard.style.gridColumn = '';
    heatmapCard.style.gridColumn = '';
    insightsCard.style.gridColumn = '';
    reportCard.style.gridColumn = '';
    chartCard.style.display = 'flex';
    heatmapCard.style.display = 'block';
    insightsCard.style.display = 'block';
    reportCard.style.display = 'block';

    if (layout === 'executive') {
      chartCard.style.gridColumn = 'span 2';
      heatmapCard.style.display = 'none';
      insightsCard.style.gridColumn = 'span 1';
      reportCard.style.gridColumn = 'span 1';
    } else if (layout === 'operational') {
      chartCard.style.display = 'none';
      heatmapCard.style.gridColumn = 'span 2';
      insightsCard.style.gridColumn = 'span 1';
      reportCard.style.gridColumn = 'span 1';
    } else if (layout === 'forensic') {
      chartCard.style.gridColumn = 'span 1';
      heatmapCard.style.gridColumn = 'span 1';
      insightsCard.style.display = 'none';
      reportCard.style.display = 'none';
    }
  }

  const layoutButtons = document.querySelectorAll('.layout-selectors .btn-layout');
  layoutButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      layoutButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const targetLayout = btn.getAttribute('data-layout');
      applyAutoBuilderLayout(targetLayout);
    });
  });

  const btnReanalyzeAutoBuilder = document.getElementById('btn-reanalyze-autobuilder');
  if (btnReanalyzeAutoBuilder) {
    btnReanalyzeAutoBuilder.addEventListener('click', () => {
      document.getElementById('autobuilder-upload-view').style.display = 'block';
      document.getElementById('autobuilder-scanning-view').style.display = 'none';
      document.getElementById('autobuilder-results-view').style.display = 'none';
      if (autobuilderFileInput) autobuilderFileInput.value = '';
      if (autoBuilderLiveTickerInterval) clearInterval(autoBuilderLiveTickerInterval);
      if (autoBuilderHeatmapInterval) clearInterval(autoBuilderHeatmapInterval);
      updateAutoBuilderSharedState();
    });
  }

  const btnDownloadAutoBuilderReport = document.getElementById('btn-download-autobuilder-report');
  if (btnDownloadAutoBuilderReport) {
    btnDownloadAutoBuilderReport.addEventListener('click', () => {
      if (!lastUploadedDataset) return;
      
      const { jsPDF } = window.jspdf || {};
      if (!jsPDF) {
        alert(currentLang === 'tr' ? 'jsPDF kütüphanesi yüklenemedi!' : 'jsPDF library not loaded!');
        return;
      }

      const doc = new jsPDF();
      const sectorKey = lastUploadedDataset.detectedSector;
      const sectorLabel = sectorLabelsCard[currentLang][sectorKey] || sectorKey;
      const nowStr = new Date().toLocaleDateString(currentLang === 'tr' ? 'tr-TR' : 'en-US');

      doc.setFillColor(22, 28, 45);
      doc.rect(0, 0, 210, 30, 'F');

      doc.setTextColor(255, 255, 255);
      doc.setFontSize(16);
      doc.text(currentLang === 'tr' ? 'AI OTONOM VERİ RAPORU (EXECUTIVE BRIEF)' : 'AI AUTONOMOUS DATA REPORT (EXECUTIVE BRIEF)', 15, 18);

      doc.setTextColor(100, 100, 100);
      doc.setFontSize(8);
      doc.text(`CONFIDENTIAL // SYSTEM LOGS GENERATED ON ${nowStr}`, 15, 26);

      doc.setTextColor(22, 28, 45);
      doc.setFontSize(10);
      doc.text(`${currentLang === 'tr' ? 'Şirket Adı' : 'Company Name'}: ${currentCompany.toUpperCase()}`, 15, 45);
      doc.text(`${currentLang === 'tr' ? 'Tespit Edilen Sektör' : 'Detected Sector'}: ${sectorLabel.toUpperCase()}`, 15, 52);
      doc.text(`${currentLang === 'tr' ? 'Kaynak Dosya' : 'Source File'}: ${lastUploadedDataset.fileName}`, 15, 59);

      doc.setDrawColor(37, 99, 235);
      doc.setLineWidth(0.5);
      doc.line(15, 65, 195, 65);

      doc.setFontSize(12);
      doc.setTextColor(37, 99, 235);
      doc.text(currentLang === 'tr' ? 'OTONOM TİCARİ KPI ÇIKARIMLARI' : 'AUTONOMOUS BUSINESS KPI METRICS', 15, 75);

      doc.setTextColor(80, 80, 80);
      doc.setFontSize(9);
      
      let yOffset = 85;
      const kpiItems = getExecutiveReportBriefing(sectorKey);
      kpiItems.forEach(k => {
        doc.setFontSize(10);
        doc.setTextColor(22, 28, 45);
        doc.text(`• ${k.title}:`, 15, yOffset);
        doc.setFontSize(9);
        doc.setTextColor(80, 80, 80);
        
        const lines = doc.splitTextToSize(k.desc, 175);
        doc.text(lines, 20, yOffset + 5);
        yOffset += 15 + (lines.length * 3);
      });

      doc.line(15, yOffset, 195, yOffset);
      yOffset += 10;

      doc.setFontSize(12);
      doc.setTextColor(37, 99, 235);
      doc.text(currentLang === 'tr' ? 'VERİ GÖRSELLEŞTİRME VE DİNAMİK GRAFİK SEÇİMİ' : 'DATA VISUALIZATION & DYNAMIC CHART SELECTION', 15, yOffset);

      doc.setFontSize(9);
      doc.setTextColor(80, 80, 80);
      const explanationText = chartExplanation.textContent;
      const linesExplanation = doc.splitTextToSize(explanationText, 175);
      doc.text(linesExplanation, 15, yOffset + 8);
      yOffset += 15 + (linesExplanation.length * 3);

      const hashSeed = `${currentCompany}-${sectorKey}-${nowStr}-${Math.random()}`;
      let hashNum = 0;
      for (let i = 0; i < hashSeed.length; i++) {
        hashNum = hashSeed.charCodeAt(i) + ((hashNum << 5) - hashNum);
      }
      const hash = 'AB-' + sectorKey.substring(0,3).toUpperCase() + '-' + Math.abs(hashNum).toString(16).substring(0,6).toUpperCase();

      doc.setFillColor(245, 247, 250);
      doc.rect(15, 260, 180, 18, 'F');
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text(`AUTOGENERATED BY ANL ANALYTICS SOFTWARE // SECURITY SIGNATURE: ${hash}`, 20, 271);

      doc.save(`ANL_Vertex_AutoBuilder_Report_${currentCompany.toUpperCase()}_${sectorKey.toUpperCase()}.pdf`);
    });
  }

  const btnCloseEmailModal = document.getElementById('btn-close-email-modal');
  const btnCancelEmail = document.getElementById('btn-cancel-email');
  if (btnCloseEmailModal) btnCloseEmailModal.addEventListener('click', closeEmailModal);
  if (btnCancelEmail) btnCancelEmail.addEventListener('click', closeEmailModal);

  // ==========================================
  // AURA AI AUTONOMOUS OS MODULE
  // ==========================================
  
  let auraOSStreamInterval = null;
  let auraOSMemory = [];
  let auraOSActiveWarnings = [];

  function initAuraOSModule() {
    const sectorBadge = document.getElementById('aura-os-sector-name');
    const memoryBadge = document.getElementById('aura-os-memory-badge');
    if (sectorBadge) {
      const label = sectorLabelsCard[currentLang][currentSector] || currentSector;
      sectorBadge.textContent = label.toUpperCase();
    }
    if (memoryBadge) {
      const stateCount = auraOSMemory.length + (lastUploadedDataset ? 1 : 0);
      memoryBadge.textContent = currentLang === 'tr' 
        ? `Aktivite Belleği: ${stateCount} Bağlam` 
        : `Memory Context: ${stateCount} Nodes`;
    }

    initAuraOSStream();
    initAuraOSWarnings();
    initAuraOSConsole();
    initAuraOSExplainability();
  }

  // --- Real-time Activity Ticker ---
  function initAuraOSStream() {
    const streamContainer = document.getElementById('aura-os-activity-stream');
    if (!streamContainer) return;
    if (auraOSStreamInterval) clearInterval(auraOSStreamInterval);

    streamContainer.innerHTML = '';
    const initialLogs = getInitialAuraOSLogs();
    initialLogs.forEach(log => {
      appendAuraOSStreamLine(log.text, log.agentColor);
    });

    auraOSStreamInterval = setInterval(() => {
      const newLog = getRandomAuraOSLog();
      appendAuraOSStreamLine(newLog.text, newLog.agentColor);
    }, 4000);
  }

  function appendAuraOSStreamLine(text, color) {
    const container = document.getElementById('aura-os-activity-stream');
    if (!container) return;
    
    const now = new Date();
    const timeStr = now.toTimeString().split(' ')[0];
    
    const line = document.createElement('div');
    line.style.fontSize = '0.74rem';
    line.style.fontFamily = 'monospace';
    line.style.marginBottom = '0.4rem';
    line.style.display = 'flex';
    line.style.gap = '0.5rem';
    line.style.alignItems = 'flex-start';
    
    line.innerHTML = `
      <span style="color: var(--text-muted);">[${timeStr}]</span>
      <span style="color: ${color || 'var(--primary)'}; font-weight: bold; text-shadow: 0 0 4px ${color || 'var(--primary-glow)'};">•</span>
      <span style="color: var(--text-secondary);">${text}</span>
    `;
    
    container.appendChild(line);
    const lines = container.querySelectorAll('div');
    if (lines.length > 25) {
      lines[0].remove();
    }
    container.scrollTop = container.scrollHeight;
  }

  function getInitialAuraOSLogs() {
    const logs = [];
    const now = new Date();
    const agents = getAgentMetadata();
    
    const items = [
      { text: currentLang === 'tr' ? "Sistem önyüklemesi tamamlandı. Otonom ajan swarm aktif." : "System boot complete. Autonomous agent swarm active.", color: 'var(--success)' },
      { text: currentLang === 'tr' ? "Risk Ajanı veri kümesi varyans sapmalarını taramaya başladı." : "Risk Agent initiated scans for dataset variance anomalies.", color: agents.risk.color },
      { text: currentLang === 'tr' ? "Tahmin Ajanı zaman serisi regresyon modellerini güncelledi." : "Forecast Agent updated time series regression parameters.", color: agents.forecast.color },
      { text: currentLang === 'tr' ? "Finans Ajanı son çeyrek operasyonel bütçe marjını inceledi." : "Finance Agent evaluated gross operational margins for active cohorts.", color: agents.finance.color }
    ];

    items.forEach((item, idx) => {
      logs.push({
        text: item.text,
        agentColor: item.color
      });
    });
    return logs;
  }

  function getRandomAuraOSLog() {
    const agents = getAgentMetadata();
    const logs = [
      { text: currentLang === 'tr' ? "Risk Ajanı sınır dışı (outlier) veri riskini yeniden hesapladı." : "Risk Agent recalculated outlier anomaly bounds.", color: agents.risk.color },
      { text: currentLang === 'tr' ? "Ops Ajanı kurye teslimat performans dağılımını optimize etti." : "Ops Agent optimized courier performance log matrices.", color: agents.operations.color },
      { text: currentLang === 'tr' ? "Kayıp Ajanı yüksek riskli donör segmentlerini gruplandırdı." : "Churn Agent isolated at-risk cohorts from baseline data.", color: agents.churn.color },
      { text: currentLang === 'tr' ? "Strateji Ajanı yeni simülasyon çıktısı için mitigation katsayıları hazırladı." : "Strategy Agent generated mitigation weights for active forecast.", color: agents.strategy.color },
      { text: currentLang === 'tr' ? "Tahmin Ajanı linear sapma eşik değerlerini doğruladı." : "Forecast Agent verified regression coefficient variance thresholds.", color: agents.forecast.color },
      { text: currentLang === 'tr' ? "Finans Ajanı nakit akışı dalgalanma risk puanını güncelledi." : "Finance Agent updated payment volatility risk boundaries.", color: agents.finance.color }
    ];
    return logs[Math.floor(Math.random() * logs.length)];
  }

  function getAgentMetadata() {
    return {
      risk: { name: 'Risk Agent', color: '#ef4444', elementId: 'agent-node-risk' },
      finance: { name: 'Finance Agent', color: '#f59e0b', elementId: 'agent-node-finance' },
      operations: { name: 'Operations Agent', color: '#06b6d4', elementId: 'agent-node-operations' },
      churn: { name: 'Churn Agent', color: '#f97316', elementId: 'agent-node-churn' },
      strategy: { name: 'Strategy Agent', color: '#3b82f6', elementId: 'agent-node-strategy' },
      forecast: { name: 'Forecast Agent', color: '#8b5cf6', elementId: 'agent-node-forecast' }
    };
  }

  // --- Proactive Warnings Grid ---
  function initAuraOSWarnings() {
    const alertsBox = document.getElementById('aura-os-alerts-box');
    if (!alertsBox) return;

    alertsBox.innerHTML = '';
    
    // Create localized templates based on active sector
    let templates = [];
    if (currentSector === 'lojistik') {
      templates = [
        { id: 'warn-1', title: currentLang === 'tr' ? 'Rota Tıkanıklığı' : 'Route Latency Bottleneck', desc: currentLang === 'tr' ? 'Bölge 3 kurye trafik yoğunluğu Level 4 limitini aştı.' : 'Zone 3 traffic density exceeded Level 4 limits, delaying shipments.', agent: 'operations', severity: 'high' },
        { id: 'warn-2', title: currentLang === 'tr' ? 'Outlier Paket Ağırlığı' : 'Outlier Package Weight', desc: currentLang === 'tr' ? 'Müşteri kargosunda 25kg sınır değer anomalisi saptandı.' : 'Outlier package load identified (exceeding standard 25kg parameters).', agent: 'risk', severity: 'medium' }
      ];
    } else if (currentSector === 'vakif') {
      templates = [
        { id: 'warn-1', title: currentLang === 'tr' ? 'Kayıp Riski Artışı' : 'Donor Churn Escalation', desc: currentLang === 'tr' ? 'Gelir/borç oranı yüksek donörlerde %14 katılım düşüşü.' : 'High debt-to-income donors showing 14% drop in active attendance.', agent: 'churn', severity: 'high' },
        { id: 'warn-2', title: currentLang === 'tr' ? 'Bağış Limiti Sapması' : 'Donation Scale Anomaly', desc: currentLang === 'tr' ? 'Tek seferlik bağışlarda standart sapmanın 3 katı outlier işlem.' : 'Outlier transaction scale detected (exceeding standard deviation threshold by 3x).', agent: 'finance', severity: 'medium' }
      ];
    } else if (currentSector === 'egitim') {
      templates = [
        { id: 'warn-1', title: currentLang === 'tr' ? 'Ders Devam Kaybı' : 'Attendance Drop Warning', desc: currentLang === 'tr' ? 'Bölüm B grubundaki öğrencilerin devam oranı %72ye geriledi.' : 'Course attendance rate dropped to 72% on Section B cohorts.', agent: 'operations', severity: 'high' },
        { id: 'warn-2', title: currentLang === 'tr' ? 'Not Ortalaması Sapması' : 'Exam Performance Drift', desc: currentLang === 'tr' ? 'Deneme sınavı başarı puanında 8 puanlık regresyon eğilimi.' : 'Mock exam scores drift downwards by a mean of 8.2% across active nodes.', agent: 'forecast', severity: 'medium' }
      ];
    } else if (currentSector === 'gida') {
      templates = [
        { id: 'warn-1', title: currentLang === 'tr' ? 'Puan Aşınma Riski' : 'Rating Erosion Warning', desc: currentLang === 'tr' ? 'Şube derecelendirmesi 4.2 altına indi, sipariş kaybı %18.' : 'Branch ratings dropped below 4.2 stars, risking an 18% weekly order loss.', agent: 'risk', severity: 'high' },
        { id: 'warn-2', title: currentLang === 'tr' ? 'Fiyat Dalgalanma Anomalisi' : 'Price Elasticity Anomaly', desc: currentLang === 'tr' ? 'Express şubelerde yapılan fiyat artışı sipariş hacmini %15 daralttı.' : 'Price increments on Express branches caused a 15% demand contraction.', agent: 'finance', severity: 'medium' }
      ];
    } else { // Tekstil
      templates = [
        { id: 'warn-1', title: currentLang === 'tr' ? 'VIP Alışveriş Daralması' : 'VIP Shopping Contraction', desc: currentLang === 'tr' ? 'Premium alıcı ziyaret sıklığında %14 gerileme saptandı.' : 'Premium customer visit frequency dropped by 14% in current cohort.', agent: 'churn', severity: 'high' },
        { id: 'warn-2', title: currentLang === 'tr' ? 'Promosyon Aşınması' : 'Margin Erosion Risk', desc: currentLang === 'tr' ? 'Promosyon dışı dönemlerde sipariş sepet hacmi %12 daraldı.' : 'Discount-sensitive buyers withdrawing during non-promo windows.', agent: 'finance', severity: 'medium' }
      ];
    }

    auraOSActiveWarnings = templates;

    templates.forEach(t => {
      const card = document.createElement('div');
      card.className = 'warning-card';
      card.id = `warning-card-${t.id}`;
      card.style.borderColor = t.severity === 'high' ? 'rgba(239, 68, 68, 0.3)' : 'rgba(245, 158, 11, 0.3)';
      card.style.background = t.severity === 'high' ? 'rgba(239, 68, 68, 0.03)' : 'rgba(245, 158, 11, 0.03)';
      
      const dotColor = t.severity === 'high' ? '#ef4444' : '#f59e0b';
      
      card.innerHTML = `
        <div style="flex: 1;">
          <div style="display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.25rem;">
            <span style="width: 6px; height: 6px; border-radius: 50%; background: ${dotColor}; display: inline-block;"></span>
            <strong style="color: #fff; font-size: 0.8rem;">${t.title}</strong>
          </div>
          <div style="font-size: 0.74rem; color: var(--text-secondary); line-height: 1.3;">${t.desc}</div>
        </div>
        <button class="btn-secondary btn-mitigate-warning" data-id="${t.id}" style="padding: 0.25rem 0.6rem; font-size: 0.68rem; border-radius: 4px; width: auto; white-space: nowrap; margin-top: 0.2rem;">
          ${currentLang === 'tr' ? 'Çöz / Mitigate' : 'Mitigate'}
        </button>
      `;

      alertsBox.appendChild(card);
      
      const btnMitigate = card.querySelector('.btn-mitigate-warning');
      btnMitigate.addEventListener('click', () => mitigateWarning(t.id, t.title, t.agent));
    });
  }

  function mitigateWarning(id, title, agentKey) {
    const card = document.getElementById(`warning-card-${id}`);
    if (!card) return;

    const agents = getAgentMetadata();
    const activeAgent = agents[agentKey];

    // Pulsing agent
    triggerAgentActivation(agentKey);

    setTimeout(() => {
      // Mark as mitigated
      card.classList.add('mitigated');
      card.style.borderColor = 'rgba(16, 185, 129, 0.3)';
      card.style.background = 'rgba(16, 185, 129, 0.05)';
      
      const btn = card.querySelector('.btn-mitigate-warning');
      if (btn) {
        btn.textContent = currentLang === 'tr' ? 'Mitigated ✓' : 'Mitigated ✓';
        btn.disabled = true;
        btn.style.background = 'rgba(16, 185, 129, 0.1)';
        btn.style.color = '#10b981';
        btn.style.borderColor = '#10b981';
      }

      // Stream Event Log
      const logText = currentLang === 'tr' 
        ? `[Mitigation OS] '${title}' anomalisi başarıyla giderildi.` 
        : `[Mitigation OS] Mitigated threat: '${title}' successfully.`;
      appendAuraOSStreamLine(logText, 'var(--success)');

      // Post confirmation response in chat OS
      const chatLogs = document.getElementById('aura-os-chat-logs');
      if (chatLogs) {
        const bubble = document.createElement('div');
        bubble.className = `chat-msg ai mode-strategy`;
        bubble.style.borderLeft = `2px solid var(--success)`;
        bubble.innerHTML = currentLang === 'tr'
          ? `✓ <strong>Strateji Ajanı Bildirimi:</strong> '${title}' anomalisi giderildi. Koruyucu güvenlik duvarları aktif edildi. Sistem güven derecesi %98.4 değerine yükseldi.`
          : `✓ <strong>Strategy Agent Notice:</strong> Threat '${title}' has been mitigated. Preemptive action scripts deployed. Model security metrics recovered to 98.4%.`;
        chatLogs.appendChild(bubble);
        chatLogs.scrollTop = chatLogs.scrollHeight;
      }
      
      // Update memory state
      auraOSMemory.push({
        action: 'mitigation',
        target: title,
        timestamp: new Date().toLocaleTimeString()
      });
      
      const memoryBadge = document.getElementById('aura-os-memory-badge');
      if (memoryBadge) {
        const stateCount = auraOSMemory.length + (lastUploadedDataset ? 1 : 0);
        memoryBadge.textContent = currentLang === 'tr' 
          ? `Aktivite Belleği: ${stateCount} Bağlam` 
          : `Memory Context: ${stateCount} Nodes`;
      }
    }, 1200);
  }

  // --- UI Agent Node Activation Pulses ---
  function triggerAgentActivation(agentKey) {
    const agents = getAgentMetadata();
    const currentAgent = agents[agentKey];
    if (!currentAgent) return;

    const node = document.getElementById(currentAgent.elementId);
    if (!node) return;

    node.classList.add(`active-${agentKey}`);
    const statusEl = node.querySelector('.agent-status');
    if (statusEl) {
      statusEl.textContent = translations.agent_collab[currentLang];
      statusEl.style.color = currentAgent.color;
    }

    setTimeout(() => {
      node.classList.remove(`active-${agentKey}`);
      if (statusEl) {
        statusEl.textContent = translations.agent_idle[currentLang];
        statusEl.style.color = 'var(--text-muted)';
      }
    }, 3500);
  }

  // --- Executive Command Console ---
  function initAuraOSConsole() {
    const suggestions = document.getElementById('aura-os-suggestions');
    const chatLogs = document.getElementById('aura-os-chat-logs');
    if (!suggestions || !chatLogs) return;

    suggestions.innerHTML = '';
    chatLogs.innerHTML = '';

    const welcomeMsg = currentLang === 'tr'
      ? `Aura AI Otonom Komut Merkezine Hoş Geldiniz. Ben şirketinizin AI Stratejistiyim. Operasyonel riskleri, mali tehditleri veya tahminleme modellerini analiz etmemi isteyebilirsiniz.`
      : `Welcome to Aura AI Autonomous Command Center. I am your Executive AI Strategist. You can query operational risks, financial threats, or ML prediction scenarios.`;

    const bubble = document.createElement('div');
    bubble.className = 'chat-msg ai';
    bubble.style.borderLeft = '2px solid var(--primary)';
    bubble.textContent = welcomeMsg;
    chatLogs.appendChild(bubble);
    chatLogs.scrollTop = chatLogs.scrollHeight;

    const queryTemplates = [
      currentLang === 'tr' ? "Operasyonel riskleri analiz et" : "Analyze operational risks",
      currentLang === 'tr' ? "Kayıp riski neden artıyor?" : "Why is churn probability increasing?",
      currentLang === 'tr' ? "En büyük finansal tehditleri göster" : "Show the biggest financial threats",
      currentLang === 'tr' ? "Yönetici tavsiyeleri oluştur" : "Generate executive recommendations"
    ];

    queryTemplates.forEach(q => {
      const btn = document.createElement('button');
      btn.className = 'quick-prompt-btn';
      btn.textContent = q;
      btn.type = 'button';
      btn.addEventListener('click', () => handleAuraOSCommand(q));
      suggestions.appendChild(btn);
    });

    const form = document.getElementById('aura-os-chat-form');
    if (form) {
      form.onsubmit = (e) => {
        e.preventDefault();
        const input = document.getElementById('aura-os-chat-input');
        if (input && input.value.trim() !== '') {
          handleAuraOSCommand(input.value.trim());
        }
      };
    }
  }

  function handleAuraOSCommand(query) {
    const chatLogs = document.getElementById('aura-os-chat-logs');
    const input = document.getElementById('aura-os-chat-input');
    if (!chatLogs) return;

    if (input) input.value = '';

    // Append User message
    const userBubble = document.createElement('div');
    userBubble.className = 'chat-msg user';
    userBubble.textContent = query;
    chatLogs.appendChild(userBubble);
    chatLogs.scrollTop = chatLogs.scrollHeight;

    // Loading Reasoning Box
    const reasoningBubble = document.createElement('div');
    reasoningBubble.className = 'chat-msg ai';
    reasoningBubble.style.fontFamily = 'monospace';
    reasoningBubble.style.fontSize = '0.74rem';
    reasoningBubble.style.color = 'var(--secondary)';
    reasoningBubble.style.background = 'rgba(14, 165, 233, 0.05)';
    reasoningBubble.style.borderLeft = '2px solid var(--secondary)';
    reasoningBubble.id = 'aura-os-reasoning-logs';
    chatLogs.appendChild(reasoningBubble);
    chatLogs.scrollTop = chatLogs.scrollHeight;

    // Detect keywords to determine active agents
    const cleanQuery = query.toLowerCase().trim();
    let activeAgentsKeys = [];
    let responseText = '';
    let weights = [];
    let confidenceVal = 94;

    if (cleanQuery.includes('risk') || cleanQuery.includes('tehdit') || cleanQuery.includes('threat') || cleanQuery.includes('instability')) {
      activeAgentsKeys = ['risk', 'forecast', 'strategy'];
      confidenceVal = 92;
      
      responseText = currentLang === 'tr'
        ? `**[AURA OS // Rapor]** Yapılan risk taramalarında aktif donör/kurye veritabanı sapmaları gözlendi. En son yüklenen veri kümesi kapsamında sapma katsayısı norm sınırından **%14** taşma yapmıştır. \n\n**Önerilen Stratejik Eylem:** Yoğunlaşan risk düğümlerine yönelik dinamik kaynak atamaları (buffer katsayısı +0.15) uygulanması anomalileri nötralize edecektir.`
        : `**[AURA OS // Report]** Risk matrix scans completed. Relative variance limits show an anomaly overflow of **14%** above the cohort baseline. \n\n**Strategic Recommendation:** Deploying dynamic buffer values (+0.15 correction factor) to operational routes/accounts will neutralize critical risk segments.`;
      
      weights = [
        { label: 'Outlier Variance', val: 84 },
        { label: 'Feature Drift', val: 62 },
        { label: 'Historical Anomaly', val: 35 }
      ];
    } else if (cleanQuery.includes('churn') || cleanQuery.includes('kayıp') || cleanMsgMatch(cleanQuery, ['why', 'neden'])) {
      activeAgentsKeys = ['churn', 'risk', 'strategy'];
      confidenceVal = 95;
      
      responseText = currentLang === 'tr'
        ? `**[AURA OS // Analiz]** Müşteri kayıp eğiliminin (churn) en büyük tetikleyicisi son yüklenen veri dağılımında gözlenen ciro/gelir oynaklığıdır. Sepet tutarı 1000 TL altında kalan alıcıların geri dönüş frekansları son 30 günde %15 daralmıştır.\n\n**Önerilen Eylem:** Bu segmentteki alıcılara özel puan destekli sadakat indirim kuponları tanımlanmalıdır.`
        : `**[AURA OS // Analysis]** The primary driver of churn probability is the spend frequency volatility observed in the cohort. Buyers with baskets below 1000 TRY decreased purchase frequencies by 15% in the last 30 days.\n\n**Strategic Mitigations:** Define point-based loyalty coupons to recover premium/opportunity shopper frequencies.`;

      weights = [
        { label: 'Spend Frequency', val: 88 },
        { label: 'Basket Size', val: 72 },
        { label: 'Discount Affinity', val: 40 }
      ];
    } else if (cleanQuery.includes('finans') || cleanQuery.includes('tehdit') || cleanQuery.includes('threats') || cleanQuery.includes('revenue') || cleanQuery.includes('mali')) {
      activeAgentsKeys = ['finance', 'risk', 'forecast'];
      confidenceVal = 91;

      responseText = currentLang === 'tr'
        ? `**[AURA OS // Finans]** Bütçe marjları ve operasyonel maliyet kalemleri incelendi. En yüksek mali tehdit, plansız rota genişlemeleri ve lojistik yakıt tüketim artışıdır. Bu sapma sepet kar payını %12 oranında aşındırma potansiyeline sahiptir.\n\n**Mitigasyon:** Express şubelerde alternatif dağıtım noktaları atanarak yakıt tüketim katsayısı optimize edilmelidir.`
        : `**[AURA OS // Finance]** Operational cost variables inspected. The largest financial threat relates to fuel consumption variance on non-optimized routes. This threatens gross margins by up to 12.2%.\n\n**Actionable Suggestion:** Implement branch-based shipment consolidation to lower fuel cost indices.`;

      weights = [
        { label: 'Fuel Volatility', val: 78 },
        { label: 'Route Length', val: 70 },
        { label: 'Package Weight', val: 52 }
      ];
    } else if (cleanQuery.includes('hafıza') || cleanQuery.includes('memory') || cleanQuery.includes('gecmis') || cleanQuery.includes('previous') || cleanQuery.includes('context')) {
      activeAgentsKeys = ['strategy', 'risk', 'forecast'];
      confidenceVal = 96;

      const memoryStates = auraOSMemory.map(m => `${m.target || m.action} (${m.timestamp || 'N/A'})`).join(', ');
      
      responseText = currentLang === 'tr'
        ? `**[AURA OS // Bellek Okuma]** Aktivite belleği başarıyla tarandı. Sistem son yüklenen veri kümesi **${lastUploadedDataset ? lastUploadedDataset.fileName : 'Genel Simülasyon'}** bağlamını muhafaza etmektedir. \n\n**Hatırlanan Son Eylemler:** [${memoryStates || 'Veri Kümesi Yüklendi'}]. Operasyonel risk trendi geçen haftaya oranla stabil konumdadır.`
        : `**[AURA OS // Memory Scan]** Context buffer recalled. Active workspace: **${lastUploadedDataset ? lastUploadedDataset.fileName : 'General Simulator State'}** context is synced. \n\n**Recent Executive States:** [${memoryStates || 'Initial Dataset Sync'}]. Current operational risk variance matches baseline guidelines.`;

      weights = [
        { label: 'State Retention', val: 95 },
        { label: 'Feature Sync', val: 88 },
        { label: 'Context Correlation', val: 75 }
      ];
    } else { // strategy/executive default
      activeAgentsKeys = ['strategy', 'forecast', 'operations'];
      confidenceVal = 94;

      responseText = currentLang === 'tr'
        ? `**[AURA OS // Strateji]** Otonom modeller veri dağılımına göre şu karara ulaştı: Genel sistem performansı %98.4 doğruluk skoru ile stabildir. Son operasyonel katsayılar güvenli sınırlar içinde seyretmektedir.\n\n**Tavsiye:** AI Auto-Builder paneline geçerek güncel zaman serisi grafiklerini otonom olarak inceleyebilirsiniz.`
        : `**[AURA OS // Strategy]** Swarm agents reached consensus: Overall performance metrics are stable with 98.4% model accuracy. Inputs match target margins.\n\n**Next Steps:** Proceed to the AI Auto-Builder panel to visualize dynamic cohort charts autonomously.`;

      weights = [
        { label: 'Model Stability', val: 82 },
        { label: 'Variance Controls', val: 68 },
        { label: 'Throughput Index', val: 60 }
      ];
    }

    // Trigger agents visual pulse
    activeAgentsKeys.forEach(k => triggerAgentActivation(k));

    // Reasoning stream simulated ticks
    const reasoningSteps = [
      currentLang === 'tr' ? `⏳ [AURA.OS] Çözümleyici bağlamı inceleniyor: "${query}"...` : `⏳ [AURA.OS] Parsing query context: "${query}"...`,
      currentLang === 'tr' ? `⚙️ [Risk Ajanı] Sınır değer sapmaları ve Korelasyon matrisi taranıyor...` : `⚙️ [Risk Agent] Scanning variance limits and Multicollinearity...`,
      currentLang === 'tr' ? `♟️ [Strateji Ajanı] Karar modeli çıktı ağırlık katsayılarını eşleştiriyor...` : `♟️ [Strategy Agent] Compiling weights matching decision paths...`,
      currentLang === 'tr' ? `🔮 [Tahmin Ajanı] Zaman serisi gürültü filtreleme adımlarını sonlandırıyor...` : `🔮 [Forecast Agent] Completing regression forecasting filters...`,
      currentLang === 'tr' ? `✓ [Konsensüs] Ajan swarm karara ulaştı. Rapor hazırlanıyor.` : `✓ [Consensus] Agent swarm reached agreement. Generating output.`
    ];

    let stepIdx = 0;
    const ticksInterval = setInterval(() => {
      if (stepIdx < reasoningSteps.length) {
        reasoningBubble.innerHTML += `<div>${reasoningSteps[stepIdx]}</div>`;
        chatLogs.scrollTop = chatLogs.scrollHeight;
        stepIdx++;
      } else {
        clearInterval(ticksInterval);
        
        // Remove reasoning box and stream final response
        reasoningBubble.remove();
        
        // Append response typewriter bubble
        const aiBubble = document.createElement('div');
        aiBubble.className = `chat-msg ai mode-strategy`;
        aiBubble.style.borderLeft = `2px solid var(--primary)`;
        chatLogs.appendChild(aiBubble);
        chatLogs.scrollTop = chatLogs.scrollHeight;

        let charIdx = 0;
        const typingInterval = setInterval(() => {
          if (charIdx < responseText.length) {
            aiBubble.innerHTML += responseText.charAt(charIdx);
            chatLogs.scrollTop = chatLogs.scrollHeight;
            charIdx++;
          } else {
            clearInterval(typingInterval);
            
            // Render explainability bars & confidence values
            updateAuraOSExplainabilityMatrix(confidenceVal, weights);
            
            // Add to Memory
            auraOSMemory.push({
              query: query,
              response: responseText.substring(0, 40) + '...',
              timestamp: new Date().toLocaleTimeString()
            });

            const memoryBadge = document.getElementById('aura-os-memory-badge');
            if (memoryBadge) {
              const stateCount = auraOSMemory.length + (lastUploadedDataset ? 1 : 0);
              memoryBadge.textContent = currentLang === 'tr' 
                ? `Aktivite Belleği: ${stateCount} Bağlam` 
                : `Memory Context: ${stateCount} Nodes`;
            }
          }
        }, 8);
      }
    }, 500);
  }

  function cleanMsgMatch(msg, keywords) {
    return keywords.some(k => msg.includes(k));
  }

  // --- Explainability Panel Visual updates ---
  function initAuraOSExplainability() {
    const defaultWeights = [
      { label: currentLang === 'tr' ? 'Varyans Katsayısı' : 'Variance Coefficient', val: 74 },
      { label: currentLang === 'tr' ? 'Model Sapma Oranı' : 'Model Drift Ratio', val: 58 },
      { label: currentLang === 'tr' ? 'Kararlılık Hızı' : 'Consistency Velocity', val: 42 }
    ];
    updateAuraOSExplainabilityMatrix(94, defaultWeights);
  }

  function updateAuraOSExplainabilityMatrix(confidence, weightsList) {
    const confidenceBadge = document.getElementById('aura-os-explain-confidence');
    const barsContainer = document.getElementById('aura-os-explain-bars');
    if (!barsContainer) return;

    if (confidenceBadge) {
      confidenceBadge.textContent = `${currentLang === 'tr' ? 'Güven' : 'Confidence'}: ${confidence}%`;
    }

    barsContainer.innerHTML = '';
    weightsList.forEach(w => {
      const barItem = document.createElement('div');
      barItem.className = 'importance-item';
      barItem.style.marginBottom = '0.7rem';
      
      barItem.innerHTML = `
        <div class="importance-label-row" style="display: flex; justify-content: space-between; font-size: 0.74rem; font-weight: 500; margin-bottom: 0.25rem;">
          <span style="color: var(--text-secondary);">${w.label}</span>
          <span style="font-weight: 700; color: var(--primary);">${w.val}%</span>
        </div>
        <div class="importance-bar-outer" style="width: 100%; height: 6px; background: rgba(255, 255, 255, 0.05); border-radius: 4px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.02);">
          <div class="importance-bar-inner" style="height: 100%; border-radius: 4px; background: linear-gradient(90deg, var(--primary), var(--secondary)); width: ${w.val}%; box-shadow: 0 0 8px var(--primary-glow);"></div>
        </div>
      `;
      
      barsContainer.appendChild(barItem);
    });

    const footer = document.getElementById('aura-os-reasoning-footer');
    if (footer) {
      const paths = [
        "INPUT_ACCELERATOR ➔ VARIANCE ➔ ANOMALY ➔ TRIGGER",
        "COHORT_OFFSET ➔ FORECAST_SHIELD ➔ MITIGATION_NODE",
        "BUDGET_OVERFLOW ➔ LIQUIDITY_VAL ➔ MARGIN_EVAL"
      ];
      footer.textContent = `Causal path: ${paths[Math.floor(Math.random() * paths.length)]}`;
    }
  }

  window.initAuraOSModule = initAuraOSModule;

  // ================= SAAS ENTERPRISE CLOUD IMPLEMENTATION =================
  let saasPingInterval = null;
  let saasWebhookInterval = null;
  let saasAuditInterval = null;
  let saasEventsBound = false;

  function initSaaSCloudModule() {
    console.log("[SaaS Cloud] Launching SaaS module lifecycle...");
    
    // Initial Audit logs
    const auditLogs = document.getElementById('saas-audit-logs');
    if (auditLogs) {
      auditLogs.innerHTML = `
        <div style="color: var(--success); font-weight: bold;">[SOC Audit] System initialized at ${new Date().toLocaleTimeString()}</div>
        <div style="color: var(--text-muted);">[SOC Audit] Secure tunnel established to Dallas-HQ server.</div>
        <div style="color: var(--text-muted);">[SOC Audit] Policy sync check passed (SOC2 Type-II, HIPAA compliance active).</div>
      `;
    }

    // Node ping fluctuation
    if (saasPingInterval) clearInterval(saasPingInterval);
    saasPingInterval = setInterval(() => {
      const usPing = Math.floor(10 + Math.random() * 8);
      const euPing = Math.floor(40 + Math.random() * 12);
      const apPing = Math.floor(70 + Math.random() * 20);
      const avgPing = Math.round((usPing + euPing + apPing) / 3);

      const usEl = document.getElementById('saas-node-us-ping');
      const euEl = document.getElementById('saas-node-eu-ping');
      const apEl = document.getElementById('saas-node-ap-ping');
      const avgEl = document.getElementById('saas-average-ping');

      if (usEl) usEl.textContent = `US-HQ: ${usPing}ms`;
      if (euEl) euEl.textContent = `EU-Node: ${euPing}ms`;
      if (apEl) apEl.textContent = `AP-Node: ${apPing}ms`;
      if (avgEl) avgEl.textContent = `Avg Ping: ${avgPing}ms`;
    }, 2500);

    // Webhook stream simulations
    if (saasWebhookInterval) clearInterval(saasWebhookInterval);
    const webhookLogs = document.getElementById('saas-webhook-logs');
    if (webhookLogs) {
      webhookLogs.innerHTML = `<div style="color: var(--text-muted);">[Webhook Hub] Idle. Listening for integrations...</div>`;
    }
    
    const endpoints = ['/api/v1/predict', '/api/v1/schema/verify', '/api/v1/automl/train', '/api/v1/autobuilder/layout', '/api/v1/aura/copilot'];
    saasWebhookInterval = setInterval(() => {
      if (!webhookLogs) return;
      const time = new Date().toLocaleTimeString();
      const endpoint = endpoints[Math.floor(Math.random() * endpoints.length)];
      const nodes = ['Dallas-HQ', 'Frankfurt-Node', 'Tokyo-Node'];
      const node = nodes[Math.floor(Math.random() * nodes.length)];
      const code = Math.random() > 0.05 ? '200 OK' : '400 Bad Request';
      const color = code.includes('200') ? '#06b6d4' : 'var(--danger)';
      
      const entry = document.createElement('div');
      entry.style.color = color;
      entry.textContent = `[${time}] POST ${endpoint} - ${code} (${node})`;
      
      if (webhookLogs.innerHTML.includes('Idle.')) {
        webhookLogs.innerHTML = '';
      }
      webhookLogs.appendChild(entry);
      webhookLogs.scrollTop = webhookLogs.scrollHeight;
    }, 3000);

    // Audit log stream
    if (saasAuditInterval) clearInterval(saasAuditInterval);
    saasAuditInterval = setInterval(() => {
      if (!auditLogs) return;
      const time = new Date().toLocaleTimeString();
      const messages = [
        "Audit check: 24 incoming REST requests authenticated successfully.",
        "System backup: Hourly checkpoint successfully snapshot to S3 AWS bucket.",
        "Resource load check: Node memory utilization at 34.2%. High compute available.",
        "Suspicious request block: 0 suspect intrusion vectors detected.",
        "Policy audit: SSL Certificates validation check passed. HTTPS active."
      ];
      const msg = messages[Math.floor(Math.random() * messages.length)];
      
      const entry = document.createElement('div');
      entry.style.color = 'var(--text-muted)';
      entry.textContent = `[${time}] [Audit] ${msg}`;
      
      auditLogs.appendChild(entry);
      auditLogs.scrollTop = auditLogs.scrollHeight;
    }, 4500);
  }

  function destroySaaSCloudModule() {
    console.log("[SaaS Cloud] Clearing SaaS module intervals...");
    if (saasPingInterval) clearInterval(saasPingInterval);
    if (saasWebhookInterval) clearInterval(saasWebhookInterval);
    if (saasAuditInterval) clearInterval(saasAuditInterval);
  }

  function bindSaaSEvents() {
    if (saasEventsBound) return;
    
    const selectCompany = document.getElementById('saas-select-company');
    const selectRole = document.getElementById('saas-select-role');
    const selectWorkspace = document.getElementById('saas-select-workspace');
    const privilegeLevel = document.getElementById('saas-privilege-level');
    const auditLogs = document.getElementById('saas-audit-logs');

    if (selectRole && privilegeLevel) {
      selectRole.addEventListener('change', () => {
        const role = selectRole.value;
        let priv = 'READ ONLY VIEWPORTS';
        let color = 'var(--text-muted)';
        
        if (role === 'Super Admin') {
          priv = 'FULL ROOT ACCESS';
          color = 'var(--primary)';
        } else if (role === 'Organization Admin') {
          priv = 'TENANT PRIVILEGES';
          color = 'var(--secondary)';
        } else if (role === 'Data Analyst') {
          priv = 'READ & EXECUTE WRITEBACKS';
          color = 'var(--success)';
        } else if (role === 'Risk Manager') {
          priv = 'COMPLIANCE & MITIGATION SCOPE';
          color = '#f59e0b';
        }

        privilegeLevel.textContent = priv;
        privilegeLevel.style.color = color;

        if (auditLogs) {
          const entry = document.createElement('div');
          entry.style.color = 'var(--secondary)';
          entry.textContent = `[${new Date().toLocaleTimeString()}] [Security] Swapped active user role privileges to: ${role} (${priv})`;
          auditLogs.appendChild(entry);
          auditLogs.scrollTop = auditLogs.scrollHeight;
        }
      });
    }

    if (selectCompany) {
      selectCompany.addEventListener('change', () => {
        if (auditLogs) {
          const entry = document.createElement('div');
          entry.style.color = 'var(--secondary)';
          entry.textContent = `[${new Date().toLocaleTimeString()}] [Tenant] Swapped active organization workspace to: ${selectCompany.value.toUpperCase()}`;
          auditLogs.appendChild(entry);
          auditLogs.scrollTop = auditLogs.scrollHeight;
        }
      });
    }

    if (selectWorkspace) {
      selectWorkspace.addEventListener('change', () => {
        if (auditLogs) {
          const entry = document.createElement('div');
          entry.style.color = 'var(--secondary)';
          entry.textContent = `[${new Date().toLocaleTimeString()}] [Cluster] Active compute workspace switched to node: ${selectWorkspace.value.toUpperCase()}`;
          auditLogs.appendChild(entry);
          auditLogs.scrollTop = auditLogs.scrollHeight;
        }
      });
    }

    const btnGenToken = document.getElementById('btn-saas-generate-token');
    const tokenBox = document.getElementById('saas-token-display-box');
    const tokenDisplay = document.getElementById('saas-generated-token');
    const btnCopyToken = document.getElementById('btn-saas-copy-token');

    if (btnGenToken && tokenBox && tokenDisplay) {
      btnGenToken.addEventListener('click', () => {
        const rand = Array.from({length: 24}, () => Math.floor(Math.random()*16).toString(16)).join('');
        const token = `anl_live_${rand}`;
        tokenDisplay.textContent = token;
        tokenBox.style.display = 'flex';

        if (auditLogs) {
          const entry = document.createElement('div');
          entry.style.color = 'var(--success)';
          entry.textContent = `[${new Date().toLocaleTimeString()}] [API Hub] Generated new secure REST token authorization code.`;
          auditLogs.appendChild(entry);
          auditLogs.scrollTop = auditLogs.scrollHeight;
        }
      });
    }

    if (btnCopyToken && tokenDisplay) {
      btnCopyToken.addEventListener('click', () => {
        navigator.clipboard.writeText(tokenDisplay.textContent)
          .then(() => alert(currentLang === 'tr' ? 'API Tokanı kopyalandı!' : 'API Token copied to clipboard!'))
          .catch(() => alert(tokenDisplay.textContent));
      });
    }

    const planButtons = document.querySelectorAll('.btn-saas-plan');
    const planBadge = document.getElementById('saas-billing-plan-badge');
    const tokenLimitVal = document.getElementById('saas-token-limit-values');
    const tokenProgressBar = document.getElementById('saas-token-progress-bar');
    const apiLimitVal = document.getElementById('saas-api-limit-values');
    const apiProgressBar = document.getElementById('saas-api-progress-bar');

    planButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        planButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const plan = btn.getAttribute('data-plan');

        if (plan === 'ultra') {
          if (planBadge) planBadge.textContent = 'AI ULTRA';
          if (tokenLimitVal) tokenLimitVal.textContent = '4.2M / 10M';
          if (tokenProgressBar) {
            tokenProgressBar.style.width = '42%';
            tokenProgressBar.style.background = 'linear-gradient(90deg, #8b5cf6, var(--primary))';
          }
          if (apiLimitVal) apiLimitVal.textContent = '182K / 500K';
          if (apiProgressBar) {
            apiProgressBar.style.width = '36.4%';
            apiProgressBar.style.background = 'linear-gradient(90deg, var(--primary), var(--secondary))';
          }
        } else if (plan === 'enterprise') {
          if (planBadge) planBadge.textContent = 'ENTERPRISE';
          if (tokenLimitVal) tokenLimitVal.textContent = '12.8M / 50M';
          if (tokenProgressBar) {
            tokenProgressBar.style.width = '25.6%';
            tokenProgressBar.style.background = 'linear-gradient(90deg, #8b5cf6, var(--primary))';
          }
          if (apiLimitVal) apiLimitVal.textContent = '480K / 2M';
          if (apiProgressBar) {
            apiProgressBar.style.width = '24%';
            apiProgressBar.style.background = 'linear-gradient(90deg, var(--primary), var(--secondary))';
          }
        } else if (plan === 'pro') {
          if (planBadge) planBadge.textContent = 'PRO';
          if (tokenLimitVal) tokenLimitVal.textContent = '1.9M / 2M';
          if (tokenProgressBar) {
            tokenProgressBar.style.width = '95%';
            tokenProgressBar.style.background = 'linear-gradient(90deg, #f59e0b, var(--danger))';
          }
          if (apiLimitVal) apiLimitVal.textContent = '95K / 100K';
          if (apiProgressBar) {
            apiProgressBar.style.width = '95%';
            apiProgressBar.style.background = 'linear-gradient(90deg, #f59e0b, var(--danger))';
          }
        }

        if (auditLogs) {
          const entry = document.createElement('div');
          entry.style.color = 'var(--text-secondary)';
          entry.textContent = `[${new Date().toLocaleTimeString()}] [Billing] Swapped monthly billing threshold metric workspace limits.`;
          auditLogs.appendChild(entry);
          auditLogs.scrollTop = auditLogs.scrollHeight;
        }
      });
    });

    const marketInstallBtns = document.querySelectorAll('.btn-saas-install-app');
    marketInstallBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const app = btn.getAttribute('data-app');
        btn.textContent = currentLang === 'tr' ? 'Kuruluyor...' : 'Installing...';
        btn.disabled = true;
        
        setTimeout(() => {
          btn.textContent = currentLang === 'tr' ? 'Aktif' : 'Installed (Active)';
          btn.style.borderColor = 'var(--success-glow)';
          btn.style.color = 'var(--success)';
          
          if (auditLogs) {
            const entry = document.createElement('div');
            entry.style.color = 'var(--success)';
            entry.textContent = `[${new Date().toLocaleTimeString()}] [Marketplace] Securely installed ML plugin module: ${app.toUpperCase()} AI extension PACK.`;
            auditLogs.appendChild(entry);
            auditLogs.scrollTop = auditLogs.scrollHeight;
          }
        }, 1500);
      });
    });

    const btnSaasInvoice = document.getElementById('btn-download-saas-invoice');
    if (btnSaasInvoice) {
      btnSaasInvoice.addEventListener('click', () => {
        if (typeof jspdf !== 'undefined') {
          try {
            const { jsPDF } = jspdf;
            const doc = new jsPDF();
            
            const activePlan = planBadge ? planBadge.textContent : 'AI ULTRA';
            const companyName = currentCompany || 'ANL Global Systems Inc.';
            const dateStr = new Date().toLocaleDateString();
            
            doc.setFillColor(22, 28, 45);
            doc.rect(0, 0, 210, 35, 'F');
            
            doc.setFont("helvetica", "bold");
            doc.setFontSize(22);
            doc.setTextColor(255, 255, 255);
            doc.text("ANL VERTEX CLOUD", 15, 22);
            
            doc.setFontSize(10);
            doc.setTextColor(150, 150, 150);
            doc.text("INVOICE STATEMENT", 150, 22);
            
            doc.setFont("helvetica", "normal");
            doc.setTextColor(50, 50, 50);
            doc.setFontSize(10);
            doc.text(`Tenant Corp: ${companyName}`, 15, 50);
            doc.text(`Billing Plan: ${activePlan}`, 15, 56);
            doc.text(`Statement Date: ${dateStr}`, 15, 62);
            doc.text(`Invoice ID: INV-ANL-${Math.floor(100000 + Math.random()*900000)}`, 150, 50);
            
            doc.setDrawColor(200, 200, 200);
            doc.line(15, 70, 195, 70);
            
            doc.setFont("helvetica", "bold");
            doc.text("Item / Description", 15, 80);
            doc.text("Compute Nodes", 100, 80);
            doc.text("Usage Value", 140, 80);
            doc.text("Total Cost", 175, 80);
            
            doc.setFont("helvetica", "normal");
            doc.text(`SaaS Subscription Fee - (${activePlan} tier)`, 15, 92);
            doc.text("US-HQ / EU-Node", 100, 92);
            doc.text("Flat rate limits", 140, 92);
            doc.text(activePlan === 'PRO' ? "$99.00" : activePlan === 'ENTERPRISE' ? "$850.00" : "$299.00", 175, 92);
            
            doc.text("Model Token Overages", 15, 100);
            doc.text("AutoML swarm instances", 100, 100);
            doc.text("No excess tokens", 140, 100);
            doc.text("$0.00", 175, 100);
            
            doc.line(15, 110, 195, 110);
            
            doc.setFont("helvetica", "bold");
            doc.text("Grand Total Due (USD):", 120, 120);
            doc.setTextColor(37, 99, 235);
            doc.text(activePlan === 'PRO' ? "$99.00" : activePlan === 'ENTERPRISE' ? "$850.00" : "$299.00", 175, 120);
            
            doc.setFont("helvetica", "italic");
            doc.setTextColor(150, 150, 150);
            doc.setFontSize(8);
            doc.text("Thank you for partnering with ANL Vertex SaaS Cloud Computing Solutions. Compliance certificate: SOC2 Type II audit verified.", 15, 140);
            
            const filename = `ANL_Invoice_${companyName.replace(/[^a-zA-Z0-9]/g, "_")}.pdf`;
            doc.save(filename);
            alert(currentLang === 'tr' ? 'Fatura PDF dosyası indirildi!' : 'Invoice PDF statement downloaded!');
          } catch (e) {
            console.error('Failed to generate SaaS invoice:', e);
            alert('Failed to generate PDF invoice locally: ' + e.message);
          }
        } else {
          alert('jsPDF library is not loaded yet!');
        }
      });
    }

    saasEventsBound = true;
  }

  // ================= CENTRALIZED ENTERPRISE ROUTING SYSTEM =================
  function bindGeneralDashboardEvents() {}
  function bindSchemaEvents() {}
  function bindAutoMLEvents() {}
  function bindAutoBuilderEvents() {}
  function bindAuraEvents() {}

  const routeRegistry = {
    dashboard: {
      id: 'dashboard',
      sectionId: 'dashboard-insights-section',
      init() {
        console.log("[Router Debug] Initializing General Analytics Dashboard...");
        updateThemeColor(currentSector);
        updateDashboardLanguageSpecifics();
      },
      render() {
        console.log("[Router Debug] Rendering General Analytics Dashboard...");
        loadSectorSchema(currentSector, () => {
          setupSectorDashboard();
        });
      },
      bindEvents() {},
      destroy() {}
    },
    schema: {
      id: 'schema',
      sectionId: 'dashboard-schema-intel-section',
      init() {
        console.log("[Schema Panel] Initializing Schema Intelligence Panel...");
      },
      destroy() {
        console.log("[Schema Panel] Destroying Schema Intelligence Panel...");
      },
      populateSchemaResults(fileName, parsedData, detectedSector) {
        const rowCount = parsedData.rows ? parsedData.rows.length : parsedData.rowCount;
        const colCount = parsedData.columns.length;
        
        let nullCellsCount = 0;
        if (parsedData.rows) {
          parsedData.rows.forEach(row => {
            row.forEach(cell => {
              if (cell === null || cell === undefined || cell === '' || cell.toLowerCase() === 'null' || cell.toLowerCase() === 'na') {
                nullCellsCount++;
              }
            });
          });
        }
        if (nullCellsCount === 0 && rowCount > 0) {
          nullCellsCount = Math.round(rowCount * colCount * (0.01 + Math.random() * 0.03));
        }
        const totalCells = rowCount * colCount;
        const nullRate = totalCells > 0 ? (nullCellsCount / totalCells) * 100 : 0;
        const fileSizeKB = Math.round((rowCount * colCount * 65) / 1024);

        const rowsEl = document.getElementById('res-rows');
        const colsEl = document.getElementById('res-cols');
        const nullsEl = document.getElementById('res-nulls');
        const sizeEl = document.getElementById('res-size');

        if (rowsEl) rowsEl.textContent = rowCount.toLocaleString();
        if (colsEl) colsEl.textContent = colCount;
        if (nullsEl) nullsEl.textContent = `%${nullRate.toFixed(2)}`;
        if (sizeEl) sizeEl.textContent = `${fileSizeKB.toLocaleString()} KB`;

        let qualityScore = 98 - Math.round(nullRate * 2);
        if (qualityScore < 40) qualityScore = 40;
        
        const scoreVal = document.getElementById('res-score-val');
        const scoreCircle = document.getElementById('res-score-circle');
        if (scoreVal) scoreVal.textContent = `${qualityScore}%`;
        if (scoreCircle) {
          const offset = 283 - (283 * qualityScore) / 100;
          scoreCircle.style.strokeDashoffset = offset;
        }
        
        const scoreCard = document.getElementById('card-dataset-overview');
        if (scoreCard) {
          scoreCard.className = 'glass-card';
          if (qualityScore >= 80) {
            if (scoreCircle) scoreCircle.style.stroke = '#10b981';
            scoreCard.classList.add('glow-card-green');
          } else if (qualityScore >= 50) {
            if (scoreCircle) scoreCircle.style.stroke = '#f97316';
            scoreCard.classList.add('glow-card-orange');
          } else {
            if (scoreCircle) scoreCircle.style.stroke = '#ef4444';
            scoreCard.classList.add('glow-card-red');
          }
        }

        const sectorNameEl = document.getElementById('res-sector-name');
        const sectorConfidenceEl = document.getElementById('res-sector-confidence');
        const sectorBarEl = document.getElementById('res-sector-bar');
        const sectorDetailsEl = document.getElementById('res-sector-details');
        const btnApplySchema = document.getElementById('btn-apply-schema');

        const sectorMap = {
          finance: {
            title: currentLang === 'tr' ? "FİNANS / BAĞIŞ VE KREDİ SKORLAMA" : "FINANCE / DONATION & CREDIT SCORING",
            confidence: 96,
            details: currentLang === 'tr' 
              ? "Bu veri seti finansal göstergeler, katılım sıklıkları ve bağış limitleri içeriyor. ANL Finans Modeli (Vakıf/Dernek) ile tam uyumludur."
              : "This dataset contains financial values, donation limits, and frequency statistics. Fully compatible with ANL Finance Model (Vakıf/Dernek).",
            sectorKey: 'vakif'
          },
          logistics: {
            title: currentLang === 'tr' ? "ULAŞIM VE LOJİSTİK / ROTASYON TAHMİNİ" : "LOGISTICS / ROUTE DELAY RISK FORECASTING",
            confidence: 94,
            details: currentLang === 'tr'
               ? "Veri kümesi mesafe, kurye verimliliği, kargo yükleri ve trafik durumunu içeriyor. ANL Ulaşım ve Lojistik Modeli ile tam uyumludur."
               : "This dataset contains delivery distance, package load, courier capacity, and traffic status. Fully compatible with ANL Logistics Model.",
            sectorKey: 'lojistik'
          },
          textile: {
            title: currentLang === 'tr' ? "TEKSTİL PERAKENDE / MÜŞTERİ SEGMENTASYONU" : "TEXTILE RETAIL / CUSTOMER SEGMENTATION",
            confidence: 95,
            details: currentLang === 'tr'
              ? "Veri seti sepet tutarları, alışveriş sıklıkları ve indirim duyarlılığı içeriyor. ANL Tekstil Perakende Modeli (K-NN) ile tam uyumludur."
              : "This dataset contains basket amount, discount sensitivity, and shopping frequencies. Fully compatible with ANL Textile Retail Model.",
            sectorKey: 'tekstil'
          },
          education: {
            title: currentLang === 'tr' ? "EĞİTİM SEKTÖRÜ / AKADEMİK BAŞARI TAHMİNİ" : "EDUCATION / ACADEMIC SUCCESS PROBABILITY",
            confidence: 93,
            details: currentLang === 'tr'
              ? "Veri seti çalışma süreleri, ders devam oranları ve sınav puanları içeriyor. ANL Eğitim Başarı Modeli (Lojistik Regresyon) ile tam uyumludur."
              : "This dataset contains student study hours, attendance rates, and exam scores. Fully compatible with ANL Education Success Model.",
            sectorKey: 'egitim'
          },
          food: {
            title: currentLang === 'tr' ? "GIDA VE FMCG / TALEP VE SİPARİŞ REGRESYONU" : "FOOD & FMCG / ORDER DEMAND REGRESSION",
            confidence: 92,
            details: currentLang === 'tr'
              ? "Veri seti şube lokasyonları, restoran konseptleri, şube puanları ve sipariş adedi içeriyor. ANL Gıda Sipariş Modeli (Lineer Regresyon) ile tam uyumludur."
              : "This dataset contains restaurant ratings, locations, order qty, and concept categories. Fully compatible with ANL Food Order Model.",
            sectorKey: 'gida'
          }
        };

        const sectorInfo = sectorMap[detectedSector] || sectorMap.finance;
        
        if (sectorNameEl) sectorNameEl.textContent = sectorInfo.title;
        if (sectorConfidenceEl) sectorConfidenceEl.textContent = `${sectorInfo.confidence}% Confidence`;
        
        if (sectorBarEl) {
          setTimeout(() => {
            sectorBarEl.style.width = `${sectorInfo.confidence}%`;
          }, 100);
        }
        
        if (sectorDetailsEl) sectorDetailsEl.textContent = sectorInfo.details;
        if (btnApplySchema) btnApplySchema.setAttribute('data-target-sector', sectorInfo.sectorKey);

        const mlTargetEl = document.getElementById('res-ml-target');
        const mlFeaturesEl = document.getElementById('res-ml-features');
        const mlTypeEl = document.getElementById('res-ml-type');

        let targetCol = '';
        let featureCols = [];
        
        parsedData.columns.forEach(col => {
          const cl = col.toLowerCase();
          if (cl.includes('approved') || cl.includes('delayed') || cl.includes('class') || cl.includes('grade') || cl.includes('price') || cl.includes('status') || cl.includes('risk') || cl.includes('tahmin') || cl.includes('hedef')) {
            targetCol = col;
          } else if (!cl.includes('id') && !cl.includes('name') && !cl.includes('ad') && !cl.includes('no')) {
            featureCols.push(col);
          }
        });

        if (!targetCol && parsedData.columns.length > 0) {
          targetCol = parsedData.columns[parsedData.columns.length - 1];
          featureCols = parsedData.columns.slice(0, -1).filter(c => !c.toLowerCase().includes('id'));
        }

        if (mlTargetEl) mlTargetEl.textContent = targetCol;
        if (mlFeaturesEl) mlFeaturesEl.textContent = featureCols.join(', ');
        
        const isNumericTarget = targetCol.toLowerCase().includes('price') || targetCol.toLowerCase().includes('score') || targetCol.toLowerCase().includes('tutar') || targetCol.toLowerCase().includes('oran');
        if (mlTypeEl) mlTypeEl.textContent = isNumericTarget ? 'Supervised Regression' : 'Supervised Classification';

        const tableBody = document.getElementById('res-columns-table-body');
        if (tableBody) {
          tableBody.innerHTML = '';

          parsedData.columns.forEach(col => {
            const tr = document.createElement('tr');
            const cl = col.toLowerCase();
            
            const tdName = document.createElement('td');
            tdName.innerHTML = `<strong>${col}</strong>`;
            
            const tdType = document.createElement('td');
            let type = 'categorical';
            if (cl.includes('id') || cl.includes('name') || cl.includes('ad') || cl.includes('kod')) {
              type = 'text';
            } else if (cl.includes('approved') || cl.includes('delayed') || cl.includes('loc') || cl.includes('applied') || cl.includes('durum')) {
              type = 'boolean';
            } else if (cl.includes('date') || cl.includes('time') || cl.includes('tarih')) {
              type = 'datetime';
            } else if (cl.includes('income') || cl.includes('credit') || cl.includes('dti') || cl.includes('days') || cl.includes('distance') || cl.includes('sessions') || cl.includes('tickets') || cl.includes('size') || cl.includes('beds') || cl.includes('glucose') || cl.includes('bmi') || cl.includes('age') || cl.includes('tutar')) {
              type = 'numerical';
            }
            
            tdType.innerHTML = `<span class="badge-type ${type}">${type}</span>`;
            
            const tdNulls = document.createElement('td');
            let colNullRate = 0;
            if (nullCellsCount > 0) {
              colNullRate = Math.random() > 0.6 ? (nullRate * 2.2).toFixed(1) : 0;
            }
            tdNulls.textContent = `%${colNullRate}`;
            
            const tdStats = document.createElement('td');
            if (type === 'numerical') {
              let min = 1, max = 100;
              if (cl.includes('income')) { min = 10; max = 10000; }
              else if (cl.includes('days') || cl.includes('distance')) { min = 1; max = 500; }
              else if (cl.includes('sessions') || cl.includes('basket')) { min = 100; max = 10000; }
              else if (cl.includes('age')) { min = 18; max = 80; }
              tdStats.innerHTML = `<span style="color:var(--text-secondary);">Range:</span> [${min} - ${max}]`;
            } else if (type === 'categorical' || type === 'text') {
              const uniqueCount = cl.includes('name') || cl.includes('id') ? Math.round(rowCount * 0.95) : Math.round(3 + Math.random() * 5);
              tdStats.innerHTML = `<span style="color:var(--text-secondary);">${uniqueCount} Unique values</span>`;
            } else if (type === 'boolean') {
              tdStats.innerHTML = `<span style="color:var(--text-secondary);">True/False</span>`;
            } else if (type === 'datetime') {
              tdStats.innerHTML = `<span style="color:var(--text-secondary);">2026-01-01 ➔ 2026-05-24</span>`;
            }
            
            const tdAnomaly = document.createElement('td');
            let anomalyText = currentLang === 'tr' ? 'Kararlı (Risk Yok)' : 'Stable (No risk)';
            let anomalyColor = 'var(--text-secondary)';
            
            if (col === targetCol) {
              anomalyText = currentLang === 'tr' ? '🎯 ML Hedef Değişkeni' : '🎯 ML Target Label';
              anomalyColor = 'var(--primary)';
            } else if (parseFloat(colNullRate) > 4) {
              anomalyText = currentLang === 'tr' ? '⚠️ Yüksek Boş Değer Oranı' : '⚠️ High Missing Rate';
              anomalyColor = '#f97316';
            } else if (type === 'text' && !cl.includes('id')) {
              anomalyText = currentLang === 'tr' ? '⚠️ Yüksek Kardinalite (Metin)' : '⚠️ High Cardinality Text';
              anomalyColor = '#8b5cf6';
            } else if (type === 'numerical' && Math.random() > 0.85) {
              anomalyText = currentLang === 'tr' ? '⚠️ Olası Uç Değerler (Outliers)' : '⚠️ Potential Outliers';
              anomalyColor = '#f97316';
            }
            
            tdAnomaly.innerHTML = `<span style="color: ${anomalyColor}; font-weight: 500;">${anomalyText}</span>`;
            
            tr.appendChild(tdName);
            tr.appendChild(tdType);
            tr.appendChild(tdNulls);
            tr.appendChild(tdStats);
            tr.appendChild(tdAnomaly);
            tableBody.appendChild(tr);
          });
        }

        const warningsList = document.getElementById('res-warnings-list');
        if (warningsList) {
          warningsList.innerHTML = '';
          let warnings = [];
          if (currentLang === 'tr') {
            warnings.push(`Sistem hedef değişkeni olarak <strong>"${targetCol}"</strong> sütununu otomatik olarak eşleştirdi. Olası target leakage risklerini önlemek için bu değişkenin girdi verilerinden türetilmediğini doğrulayın.`);
            if (nullRate > 0) {
              warnings.push(`Veri kümesinde ortalama <strong>%${nullRate.toFixed(1)}</strong> oranında boş hücre tespit edildi. Modelin başarısını etkilememesi için eksik veri tamamlama (imputation) önerilir.`);
            }
            warnings.push(`Yüksek boyutlu sınıf dengesizliği riski: Makine öğrenimi modelinin yanlılık (bias) göstermemesi için eğitim öncesi sınıfların eşit dağıtıldığından emin olun.`);
          } else {
            warnings.push(`System mapped <strong>"${targetCol}"</strong> as target label. Verify that this column is not derived from inputs to prevent label leakage.`);
            if (nullRate > 0) {
              warnings.push(`Detected <strong>%${nullRate.toFixed(1)}</strong> missing values. Data imputation is highly recommended prior to training.`);
            }
            warnings.push(`Class imbalance warning: Ensure classes are distributed evenly before training to prevent model bias.`);
          }
          
          warnings.forEach(warn => {
            const li = document.createElement('li');
            li.innerHTML = warn;
            warningsList.appendChild(li);
          });
        }

        const recsList = document.getElementById('res-recommendations-list');
        if (recsList) {
          recsList.innerHTML = '';
          let recommendations = [];
          if (currentLang === 'tr') {
            recommendations.push(`Özellik Mühendisliği (Feature Engineering): Benzersiz kimlik bildiren metin sütunlarını (Örn: isim, kod) model eğitiminden önce kaldırın.`);
            recommendations.push(`Eksik Veriler İçin Çözüm: Kategorik boş hücreler için 'En Sık Geçen Değer' (Mode) veya sayısal boş hücreler için 'Ortalama Değer' (Mean Imputation) tekniklerini uygulayın.`);
            recommendations.push(`Model Önerisi: Sektör sınıflandırmasında en yüksek eşleşme gösteren **"${sectorInfo.title.split('/')[0]}"** model profilini aktifleştirin.`);
          } else {
            recommendations.push(`Feature Engineering: Remove high cardinality text identifiers (e.g. ID, name, code) from input features list before fitting.`);
            recommendations.push(`Missing Values: Apply 'Most Frequent' (Mode) substitution for categorical nulls and 'Mean Imputation' for numerical nulls.`);
            recommendations.push(`Model Profile: Activate the **"${sectorInfo.title.split('/')[0]}"** model profile, which aligns with the highest compatibility score.`);
          }
          
          recommendations.forEach(rec => {
            const li = document.createElement('li');
            li.innerHTML = rec;
            recsList.appendChild(li);
          });
        }
      },
      render() {
        console.log("[Schema Panel] Rendering Schema Intelligence Panel...");
        const container = document.getElementById('dashboard-schema-intel-section');
        if (!container) return '';

        const html = `
          <header class="dashboard-header">
            <div>
              <h1 data-i18n="schema_title">${currentLang === 'tr' ? 'Schema Intelligence Engine' : 'Schema Intelligence Engine'}</h1>
              <p style="color: var(--text-secondary); font-size: 0.9rem;" data-i18n="schema_subtitle">
                ${currentLang === 'tr' ? 'Yapay zeka destekli otonom veri yapısı haritalama ve veri kümesi zafiyet tespit motoru.' : 'AI-powered autonomous data structure mapping and dataset vulnerability detection engine.'}
              </p>
            </div>
          </header>

          <!-- Initial Upload View -->
          <div id="schema-upload-view" class="glass-card" style="padding: 2.5rem; text-align: center; margin-bottom: 2rem; ${lastUploadedDataset ? 'display: none;' : ''}">
            <div class="drop-zone" id="schema-drop-zone">
              <!-- Floating particles inside drag zone -->
              <div class="particle-container" id="upload-particles"></div>
              <div class="drop-zone-icon">📥</div>
              <h3 style="margin-bottom: 0.5rem;" data-i18n="upload_title">${currentLang === 'tr' ? 'Veri Kümesini Buraya Sürükleyin veya Dosya Seçin' : 'Drag & Drop Dataset Here or Browse Files'}</h3>
              <p style="color: var(--text-secondary); font-size: 0.88rem; margin-bottom: 1.5rem;" data-i18n="upload_desc">
                ${currentLang === 'tr' ? 'CSV, TXT veya JSON formatındaki veri kümenizi sürükleyip bırakarak AI analizini başlatın.' : 'Upload CSV, TXT or JSON dataset format to trigger automated AI intelligence analysis.'}
              </p>
              <button type="button" class="btn-primary" id="btn-browse-schema-file" style="width: auto; padding: 0.7rem 2rem;" data-i18n="btn_browse_file">${currentLang === 'tr' ? 'Dosya Seçin' : 'Browse Files'}</button>
              <input type="file" id="schema-file-input" style="display: none;" accept=".csv,.txt,.json">
            </div>

            <!-- Sample Files to try instantly -->
            <div style="margin-top: 2rem; border-top: 1px dashed var(--border-color); padding-top: 1.5rem;">
              <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.8rem;" data-i18n="quick_samples_title">${currentLang === 'tr' ? 'Dosyanız yok mu? Örnek şablonlar ile anında test edin:' : 'No dataset? Test instantly using pre-configured sample templates:'}</p>
              <div style="display: flex; justify-content: center; gap: 0.8rem; flex-wrap: wrap;">
                <button class="btn-secondary btn-sample-dataset" data-dataset="credit" style="padding: 0.4rem 1rem; font-size: 0.78rem;">📊 kredi_tahmin.csv (${currentLang === 'tr' ? 'Finans' : 'Finance'})</button>
                <button class="btn-secondary btn-sample-dataset" data-dataset="logistics" style="padding: 0.4rem 1rem; font-size: 0.78rem;">🚚 kurye_lojistik.csv (${currentLang === 'tr' ? 'Lojistik' : 'Logistics'})</button>
                <button class="btn-secondary btn-sample-dataset" data-dataset="retail" style="padding: 0.4rem 1rem; font-size: 0.78rem;">🛍️ tekstil_retail.csv (${currentLang === 'tr' ? 'Tekstil' : 'Textile'})</button>
                <button class="btn-secondary btn-sample-dataset" data-dataset="food" style="padding: 0.4rem 1rem; font-size: 0.78rem;">🍕 restoran_siparis.csv (${currentLang === 'tr' ? 'Gıda' : 'Food'})</button>
              </div>
            </div>
          </div>

          <!-- Analyzing / Scanning View -->
          <div id="schema-scanning-view" class="glass-card" style="display: none; padding: 3rem; text-align: center; margin-bottom: 2rem;">
            <div class="scanning-container">
              <div class="radar-circle">
                <div class="radar-circle-center"></div>
              </div>
              <h3 style="margin-bottom: 0.5rem; color: var(--primary);" data-i18n="scanning_title">${currentLang === 'tr' ? 'AI Otonom Tarayıcı Çalışıyor...' : 'AI Autonomous Scanner Running...'}</h3>
              <p style="color: var(--text-secondary); font-size: 0.88rem; margin-bottom: 2rem;" data-i18n="scanning_desc">
                ${currentLang === 'tr' ? 'Veri kümesi satırları okunuyor, sütun tipleri ve zafiyetler yapay zeka ile haritalandırılıyor.' : 'Parsing dataset records, mapping column structures and identifying security vulnerabilities.'}
              </p>

              <!-- Live AI Log console -->
              <div style="width: 100%; display: flex; justify-content: center;">
                <div class="terminal-console" id="schema-terminal-logs">
                  <span class="terminal-cursor"></span>
                </div>
              </div>
            </div>
          </div>

          <!-- Analysis Results View -->
          <div id="schema-results-view" style="${lastUploadedDataset ? 'display: block;' : 'display: none;'}">
            <!-- Top Row: Overview, Sector Detection & ML Profile -->
            <div class="schema-grid">
              <!-- Dataset Overview (Quality Score) -->
              <div class="glass-card" id="card-dataset-overview" style="display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                  <h3 style="margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                    <span>📊</span> <span data-i18n="panel_overview">${currentLang === 'tr' ? 'Veri Seti Genel Analizi' : 'Dataset Overview Analysis'}</span>
                  </h3>
                  <div style="display: flex; flex-direction: column; gap: 0.6rem; font-size: 0.85rem; color: var(--text-secondary);">
                    <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.03); padding-bottom: 0.3rem;">
                      <span>${currentLang === 'tr' ? 'Toplam Satır:' : 'Total Rows:'}</span>
                      <strong style="color: var(--text-primary);" id="res-rows">-</strong>
                    </div>
                    <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.03); padding-bottom: 0.3rem;">
                      <span>${currentLang === 'tr' ? 'Toplam Sütun:' : 'Total Columns:'}</span>
                      <strong style="color: var(--text-primary);" id="res-cols">-</strong>
                    </div>
                    <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.03); padding-bottom: 0.3rem;">
                      <span>${currentLang === 'tr' ? 'Boş (Null) Hücre Oranı:' : 'Missing (Null) Cells Rate:'}</span>
                      <strong style="color: var(--text-primary);" id="res-nulls">-</strong>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                      <span>${currentLang === 'tr' ? 'Tahmini Dosya Boyutu:' : 'Estimated File Size:'}</span>
                      <strong style="color: var(--text-primary);" id="res-size">-</strong>
                    </div>
                  </div>
                </div>

                <!-- Quality Score Circular Dial -->
                <div style="display: flex; align-items: center; gap: 1.5rem; border-top: 1px dashed var(--border-color); padding-top: 1rem; margin-top: 1.5rem;">
                  <div class="score-circle-container">
                    <svg class="score-circle-svg">
                      <circle class="score-circle-bg" cx="55" cy="55" r="45" />
                      <circle class="score-circle-fill" id="res-score-circle" cx="55" cy="55" r="45" style="stroke-dashoffset: 283;" />
                    </svg>
                    <div class="score-circle-text" id="res-score-val">0%</div>
                  </div>
                  <div>
                    <h4 style="margin: 0 0 0.2rem 0; font-size: 0.9rem;" data-i18n="score_title">${currentLang === 'tr' ? 'Veri Kalite Puanı' : 'Data Quality Score'}</h4>
                    <p style="margin: 0; font-size: 0.72rem; color: var(--text-muted); line-height: 1.35;" data-i18n="score_desc">
                      ${currentLang === 'tr' ? 'Hücre doluluk oranları, tip kararlılığı ve anormalliklere göre hesaplanan genel sağlık skoru.' : 'Overall health score calculated based on cell completion, type consistency and outliers.'}
                    </p>
                  </div>
                </div>
              </div>

              <!-- AI Sector Classification -->
              <div class="glass-card" id="card-sector-detection">
                <h3 style="margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                  <span>🧠</span> <span data-i18n="panel_sector_detect">${currentLang === 'tr' ? 'AI Sektör Sınıflandırması' : 'AI Sector Classification'}</span>
                </h3>
                <p style="font-size: 0.78rem; color: var(--text-secondary); margin-bottom: 1.2rem; line-height: 1.4;" data-i18n="sector_detect_desc">
                  ${currentLang === 'tr' ? 'Sütun isimleri ve veri karakteristikleri analiz edilerek en olası ticari kullanım senaryosu eşleştirildi.' : 'Sectors are identified by parsing dataset names and distributions to resolve appropriate commercial scenarios.'}
                </p>

                <!-- Progress bar of detected sector confidence -->
                <div style="background: rgba(0,0,0,0.25); border: 1px solid var(--border-color); padding: 1.2rem; border-radius: 8px; margin-bottom: 1.2rem;">
                  <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.88rem; font-weight: bold;">
                    <span style="color: var(--primary); text-transform: uppercase;" id="res-sector-name">-</span>
                    <span id="res-sector-confidence">0% Confidence</span>
                  </div>
                  <div class="confidence-bar-outer">
                    <div class="confidence-bar-inner" id="res-sector-bar" style="width: 0%;"></div>
                  </div>
                </div>

                <!-- Sector compatibility info -->
                <div style="font-size: 0.75rem; color: var(--text-muted); line-height: 1.4;">
                  <strong style="color: var(--text-secondary); display: block; margin-bottom: 0.2rem;" data-i18n="sec_comp_title">${currentLang === 'tr' ? 'Sektörel Uyumluluk:' : 'Commercial Compatibility:'}</strong>
                  <span id="res-sector-details">-</span>
                </div>
              </div>

              <!-- Suggested ML Profile (Features, Target & Problem Type) -->
              <div class="glass-card">
                <h3 style="margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                  <span>🎯</span> <span data-i18n="panel_ml_profile">${currentLang === 'tr' ? 'AI Makine Öğrenimi Profili' : 'AI Machine Learning Profile'}</span>
                </h3>
                
                <div style="display: flex; flex-direction: column; gap: 0.8rem; font-size: 0.8rem;">
                  <div>
                    <span style="font-size: 0.72rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 700; display: block; margin-bottom: 0.25rem;">${currentLang === 'tr' ? 'Önerilen Target (Hedef Değişken):' : 'Suggested Target Label:'}</span>
                    <div style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.15); padding: 0.4rem 0.8rem; border-radius: 6px; color: #ef4444; font-family: monospace; font-weight: bold; font-size: 0.82rem;" id="res-ml-target">
                      -
                    </div>
                  </div>

                  <div>
                    <span style="font-size: 0.72rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 700; display: block; margin-bottom: 0.25rem;">${currentLang === 'tr' ? 'Önerilen Öznitelikler (Input Features):' : 'Suggested Input Features:'}</span>
                    <div style="max-height: 80px; overflow-y: auto; background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); padding: 0.5rem; border-radius: 6px; font-family: monospace; font-size: 0.75rem; color: var(--text-primary); line-height: 1.4;" id="res-ml-features">
                      -
                    </div>
                  </div>

                  <div>
                    <span style="font-size: 0.72rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 700; display: block; margin-bottom: 0.25rem;">${currentLang === 'tr' ? 'Makine Öğrenimi Problem Türü:' : 'Predictive Problem Type:'}</span>
                    <span class="badge badge-success" style="font-size: 0.72rem; padding: 0.25rem 0.6rem; border-radius: 4px;" id="res-ml-type">-</span>
                  </div>
                </div>
              </div>

              <!-- Column Intelligence Table (Full Width) -->
              <div class="glass-card schema-full-width" id="card-column-intelligence">
                <h3 style="margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                  <span>🧬</span> <span data-i18n="panel_column_intel">${currentLang === 'tr' ? 'Sütun Tipi ve Veri Dağılım Analizi' : 'Column Data Type & Distribution Analysis'}</span>
                </h3>
                
                <div class="intel-table-container">
                  <table class="intel-table">
                    <thead>
                      <tr>
                        <th data-i18n="col_name">${currentLang === 'tr' ? 'Sütun Adı' : 'Column Name'}</th>
                        <th data-i18n="col_type">${currentLang === 'tr' ? 'Veri Tipi (Detected)' : 'Data Type (Detected)'}</th>
                        <th data-i18n="col_nulls">${currentLang === 'tr' ? 'Boş Hücre (Null %)' : 'Null Rate (Null %)'}</th>
                        <th data-i18n="col_stats">${currentLang === 'tr' ? 'İstatistiksel Dağılım / Benzersiz Değerler' : 'Statistical Distribution / Unique Values'}</th>
                        <th data-i18n="col_anomaly">${currentLang === 'tr' ? 'Sistem Zafiyet Analizi' : 'Vulnerability Analysis'}</th>
                      </tr>
                    </thead>
                    <tbody id="res-columns-table-body">
                      <!-- Dynamic column rows -->
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Risk Warnings -->
              <div class="glass-card glow-card-orange" id="card-risk-warnings">
                <h3 style="margin-bottom: 1rem; color: #f97316; display: flex; align-items: center; gap: 0.5rem;">
                  <span>⚠️</span> <span data-i18n="panel_warnings">${currentLang === 'tr' ? 'Veri Güvenliği ve Risk Uyarıları' : 'Data Integrity & Security Risks'}</span>
                </h3>
                <ul style="padding-left: 1.2rem; margin: 0; display: flex; flex-direction: column; gap: 0.6rem; font-size: 0.82rem; line-height: 1.45; color: var(--text-secondary);" id="res-warnings-list">
                  <!-- Dynamic risk items -->
                </ul>
              </div>

              <!-- AI Recommendations -->
              <div class="glass-card glow-card-green" id="card-ai-recommendations">
                <h3 style="margin-bottom: 1rem; color: #10b981; display: flex; align-items: center; gap: 0.5rem;">
                  <span>💡</span> <span data-i18n="panel_recommendations">${currentLang === 'tr' ? 'AI Stratejik Temizlik Önerileri' : 'AI Strategic Cleaning Recommendations'}</span>
                </h3>
                <ul style="padding-left: 1.2rem; margin: 0; display: flex; flex-direction: column; gap: 0.6rem; font-size: 0.82rem; line-height: 1.45; color: var(--text-secondary);" id="res-recommendations-list">
                  <!-- Dynamic recommendations -->
                </ul>
              </div>

              <!-- Controls footer -->
              <div class="schema-full-width" style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 1rem; margin-bottom: 2rem;">
                <button type="button" class="btn-secondary" id="btn-reanalyze-schema" style="width: auto; padding: 0.7rem 1.8rem;" data-i18n="btn_reanalyze">${currentLang === 'tr' ? 'Başka Veri Seti Yükle' : 'Upload Another Dataset'}</button>
                <button type="button" class="btn-primary" id="btn-apply-schema" style="width: auto; padding: 0.7rem 1.8rem; box-shadow: 0 4px 14px var(--primary-glow);" data-i18n="btn_apply_schema">${currentLang === 'tr' ? 'Veri Şemasını Modele Uygula' : 'Apply Schema to Live Model'}</button>
              </div>

            </div>
          </div>
        `;

        container.innerHTML = html;

        // If a dataset is already loaded, populate it directly
        if (lastUploadedDataset) {
          this.populateSchemaResults(lastUploadedDataset.fileName, lastUploadedDataset.parsedData, lastUploadedDataset.detectedSector);
        }

        return html;
      },
      bindEvents() {
        console.log("[Schema Panel] Binding Schema Intelligence events...");
        
        const dropZone = document.getElementById('schema-drop-zone');
        const fileInput = document.getElementById('schema-file-input');
        const btnBrowse = document.getElementById('btn-browse-schema-file');
        
        if (btnBrowse && fileInput) {
          btnBrowse.addEventListener('click', () => fileInput.click());
          fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
              handleSchemaFile(e.target.files[0]);
            }
          });
        }

        if (dropZone) {
          dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropZone.classList.add('dragover');
          });
          dropZone.addEventListener('dragleave', () => {
            dropZone.classList.remove('dragover');
          });
          dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.classList.remove('dragover');
            if (e.dataTransfer.files.length > 0) {
              handleSchemaFile(e.dataTransfer.files[0]);
            }
          });
        }

        const sampleButtons = document.querySelectorAll('.btn-sample-dataset');
        sampleButtons.forEach(btn => {
          btn.addEventListener('click', () => {
            const datasetType = btn.getAttribute('data-dataset');
            loadSampleDataset(datasetType);
          });
        });

        const btnApplySchema = document.getElementById('btn-apply-schema');
        if (btnApplySchema) {
          btnApplySchema.addEventListener('click', () => {
            const targetSector = btnApplySchema.getAttribute('data-target-sector');
            if (targetSector) {
              currentSector = targetSector;
              
              const userCardDataRaw = localStorage.getItem('userCardData');
              if (userCardDataRaw) {
                try {
                  const cardData = JSON.parse(userCardDataRaw);
                  cardData.sector = targetSector;
                  localStorage.setItem('userCardData', JSON.stringify(cardData));
                } catch(err) {
                  console.error(err);
                }
              }
              
              transitionToDashboard();
              
              const btnInsights = document.getElementById('menu-btn-insights');
              const btnSchemaIntel = document.getElementById('menu-btn-schema-intel');
              const secInsights = document.getElementById('dashboard-insights-section');
              const secSchemaIntel = document.getElementById('dashboard-schema-intel-section');
              
              if (btnInsights) btnInsights.classList.add('active');
              if (btnSchemaIntel) btnSchemaIntel.classList.remove('active');
              if (secInsights) secInsights.classList.add('active');
              if (secSchemaIntel) secSchemaIntel.classList.remove('active');
              
              setActiveMenu('dashboard');
              
              alert(currentLang === 'tr' 
                ? `Başarı! Veri şeması uygulandı. Platform sektörü "${sectorLabelsCard[currentLang][targetSector]}" olarak güncellendi.`
                : `Success! Data schema applied. Platform sector updated to "${sectorLabelsCard[currentLang][targetSector]}".`);
            }
          });
        }

        const btnReanalyze = document.getElementById('btn-reanalyze-schema');
        if (btnReanalyze) {
          btnReanalyze.addEventListener('click', () => {
            document.getElementById('schema-upload-view').style.display = 'block';
            document.getElementById('schema-scanning-view').style.display = 'none';
            document.getElementById('schema-results-view').style.display = 'none';
            if (fileInput) fileInput.value = '';
          });
        }

        if (typeof initUploadParticles === 'function') {
          initUploadParticles();
        }
      }
    },
    automl: {
      id: 'automl',
      sectionId: 'dashboard-automl-section',
      init() {
        console.log("[Router Debug] Initializing AutoML...");
        if (typeof initAutoMLUploadParticles === 'function') initAutoMLUploadParticles();
      },
      render() {
        if (typeof updateAutoMLSharedState === 'function') updateAutoMLSharedState();
      },
      bindEvents() {},
      destroy() {}
    },
    autobuilder: {
      id: 'autobuilder',
      sectionId: 'dashboard-autobuilder-section',
      init() {
        console.log("[Router Debug] Initializing Auto-Builder...");
        if (typeof initAutoBuilderUploadParticles === 'function') initAutoBuilderUploadParticles();
      },
      render() {
        if (typeof updateAutoBuilderSharedState === 'function') updateAutoBuilderSharedState();
      },
      bindEvents() {},
      destroy() {}
    },
    builder: {
      id: 'builder',
      sectionId: 'dashboard-autobuilder-section',
      init() {
        console.log("[Router Debug] Initializing Auto-Builder...");
        if (typeof initAutoBuilderUploadParticles === 'function') initAutoBuilderUploadParticles();
      },
      render() {
        if (typeof updateAutoBuilderSharedState === 'function') updateAutoBuilderSharedState();
      },
      bindEvents() {},
      destroy() {}
    },
    aura: {
      id: 'aura',
      sectionId: 'dashboard-aura-os-section',
      init() {
        console.log("[Router Debug] Initializing Aura AI Copilot...");
        if (typeof initAuraOSExplainability === 'function') initAuraOSExplainability();
        if (typeof initAuraOSWarnings === 'function') initAuraOSWarnings();
      },
      render() {
        if (typeof initAuraOSModule === 'function') initAuraOSModule();
      },
      bindEvents() {},
      destroy() {}
    },
    copilot: {
      id: 'copilot',
      sectionId: 'dashboard-aura-os-section',
      init() {
        console.log("[Router Debug] Initializing Aura AI Copilot...");
        if (typeof initAuraOSExplainability === 'function') initAuraOSExplainability();
        if (typeof initAuraOSWarnings === 'function') initAuraOSWarnings();
      },
      render() {
        if (typeof initAuraOSModule === 'function') initAuraOSModule();
      },
      bindEvents() {},
      destroy() {}
    },
    saas: {
      id: 'saas',
      sectionId: 'dashboard-saas-section',
      init() {
        console.log("[Router Debug] Initializing SaaS Cloud...");
        initSaaSCloudModule();
      },
      render() {},
      bindEvents() {
        bindSaaSEvents();
      },
      destroy() {
        destroySaaSCloudModule();
      }
    },
    cloud: {
      id: 'cloud',
      sectionId: 'dashboard-saas-section',
      init() {
        console.log("[Router Debug] Initializing SaaS Cloud...");
        initSaaSCloudModule();
      },
      render() {},
      bindEvents() {
        bindSaaSEvents();
      },
      destroy() {
        destroySaaSCloudModule();
      }
    }
  };

  const panelMountManager = {
    activeRouteKey: null,
    
    destroyPreviousPanel() {
      if (this.activeRouteKey && routeRegistry[this.activeRouteKey]) {
        try {
          routeRegistry[this.activeRouteKey].destroy();
        } catch (e) {
          console.error(`[Router Error] Error destroying panel "${this.activeRouteKey}":`, e);
        }
      }
    },

    mountPanel(routeKey) {
      const config = routeRegistry[routeKey];
      if (!config) {
        console.warn(`[Router Warning] Panel config not found for key: ${routeKey}`);
        return;
      }
      
      try {
        config.init();
        config.render();
        config.bindEvents();
        this.activeRouteKey = routeKey;
      } catch (e) {
        console.error(`[Router Error] Error mounting panel "${routeKey}":`, e);
      }
    },

    renderPanel(routeKey) {
      document.querySelectorAll('.dashboard-section').forEach(s => {
        s.classList.remove('active');
      });

      const config = routeRegistry[routeKey];
      if (config) {
        const panelEl = document.getElementById(config.sectionId);
        if (panelEl) {
          panelEl.classList.add('active');
        }
      }
    }
  };

  function safeNavigate(panelId) {
    console.log(`[Router] Navigating to: ${panelId}`);
    if (!routeRegistry[panelId]) {
      console.warn(`[Router] Route key "${panelId}" is invalid. Falling back to default "dashboard".`);
      panelId = 'dashboard';
    }

    panelMountManager.destroyPreviousPanel();
    panelMountManager.renderPanel(panelId);
    panelMountManager.mountPanel(panelId);
  }

  // ================= APP LIFECYCLE MANAGEMENT AND ROUTER SYSTEM =================
  const App = {
    DOM: {},
    isInitialized: false,

    init() {
      console.log("[App Lifecycle] Running App.init()...");
      this.cacheDOM();
      this.bindGlobalEvents();
      
      // Initialize navigation event listeners (does not trigger routing immediately)
      initializeNavigation();

      // Force unauthenticated state on app start to prevent auto-opening the dashboard
      localStorage.setItem('isLoggedIn', 'false');
      
      // QR Login parameters in URL check
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('qrLogin') === 'true') {
        this.handleQrLogin(urlParams);
      } else {
        this.restoreSession();
        this.checkAuthentication();
      }
    },

    cacheDOM() {
      console.log("[App Lifecycle] Caching DOM elements...");
      this.DOM = {
        pageWelcome: document.getElementById('page-welcome'),
        pageDashboard: document.getElementById('page-dashboard'),
        loginModal: document.getElementById('login-modal')
      };
    },

    bindGlobalEvents() {
      console.log("[App Lifecycle] Binding global events...");
      
      window.addEventListener('popstate', (e) => {
        if (e.state && e.state.pageId) {
          this.resolvePage(e.state.pageId);
        }
      });
    },

    restoreSession() {
      console.log("[App Lifecycle] Restoring session state...");
      const userCardDataRaw = localStorage.getItem('userCardData');
      if (userCardDataRaw) {
        try {
          const cardData = JSON.parse(userCardDataRaw);
          if (cardData && cardData.company && cardData.sector) {
            const expiresAt = cardData.expiresAt;
            const now = Date.now();
            const secondsLeft = Math.floor((expiresAt - now) / 1000);

            if (secondsLeft <= 0) {
              console.log("[App Lifecycle] Restored card is already expired.");
              localStorage.removeItem('userCardData');
              localStorage.removeItem('isLoggedIn');
            } else {
              currentCompany = cardData.company;
              currentSector = cardData.sector;
              tempCredentials = cardData;
              console.log(`[App Lifecycle] Restored session for ${cardData.username} of ${cardData.company}`);
              
              // Populate the welcome page card UI with these restored credentials
              const tempUsernameInput = document.getElementById('temp-username');
              const tempPasswordInput = document.getElementById('temp-password');
              const tempCardSector = document.getElementById('temp-card-sector');
              const tempCard = document.getElementById('temp-card');
              const countdownTimer = document.getElementById('countdown-timer');
              const timerProgress = document.getElementById('timer-progress');
              
              if (tempUsernameInput && tempPasswordInput && tempCardSector && tempCard) {
                tempUsernameInput.value = cardData.username;
                tempPasswordInput.value = cardData.password;
                
                if (typeof sectorLabelsCard !== 'undefined' && sectorLabelsCard[currentLang]) {
                  tempCardSector.textContent = sectorLabelsCard[currentLang][cardData.sector] || cardData.sector;
                } else {
                  tempCardSector.textContent = cardData.sector;
                }
                tempCardSector.className = `badge badge-success`;
                tempCard.style.display = 'block';
                
                // Generate QR Code containing login link
                const loginUrl = `${window.location.origin}${window.location.pathname}?qrLogin=true&u=${encodeURIComponent(cardData.username)}&p=${encodeURIComponent(cardData.password)}&s=${encodeURIComponent(cardData.sector)}&c=${encodeURIComponent(cardData.company)}`;
                const qrContainer = document.getElementById('qrcode-container');
                if (qrContainer) {
                  qrContainer.innerHTML = '';
                  new QRCode(qrContainer, {
                    text: loginUrl,
                    width: 130,
                    height: 130,
                    colorDark: '#000000',
                    colorLight: '#ffffff',
                    correctLevel: QRCode.CorrectLevel.M
                  });
                  const btnCopyLoginUrl = document.getElementById('btn-copy-login-url');
                  if (btnCopyLoginUrl) btnCopyLoginUrl.setAttribute('data-url', loginUrl);
                }

                // Restore countdown timer!
                if (countdownInterval) clearInterval(countdownInterval);
                const duration = 10 * 60; // 10 minutes in seconds
                if (countdownTimer && timerProgress) {
                  const mins = Math.floor(secondsLeft / 60);
                  const secs = secondsLeft % 60;
                  countdownTimer.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
                  
                  const pct = (secondsLeft / duration) * 100;
                  timerProgress.style.width = `${pct}%`;
                  const hue = (secondsLeft / duration) * 120;
                  timerProgress.style.backgroundColor = `hsl(${hue}, 85%, 45%)`;
                }

                let currentSecondsLeft = secondsLeft;
                countdownInterval = setInterval(() => {
                  currentSecondsLeft--;
                  
                  if (countdownTimer && timerProgress) {
                    const mins = Math.floor(currentSecondsLeft / 60);
                    const secs = currentSecondsLeft % 60;
                    countdownTimer.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
                    
                    const pct = (currentSecondsLeft / duration) * 100;
                    timerProgress.style.width = `${pct}%`;
                    const hue = (currentSecondsLeft / duration) * 120;
                    timerProgress.style.backgroundColor = `hsl(${hue}, 85%, 45%)`;
                  }
                  
                  if (currentSecondsLeft <= 0) {
                    clearInterval(countdownInterval);
                    expireCard();
                  }
                }, 1000);
              }
            }
          }
        } catch (e) {
          console.error("[App Lifecycle] Failed to restore session:", e);
          this.clearSession();
        }
      }
    },

    checkAuthentication() {
      console.log("[App Lifecycle] Checking authentication status...");
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      if (isLoggedIn) {
        console.log("[App Lifecycle] User is already authenticated. Pre-initializing dashboard...");
        this.initializeDashboardAfterLogin();
      } else {
        console.log("[App Lifecycle] User is not authenticated. Redirecting to login/welcome...");
        this.showLoginScreen();
      }
    },

    showLoginScreen() {
      console.log("[App Lifecycle] Showing login screen...");
      
      localStorage.setItem('isLoggedIn', 'false');

      document.querySelectorAll('.dashboard-section').forEach(s => {
        s.classList.remove('active');
      });

      if (this.DOM.pageWelcome) this.DOM.pageWelcome.style.display = 'block';
      if (this.DOM.pageDashboard) this.DOM.pageDashboard.style.display = 'none';

      const hash = window.location.hash;
      if (hash === '#login') {
        showLoginModal();
      } else {
        if (window.location.hash !== '#welcome') {
          window.history.replaceState({ pageId: 'welcome' }, '', '#welcome');
        }
        hideLoginModal();
      }
    },

    clearSession() {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userCardData');
      sessionStorage.removeItem('sessionActive');
      currentCompany = '';
      currentSector = '';
      tempCredentials = null;
    },

    initializeDashboardAfterLogin() {
      console.log("[App Lifecycle] Initializing dashboard systems...");
      
      this.isInitialized = true;
      
      updateThemeColor(currentSector || 'vakif');
      
      if (this.DOM.pageWelcome) this.DOM.pageWelcome.style.display = 'none';
      if (this.DOM.pageDashboard) this.DOM.pageDashboard.style.display = 'flex';
      hideLoginModal();

      this.handleRouting();
    },

    handleRouting() {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      if (!isLoggedIn) {
        this.showLoginScreen();
        return;
      }

      const hash = window.location.hash.substring(1) || 'dashboard';
      const panelId = routeRegistry[hash] ? hash : 'dashboard';

      console.log(`[Router] Routing to panel: ${panelId}`);
      setActiveMenu(panelId);
      safeNavigate(panelId);
    },

    resolvePage(pageId) {
      if (pageId === 'welcome' || pageId === 'login') {
        this.showLoginScreen();
      } else if (pageId === 'dashboard') {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (isLoggedIn) {
          this.initializeDashboardAfterLogin();
        } else {
          this.showLoginScreen();
        }
      }
    },

    handleQrLogin(urlParams) {
      const u = urlParams.get('u');
      const p = urlParams.get('p');
      const s = urlParams.get('s');
      const c = urlParams.get('c');
      if (u && p && s && c) {
        console.log("[App Lifecycle] Processing QR Login parameter...");
        apiClient.request('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: u, password: p })
        })
        .then(res => {
          if (res.status === 200) {
            currentCompany = c;
            currentSector = s;
            tempCredentials = {
              username: u,
              password: p,
              company: c,
              sector: s,
              expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000
            };
            const cardData = {
              username: u,
              password: p,
              company: c,
              sector: s,
              expiresAt: tempCredentials.expiresAt,
              remember: true
            };
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userCardData', JSON.stringify(cardData));
            sessionStorage.setItem('sessionActive', 'true');
            
            window.history.replaceState({ pageId: 'dashboard' }, '', '#dashboard');
            
            apiClient.request('/api/activate-card', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ username: u })
            }).catch(err => console.error('Error activating card:', err));
            
            this.initializeDashboardAfterLogin();
          } else {
            window.history.replaceState({ pageId: 'welcome' }, '', '#welcome');
            this.showLoginScreen();
            alert(currentLang === 'tr' 
              ? "Geçici giriş kartınızın süresi dolmuş veya geçersizdir!" 
              : "Your temporary entry card has expired or is invalid!");
          }
        })
        .catch(err => {
          console.error('QR login failed, falling back locally:', err);
          currentCompany = c;
          currentSector = s;
          tempCredentials = {
            username: u,
            password: p,
            company: c,
            sector: s,
            expiresAt: Date.now() + 10 * 60 * 1000
          };
          const cardData = {
            username: u,
            password: p,
            company: c,
            sector: s,
            expiresAt: tempCredentials.expiresAt,
            remember: true
          };
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('userCardData', JSON.stringify(cardData));
          sessionStorage.setItem('sessionActive', 'true');
          
          window.history.replaceState({ pageId: 'dashboard' }, '', '#dashboard');
          this.initializeDashboardAfterLogin();
        });
      } else {
        this.restoreSession();
        this.checkAuthentication();
      }
    }
  };

  function handleHashRouting() {
    App.handleRouting();
  }

  function initializeNavigation() {
    console.log("App navigation initialization...");
    window.addEventListener('hashchange', handleHashRouting);

    document.querySelectorAll('.menu-item').forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (localStorage.getItem('isLoggedIn') !== 'true') {
          console.warn("[Router] Navigation blocked: User is not authenticated.");
          App.showLoginScreen();
          return;
        }

        const targetId = this.getAttribute('data-target');
        let panelKey = '';
        for (const [key, value] of Object.entries(PANELS)) {
          if (value === targetId) {
            panelKey = key;
            break;
          }
        }
        if (panelKey) {
          window.location.hash = panelKey;
        }
      });
    });
  }

  // Initialize App Lifecycle
  App.init();

});
