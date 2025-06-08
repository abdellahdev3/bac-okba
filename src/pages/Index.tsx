import { Navigation } from "@/components/Navigation";
import { SearchBar } from "@/components/SearchBar";
import { FilterTabs } from "@/components/FilterTabs";
import { SubjectCard } from "@/components/SubjectCard";
import { BookCard } from "@/components/BookCard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Download,
  TrendingUp,
  BookOpen,
  Video,
  FileText,
  Users,
} from "lucide-react";

const Index = () => {
  const subjects = [
    {
      title: "مادة الرياضيات",
      lastUpdate: "15 ديسمبر 2024",
      items: [
        "دروس مفصلة مع الأمثلة التطبيقية",
        "ملخصات شاملة للوحدات الأساسية",
        "تمارين محلولة ومتدرجة الصعوبة",
        "مواضيع البكالوريا مع التصحيح",
        "فيديوهات تعليمية تفاعلية",
      ],
    },
    {
      title: "العلوم الطبيعية",
      lastUpdate: "12 ديسمبر 2024",
      items: [
        "شرح مبسط لجميع الوحدات",
        "رسوم توضيحية وخرائط ذهنية",
        "تجارب عملية مصورة",
        "نماذج اختبارات فصلية",
        "مراجعة شاملة للامتحان",
      ],
    },
    {
      title: "الفيزياء",
      lastUpdate: "10 ديسمبر 2024",
      items: [
        "قوانين فيزيائية مع التطبيقات",
        "حل المسائل خطوة بخطوة",
        "تجارب معملية موثقة",
        "أسئلة الامتحانات السابقة",
        "نصائح لحل المسائل الصعبة",
      ],
    },
    {
      title: "اللغة العربية وآدابها",
      lastUpdate: "08 ديسمبر 2024",
      items: [
        "تحليل النصوص الأدبية الكاملة",
        "قواعد النحو والصرف المبسطة",
        "نماذج إنشاء أدبي وعلمي",
        "الأساليب البلاغية بالأمثلة",
        "مراجعة عامة للمنهج",
      ],
    },
    {
      title: "الفلسفة",
      lastUpdate: "05 ديسمبر 2024",
      items: [
        "المقالات الفلسفية النموذجية",
        "شرح المذاهب الفلسفية الرئيسية",
        "تحليل النصوص الفلسفية",
        "منهجية كتابة المقال الفلسفي",
        "نماذج محلولة من الامتحانات",
      ],
    },
    {
      title: "التاريخ والجغرافيا",
      lastUpdate: "03 ديسمبر 2024",
      items: [
        "خرائط تاريخية وجغرافية مفصلة",
        "ملخصات الأحداث التاريخية الهامة",
        "تحليل الوثائق التاريخية",
        "الظواهر الجغرافية المعاصرة",
        "مراجعة شاملة للفترات التاريخية",
      ],
    },
  ];

  const books = [
    {
      title: "كتاب الرياضيات للشعب العلمية",
      type: "الكتاب المدرسي",
      stream: "التعليم الثانوي",
    },
    {
      title: "دليل الأستاذ في العلوم الطبيعية",
      type: "كتاب المراجعة",
      stream: "التعليم الثانوي",
    },
    {
      title: "مرجع شامل في الفيزياء",
      type: "كتاب مساعد",
      stream: "التعليم الثانوي",
    },
    {
      title: "نصوص أدبية مختارة",
      type: "الكتاب المدرسي",
      stream: "التعليم الثانوي",
    },
    {
      title: "مناهج البحث في الفلسفة",
      type: "كتاب المراجعة",
      stream: "التعليم الثانوي",
    },
  ];

  const importantResources = [
    {
      title: "ملخصات شاملة",
      description: "جميع المواد ملخصة ومنظمة",
      icon: FileText,
      count: "150+ ملف",
    },
    {
      title: "امتحانات محلولة",
      description: "نماذج من امتحانات السنوات الماضية",
      icon: BookOpen,
      count: "200+ نموذج",
    },
    {
      title: "فيديوهات تعليمية",
      description: "شروحات مصورة لجميع الدروس",
      icon: Video,
      count: "500+ فيديو",
    },
    {
      title: "مجموعات دراسية",
      description: "انضم للطلاب في منطقتك",
      icon: Users,
      count: "50+ مجموعة",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Search Section */}
      <div className="bg-white border-b border-gray-200">
        <SearchBar />
      </div>

      <FilterTabs />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Subjects Grid */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              المواد الدراسية
            </h2>
            <Button variant="outline" className="rounded-full">
              عرض جميع المواد
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <SubjectCard
                key={index}
                title={subject.title}
                lastUpdate={subject.lastUpdate}
                items={subject.items}
              />
            ))}
          </div>
        </section>

        {/* Books Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800">كتب البكالوريا</h2>
            <Button variant="outline" className="rounded-full">
              مكتبة الكتب كاملة
            </Button>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4">
            {books.map((book, index) => (
              <BookCard
                key={index}
                title={book.title}
                type={book.type}
                stream={book.stream}
              />
            ))}
          </div>
        </section>

        {/* Important Resources Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              الحقائب الدراسية الهامة
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              موارد تعليمية متنوعة ومنظمة لمساعدتك في تحضير امتحان البكالوريا
              بفعالية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {importantResources.map((resource, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white rounded-2xl p-6"
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <resource.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {resource.description}
                  </p>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {resource.count}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Popular Topics Banner */}
        <section className="mb-12">
          <Card className="bg-gradient-to-l from-primary to-primary/80 text-white border-0 rounded-2xl overflow-hidden">
            <CardContent className="p-8 text-center">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h2 className="text-2xl font-bold mb-4">
                المواضيع الأكثر تحميلاً
              </h2>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                اكتشف المواضيع التي يحتاجها زملاؤك أكثر من غيرها واستفد من
                خبراتهم في التحضير
              </p>
              <Button
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100 rounded-full px-8"
              >
                استكشف المواضيع الشائعة
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Floating CTA */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg rounded-full px-6 py-3 text-sm font-medium">
          <Download className="h-4 w-4 ml-2" />
          📥 تحميل الحقيبة الكاملة
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">حقيبة عقبة بن نافع</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                الحقيبة التعليمية الأساسية للبكالوريا تحتوي على دروس، ملخصات،
                اختبارات، فيديوهات، كتب بصيغة PDF، مرتبة حسب الشعب والمواد.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">روابط سريعة</h4>
              <div className="space-y-2 text-sm">
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  المنصة العلمية
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  حقيبة عقبة بن نافع
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  موقع الباك في الجيب
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">تابعنا</h4>
              <div className="text-sm text-gray-300">
                <p>
                  انضم إلى مجتمعنا على وسائل التواصل الاجتماعي للحصول على آخر
                  التحديثات
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              جميع الحقوق محفوظة © حقيبة عقبة بن نافع التعليمية -{" "}
              {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
