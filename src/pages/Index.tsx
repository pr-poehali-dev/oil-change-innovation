import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-gdrive-orange to-gdrive-blue rounded-lg flex items-center justify-center">
              <Icon name="Droplet" size={20} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-gdrive-dark">G-DRIVE</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gdrive-orange transition-colors">О нас</a>
            <a href="#services" className="text-gray-600 hover:text-gdrive-orange transition-colors">Услуги</a>
            <a href="#booking" className="text-gray-600 hover:text-gdrive-orange transition-colors">Онлайн-запись</a>
            <a href="#offers" className="text-gray-600 hover:text-gdrive-orange transition-colors">Акции</a>
            <a href="#contacts" className="text-gray-600 hover:text-gdrive-orange transition-colors">Контакты</a>
          </nav>
          <Button className="bg-gdrive-orange hover:bg-gdrive-orange/90 text-white">
            Записаться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gdrive-blue/5 to-gdrive-orange/5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="bg-gdrive-orange/10 text-gdrive-orange border-gdrive-orange/20 mb-6">
            🚀 Инновационный автосервис
          </Badge>
          <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-gdrive-blue to-gdrive-orange bg-clip-text text-transparent leading-tight">
            G-DRIVE
          </h1>
          <p className="text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Где забота о вашем автомобиле встречает комфорт и технологии
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center space-x-2 text-gdrive-orange">
              <Icon name="Clock" size={24} />
              <span className="text-xl font-semibold">30 минут</span>
            </div>
            <div className="flex items-center space-x-2 text-gdrive-blue">
              <Icon name="Shield" size={24} />
              <span className="text-xl font-semibold">Гарантия качества</span>
            </div>
            <div className="flex items-center space-x-2 text-gdrive-orange">
              <Icon name="Zap" size={24} />
              <span className="text-xl font-semibold">AI-диагностика</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gdrive-orange hover:bg-gdrive-orange/90 text-white px-8 py-6 text-lg">
              <Icon name="Calendar" className="mr-2" size={20} />
              Онлайн-запись
            </Button>
            <Button size="lg" variant="outline" className="border-gdrive-blue text-gdrive-blue hover:bg-gdrive-blue/10 px-8 py-6 text-lg">
              <Icon name="Video" className="mr-2" size={20} />
              Смотреть процесс
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-gdrive-orange" />
        </div>
      </section>

      {/* О нас */}
      <section id="about" className="py-20 bg-gdrive-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gdrive-dark">О G-Drive</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Инновационный пункт замены масла, объединяющий скорость с комфортом и технологичностью
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/img/75e1e085-9442-4484-850d-7f3babd115f1.jpg" 
                alt="Современный автосервис G-Drive" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gdrive-orange rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Timer" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">30-минутное обслуживание</h3>
                  <p className="text-gray-600">Экспресс-замена масла с гарантией скорости</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gdrive-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Eye" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Полная прозрачность</h3>
                  <p className="text-gray-600">Наблюдение за процессом через камеры в реальном времени</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gdrive-orange rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Coffee" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Зона комфорта</h3>
                  <p className="text-gray-600">Бесплатные напитки, Wi-Fi и минималистичный интерьер</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gdrive-dark">Наши услуги</h2>
            <p className="text-xl text-gray-600">Полный спектр услуг для вашего автомобиля</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gdrive-orange to-gdrive-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Droplet" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl">Экспресс-замена масла</CardTitle>
                <CardDescription>За 30 минут с возможностью наблюдения</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-gdrive-orange mr-2" />Замена масла и фильтров</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-gdrive-orange mr-2" />Проверка уровней жидкостей</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-gdrive-orange mr-2" />Видеонаблюдение процесса</li>
                </ul>
                <Button className="w-full mt-6 bg-gdrive-orange hover:bg-gdrive-orange/90">
                  Записаться
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gdrive-blue to-gdrive-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Brain" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl">AI-диагностика</CardTitle>
                <CardDescription>Анализ состояния масла с отчетом</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-gdrive-blue mr-2" />Компьютерный анализ</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-gdrive-blue mr-2" />Подробный отчет</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-gdrive-blue mr-2" />Рекомендации по замене</li>
                </ul>
                <Button className="w-full mt-6 bg-gdrive-blue hover:bg-gdrive-blue/90">
                  Узнать больше
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gdrive-orange to-gdrive-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="MessageCircle" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl">Консультации</CardTitle>
                <CardDescription>Экспертные советы по уходу</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-gdrive-orange mr-2" />Персональные рекомендации</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-gdrive-orange mr-2" />График обслуживания</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-gdrive-orange mr-2" />Советы по эксплуатации</li>
                </ul>
                <Button className="w-full mt-6 bg-gdrive-orange hover:bg-gdrive-orange/90">
                  Получить консультацию
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Технологии */}
      <section className="py-20 bg-gradient-to-r from-gdrive-blue/5 to-gdrive-orange/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gdrive-dark">Технологии будущего</h2>
            <p className="text-xl text-gray-600">Мы используем самые современные решения</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gdrive-orange rounded-xl flex items-center justify-center">
                  <Icon name="Cpu" size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">AI-анализ состояния масла</h3>
                  <p className="text-gray-600">Искусственный интеллект предсказывает необходимость следующей замены</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gdrive-blue rounded-xl flex items-center justify-center">
                  <Icon name="Monitor" size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Интерактивные панели</h3>
                  <p className="text-gray-600">Обучающий контент о техническом обслуживании автомобилей</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gdrive-orange rounded-xl flex items-center justify-center">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Виртуальная очередь</h3>
                  <p className="text-gray-600">Онлайн-запись и отслеживание статуса обслуживания</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/img/259e5832-7107-4718-8215-3a978a5a9efd.jpg" 
                alt="AI диагностика в G-Drive" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Онлайн-запись */}
      <section id="booking" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gdrive-dark">Онлайн-запись</h2>
              <p className="text-xl text-gray-600">Забронируйте удобное время за несколько кликов</p>
            </div>
            <Card className="shadow-2xl border-0">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">Выберите услугу</h3>
                    <div className="space-y-4">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input type="radio" name="service" className="text-gdrive-orange" />
                        <span>Экспресс-замена масла (30 мин)</span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input type="radio" name="service" className="text-gdrive-orange" />
                        <span>AI-диагностика + замена масла (45 мин)</span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input type="radio" name="service" className="text-gdrive-orange" />
                        <span>Полное техобслуживание (60 мин)</span>
                      </label>
                    </div>
                    <div className="mt-8">
                      <h4 className="text-lg font-semibold mb-4">Доступное время сегодня</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {["10:00", "11:30", "13:00", "14:30", "16:00", "17:30"].map((time) => (
                          <Button key={time} variant="outline" size="sm" className="border-gdrive-orange text-gdrive-orange hover:bg-gdrive-orange hover:text-white">
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">Ваши данные</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Имя</label>
                        <input type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:border-gdrive-orange outline-none" placeholder="Ваше имя" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Телефон</label>
                        <input type="tel" className="w-full p-3 border border-gray-200 rounded-lg focus:border-gdrive-orange outline-none" placeholder="+7 (___) ___-__-__" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Марка автомобиля</label>
                        <input type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:border-gdrive-orange outline-none" placeholder="Toyota Camry" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Пробег (км)</label>
                        <input type="number" className="w-full p-3 border border-gray-200 rounded-lg focus:border-gdrive-orange outline-none" placeholder="150000" />
                      </div>
                    </div>
                    <Button className="w-full mt-6 bg-gdrive-orange hover:bg-gdrive-orange/90 text-white py-6 text-lg">
                      <Icon name="Calendar" className="mr-2" size={20} />
                      Забронировать время
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Акции */}
      <section id="offers" className="py-20 bg-gdrive-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gdrive-dark">Специальные предложения</h2>
            <p className="text-xl text-gray-600">Выгодные акции для наших клиентов</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="relative overflow-hidden border-0 shadow-2xl">
              <div className="absolute top-4 right-4">
                <Badge className="bg-gdrive-red text-white">🔥 Хит</Badge>
              </div>
              <CardHeader className="bg-gradient-to-r from-gdrive-orange to-gdrive-red text-white">
                <CardTitle className="text-3xl font-bold">20% скидка</CardTitle>
                <CardDescription className="text-white/90 text-lg">
                  Если не уложимся в 30 минут
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={24} className="text-gdrive-orange" />
                    <span>Гарантия скорости обслуживания</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Shield" size={24} className="text-gdrive-orange" />
                    <span>Автоматическое применение скидки</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Award" size={24} className="text-gdrive-orange" />
                    <span>Без скрытых условий</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-gdrive-orange hover:bg-gdrive-orange/90">
                  Воспользоваться акцией
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-gdrive-blue to-gdrive-orange text-white">
                <CardTitle className="text-2xl font-bold">Программа лояльности</CardTitle>
                <CardDescription className="text-white/90">
                  Скидки за рекомендации друзьям
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Users" size={24} className="text-gdrive-blue" />
                    <span>Приведи друга — получи 15% скидку</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Gift" size={24} className="text-gdrive-blue" />
                    <span>Бонусы за каждое посещение</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Star" size={24} className="text-gdrive-blue" />
                    <span>VIP-статус при 5+ визитах</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-gdrive-blue hover:bg-gdrive-blue/90">
                  Узнать подробности
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gdrive-dark">Контакты</h2>
            <p className="text-xl text-gray-600">Мы всегда рады видеть вас в G-Drive</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gdrive-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Адрес</h3>
                <p className="text-gray-600">
                  г. Москва, ул. Автомобильная, 15
                  <br />
                  ТЦ "АвтоПарк", 1 этаж
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gdrive-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                <p className="text-gray-600">
                  +7 (495) 123-45-67
                  <br />
                  Ежедневно с 8:00 до 22:00
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gdrive-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600">
                  info@g-drive.ru
                  <br />
                  support@g-drive.ru
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-16 text-center">
            <div className="max-w-2xl mx-auto bg-gradient-to-r from-gdrive-orange to-gdrive-blue rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Готовы к революции в автосервисе?</h3>
              <p className="text-lg mb-6">Запишитесь сейчас и почувствуйте разницу!</p>
              <Button size="lg" className="bg-white text-gdrive-orange hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться прямо сейчас
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gdrive-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-gdrive-orange to-gdrive-blue rounded-lg flex items-center justify-center">
                  <Icon name="Droplet" size={20} className="text-white" />
                </div>
                <span className="text-2xl font-bold">G-DRIVE</span>
              </div>
              <p className="text-gray-400 mb-4">
                Инновационный автосервис будущего
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-white hover:text-gdrive-orange">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:text-gdrive-orange">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:text-gdrive-orange">
                  <Icon name="Phone" size={20} />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-gdrive-orange transition-colors">Замена масла</a></li>
                <li><a href="#" className="hover:text-gdrive-orange transition-colors">AI-диагностика</a></li>
                <li><a href="#" className="hover:text-gdrive-orange transition-colors">Консультации</a></li>
                <li><a href="#" className="hover:text-gdrive-orange transition-colors">Техобслуживание</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-gdrive-orange transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-gdrive-orange transition-colors">Акции</a></li>
                <li><a href="#" className="hover:text-gdrive-orange transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-gdrive-orange transition-colors">Партнерам</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@g-drive.ru</li>
                <li>г. Москва, ул. Автомобильная, 15</li>
                <li>Ежедневно с 8:00 до 22:00</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 G-Drive. Все права защищены. Инновационный автосервис будущего.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;