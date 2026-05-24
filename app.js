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
    tr: "<input type=\"checkbox\" style=\"accent-color: var(--primary);\"> Beni Hatırla",
    en: "<input type=\"checkbox\" style=\"accent-color: var(--primary);\"> Remember Me"
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
  let currentCompany = '';
  let currentSector = '';
  let tempCredentials = null;
  let countdownInterval = null;
  let loginFailedAttempts = 0;
  let whatIfBaseline = null;
  let activePerformanceMetrics = null;
  let sectorDataLoaded = false;
  let sectorDataJSON = null;

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
          
          history.replaceState({ pageId: 'dashboard' }, '', '#dashboard');
          switchPage('dashboard', false);
        }
      } catch (e) {
        console.error('Failed to parse session data in transitionToDashboard:', e);
      }
    }
  }

  if (localStorage.getItem('isLoggedIn') === 'true') {
    transitionToDashboard();
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
    fetch('/api/create-card', {
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
      fetch('/api/activate-card', {
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
      const res = await fetch('/api/login', {
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

    document.getElementById('viz-title').textContent = sectorInfo[currentLang][currentSector].title;
    document.getElementById('viz-desc').textContent = sectorInfo[currentLang][currentSector].desc;

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
    whatIfBaseline = null;
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
    // 1. Dynamically compile A4 printable corporate strategic report (Content Strategy & Data Restriction)
    generatePrintablePdfReport();

    // 2. Dynamically compile background validation metadata manifest and QR code before printing
    preparePrintMetadataManifest();
    
    // 3. Trigger printing
    window.print();
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

  function setWhatIfBaseline() {
    const btn = document.getElementById('btn-whatif-set-baseline');
    if (!btn) return;

    let inputs = {};
    if (currentSector === 'vakif') {
      inputs = {
        credit: parseInt(document.getElementById('slider-credit').value),
        income: parseInt(document.getElementById('slider-income').value),
        dti: parseInt(document.getElementById('slider-dti').value)
      };
    } else if (currentSector === 'egitim') {
      inputs = {
        glucose: parseInt(document.getElementById('slider-glucose').value),
        bmi: parseFloat(document.getElementById('slider-bmi').value),
        age: parseInt(document.getElementById('slider-age').value)
      };
    } else if (currentSector === 'gida') {
      inputs = {
        size: parseInt(document.getElementById('slider-size').value),
        beds: parseFloat(document.getElementById('slider-beds').value),
        location: document.getElementById('toggle-location').checked
      };
    } else if (currentSector === 'lojistik') {
      inputs = {
        days: parseInt(document.getElementById('slider-days').value),
        sessions: parseInt(document.getElementById('slider-sessions').value),
        tickets: parseInt(document.getElementById('slider-tickets').value)
      };
    } else if (currentSector === 'tekstil') {
      inputs = {
        days: parseInt(document.getElementById('slider-days').value),
        sessions: parseInt(document.getElementById('slider-sessions').value),
        tickets: parseInt(document.getElementById('slider-tickets').value)
      };
    }

    const output = document.getElementById('dash-output-result').textContent;

    whatIfBaseline = {
      sector: currentSector,
      inputs: inputs,
      output: output
    };

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
    const compBox = document.getElementById('whatif-comparison-box');
    if (!compBox) return;

    if (!whatIfBaseline || whatIfBaseline.sector !== currentSector) {
      compBox.innerHTML = `
        <p style="font-size: 0.8rem; color: var(--text-muted); text-align: center; line-height: 1.5; margin-top: 1.2rem;" data-i18n="whatif_empty_state">
          ${translations.whatif_empty_state[currentLang]}
        </p>
      `;
      return;
    }

    let currentInputs = {};
    let labels = {};
    let formatters = {};

    if (currentSector === 'vakif') {
      currentInputs = {
        credit: parseInt(document.getElementById('slider-credit').value),
        income: parseInt(document.getElementById('slider-income').value),
        dti: parseInt(document.getElementById('slider-dti').value)
      };
      labels = {
        credit: { tr: "Aylık Katılım Sıklığı", en: "Monthly Attendance Frequency" },
        income: { tr: "Geçmiş Bağış Tutarı ($)", en: "Past Donation Amount ($)" },
        dti: { tr: "Üyelik Süresi (Yıl)", en: "Membership Duration (Years)" }
      };
      formatters = {
        credit: val => val,
        income: val => `$${val}`,
        dti: val => val
      };
    } else if (currentSector === 'egitim') {
      currentInputs = {
        glucose: parseInt(document.getElementById('slider-glucose').value),
        bmi: parseFloat(document.getElementById('slider-bmi').value),
        age: parseInt(document.getElementById('slider-age').value)
      };
      labels = {
        glucose: { tr: "Haftalık Çalışma Süresi", en: "Weekly Study Time" },
        bmi: { tr: "Ders Devam Oranı (%)", en: "Course Attendance Rate (%)" },
        age: { tr: "Deneme Sınav Puanı", en: "Mock Exam Score" }
      };
      formatters = {
        glucose: val => `${val} ${currentLang === 'tr' ? 'Saat' : 'Hrs'}`,
        bmi: val => `%${val}`,
        age: val => val
      };
    } else if (currentSector === 'gida') {
      currentInputs = {
        size: parseInt(document.getElementById('slider-size').value),
        beds: parseFloat(document.getElementById('slider-beds').value),
        location: document.getElementById('toggle-location').checked
      };
      labels = {
        size: { tr: "Ortalama Sipariş Adedi", en: "Avg. Order Quantity" },
        beds: { tr: "Restoran Değerlendirme Puanı", en: "Restaurant Rating Score" },
        location: { tr: "Kampanya Uygulaması", en: "Campaign Application" }
      };
      formatters = {
        size: val => val,
        beds: val => val.toFixed(1),
        location: val => currentLang === 'tr' ? (val ? "Evet" : "Hayır") : (val ? "Yes" : "No")
      };
    } else if (currentSector === 'lojistik') {
      currentInputs = {
        days: parseInt(document.getElementById('slider-days').value),
        sessions: parseInt(document.getElementById('slider-sessions').value),
        tickets: parseInt(document.getElementById('slider-tickets').value)
      };
      labels = {
        days: { tr: "Mesafe Uzunluğu", en: "Distance Length" },
        sessions: { tr: "Trafik Yoğunluğu", en: "Traffic Density" },
        tickets: { tr: "Paket Yükü Adedi", en: "Package Load Quantity" }
      };
      formatters = {
        days: val => `${val} km`,
        sessions: val => val,
        tickets: val => val
      };
    } else if (currentSector === 'tekstil') {
      currentInputs = {
        days: parseInt(document.getElementById('slider-days').value),
        sessions: parseInt(document.getElementById('slider-sessions').value),
        tickets: parseInt(document.getElementById('slider-tickets').value)
      };
      labels = {
        days: { tr: "Aylık Alışveriş Sıklığı", en: "Monthly Shopping Frequency" },
        sessions: { tr: "Ortalama Sepet Tutarı", en: "Average Basket Amount" },
        tickets: { tr: "İndirim Hassasiyeti", en: "Discount Sensitivity" }
      };
      formatters = {
        days: val => `${val} ${currentLang === 'tr' ? 'Kez' : 'Times'}`,
        sessions: val => `${val} ${currentLang === 'tr' ? 'TL' : 'TRY'}`,
        tickets: val => `%${val}`
      };
    }

    const currentOutput = document.getElementById('dash-output-result').textContent;

    let compareRowsHtml = '';
    for (let key in currentInputs) {
      const baseVal = whatIfBaseline.inputs[key];
      const activeVal = currentInputs[key];
      const label = labels[key][currentLang];
      
      let diffHtml = '';
      if (typeof activeVal === 'number') {
        const diff = activeVal - baseVal;
        const diffSign = diff > 0 ? '+' : '';
        const diffText = Number.isInteger(diff) ? diff : diff.toFixed(1);
        const diffColor = diff > 0 ? 'var(--success)' : (diff < 0 ? 'var(--error)' : 'var(--text-muted)');
        diffHtml = `<span style="color: ${diffColor}; font-weight: bold;">${diffSign}${diffText}</span>`;
      } else {
        diffHtml = `<span style="color: var(--text-muted); font-size: 0.75rem;">-</span>`;
      }

      const formattedBase = formatters[key] ? formatters[key](baseVal) : baseVal;
      const formattedActive = formatters[key] ? formatters[key](activeVal) : activeVal;

      compareRowsHtml += `
        <div style="display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 0.5rem; align-items: center; font-size: 0.8rem; border-bottom: 1px solid rgba(255,255,255,0.03); padding-bottom: 0.3rem;">
          <div style="color: var(--text-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${label}">${label}</div>
          <div style="text-align: center; color: rgba(255,255,255,0.6); font-family: monospace; font-size: 0.75rem;">${formattedBase}</div>
          <div style="text-align: center; color: var(--text-primary); font-family: monospace; font-size: 0.75rem; font-weight: 500;">${formattedActive}</div>
          <div style="text-align: center; font-family: monospace; font-size: 0.75rem;">${diffHtml}</div>
        </div>
      `;
    }

    compBox.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 0.8rem; width: 100%;">
        <div style="display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 0.5rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.4rem; font-size: 0.75rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
          <div>${currentLang === 'tr' ? 'Değişken' : 'Feature'}</div>
          <div style="text-align: center;">Sen. A</div>
          <div style="text-align: center;">Sen. B</div>
          <div style="text-align: center;">${currentLang === 'tr' ? 'Değişim' : 'Change'}</div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.5rem; max-height: 120px; overflow-y: auto;">
          ${compareRowsHtml}
        </div>
        <div style="margin-top: 0.6rem; padding-top: 0.6rem; border-top: 1px dashed rgba(255,255,255,0.15); display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem;">
          <span style="font-weight: 600; color: var(--text-secondary);">${currentLang === 'tr' ? 'Model Kararı (A ➔ B):' : 'Model Decision (A ➔ B):'}</span>
          <div style="font-weight: bold; display: flex; gap: 0.5rem; align-items: center;">
            <span style="color: rgba(255,255,255,0.6); text-decoration: line-through;">${whatIfBaseline.output}</span>
            <span style="color: var(--accent); font-size: 0.9rem;">➔</span>
            <span style="color: var(--accent-light); text-shadow: 0 0 8px var(--accent);">${currentOutput}</span>
          </div>
        </div>
      </div>
    `;
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
      fetchPromise = fetch('sector_data.json')
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

  // Set up initial history state
  if (!history.state) {
    history.replaceState({ pageId: 'welcome' }, '', '#welcome');
  }

  // Handle browser navigation (Back/Forward)
  window.addEventListener('popstate', (e) => {
    if (e.state && e.state.pageId) {
      switchPage(e.state.pageId, false);
    } else {
      switchPage('welcome', false);
    }
  });

  // Check for existing session in localStorage
  function checkSession() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userCardDataRaw = localStorage.getItem('userCardData');
    if (isLoggedIn === 'true' && userCardDataRaw) {
      try {
        const cardData = JSON.parse(userCardDataRaw);
        if (cardData && cardData.company && cardData.sector) {
          const isRemembered = cardData.remember === true;
          const isSessionActive = sessionStorage.getItem('sessionActive') === 'true';

          // If NOT remembered and this is a brand-new browser session, log out / clear storage
          if (!isRemembered && !isSessionActive) {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userCardData');
            return;
          }

          currentCompany = cardData.company;
          currentSector = cardData.sector;
          
          // Recreate tempCredentials
          tempCredentials = {
            username: cardData.username || '',
            password: cardData.password || '',
            company: cardData.company,
            sector: cardData.sector,
            expiresAt: cardData.expiresAt || (Date.now() + 7 * 24 * 60 * 60 * 1000)
          };

          // Mark session active in sessionStorage since we validated it
          sessionStorage.setItem('sessionActive', 'true');
          
          // Set initial history state to dashboard on auto-login redirect
          history.replaceState({ pageId: 'dashboard' }, '', '#dashboard');
          
          // Transition to Dashboard directly!
          switchPage('dashboard', false);
        }
      } catch (e) {
        console.error('Failed to parse session data:', e);
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userCardData');
      }
    }
  }

  checkSession();

  // Auto-login via QR Code scan query parameters
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('qrLogin') === 'true') {
    const u = urlParams.get('u');
    const p = urlParams.get('p');
    const s = urlParams.get('s');
    const c = urlParams.get('c');
    if (u && p && s && c) {
      // Validate credentials against the server first (ensures expiry checks are respected)
      fetch('/api/login', {
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
            expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000 // 1 week
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
          
          // Clear URL params silently and update history to dashboard
          window.history.replaceState({ pageId: 'dashboard' }, '', '#dashboard');
          
          // Activate card on the server to make it permanent
          fetch('/api/activate-card', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: u })
          }).catch(err => console.error('Error activating card on server:', err));
          
          // Transition to Dashboard directly!
          switchPage('dashboard', false);
        } else {
          // Card expired or invalid, clear URL params and show welcome
          window.history.replaceState({ pageId: 'welcome' }, '', '#welcome');
          switchPage('welcome', false);
          alert(currentLang === 'tr' 
            ? "Geçici giriş kartınızın süresi dolmuş veya geçersizdir!" 
            : "Your temporary entry card has expired or is invalid!");
        }
      })
      .catch(err => {
        console.error('QR login validation failed, falling back locally:', err);
        // Fallback to local login if offline/error
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
        switchPage('dashboard', false);
      });
    }
  }

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
      const response = await fetch('http://localhost:3000/send-email', {
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

  const btnCloseEmailModal = document.getElementById('btn-close-email-modal');
  const btnCancelEmail = document.getElementById('btn-cancel-email');
  if (btnCloseEmailModal) btnCloseEmailModal.addEventListener('click', closeEmailModal);
  if (btnCancelEmail) btnCancelEmail.addEventListener('click', closeEmailModal);

});
