import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const animals = [
    {
      name: 'Мухтар',
      gender: 'мальчик',
      age: 'около 4 лет',
      size: 'крупный',
      description: 'активный и игривый пес, любит длительные прогулки, отлично ладит с детьми, обучен базовым командам',
      image: '/img/bd7ded08-4541-41b2-a503-430a11ad95b8.jpg'
    },
    {
      name: 'Алиса',
      gender: 'девочка',
      age: 'около 6 лет',
      size: 'среднего размера',
      description: 'спокойная и ласковая собака, идеальна для семей с детьми, любит обниматься и нежиться на диване',
      image: '/img/88567e97-b9ad-43bd-b803-3831b7caffbf.jpg'
    },
    {
      name: 'Алекс',
      gender: 'мальчик',
      age: 'около 2 лет',
      size: 'среднего размера',
      description: 'энергичный молодой пес, требует активного образа жизни, умный и легко обучаемый, подойдет спортивным людям',
      image: '/img/8afb9c0e-0383-4ec9-a3be-f265fb70c091.jpg'
    },
    {
      name: 'Мурка',
      gender: 'девочка',
      age: 'около 3 лет',
      size: 'среднего размера',
      description: 'игривая рыжая красавица, любит охотиться на игрушки, ласковая и общительная, любит сидеть на коленях',
      image: '/img/4ca53869-b392-4f5d-a589-a21f963ac43e.jpg'
    },
    {
      name: 'Тимошка',
      gender: 'мальчик',
      age: 'около 1 года',
      size: 'небольшого размера',
      description: 'молодой котик-подросток, очень любопытный и активный, обожает играть и исследовать новые места',
      image: '/img/d4c30483-1447-42f5-abec-2fbc59b11b5c.jpg'
    },
    {
      name: 'Ласка',
      gender: 'девочка',
      age: 'около 7 лет',
      size: 'среднего размера',
      description: 'спокойная и мудрая кошечка, любит тишину и уют, идеальна для пожилых людей или спокойных семей',
      image: '/img/f33abc1a-51d3-4bca-a142-e3ae5af2d5c2.jpg'
    },
    {
      name: 'Бусинка',
      gender: 'девочка',
      age: '3 месяца',
      size: 'маленькая порода',
      description: 'крошечная чихуахуа, очень нежная и ласковая, идеально подойдет для квартиры, любит сидеть на ручках и согревать своим теплом',
      image: '/img/7e488a20-4be1-4f1a-b17c-4f51e39feccf.jpg'
    },
    {
      name: 'Персик',
      gender: 'мальчик',
      age: '4 месяца',
      size: 'маленькая порода',
      description: 'пушистый йоркширский терьер, игривый малыш с огромным запасом энергии, обожает игрушки и внимание, станет верным другом',
      image: '/img/a7e9b46b-c399-4e37-8ecc-39f062633e7f.jpg'
    },
    {
      name: 'Пуфик',
      gender: 'мальчик',
      age: '5 месяцев',
      size: 'маленькая порода',
      description: 'очаровательный шпиц, похож на плюшевую игрушку, очень общительный и дружелюбный, любит быть в центре внимания',
      image: '/img/79751e2c-74c6-40c1-a153-af75b4a03dff.jpg'
    },
    {
      name: 'Рыжик',
      gender: 'мальчик',
      age: '2 месяца',
      size: 'котенок',
      description: 'рыжий малыш с огромными глазками, невероятно игривый и любознательный, мурлычет при любом прикосновении, ищет любящую семью',
      image: '/img/029d8267-a362-4daf-984e-56c75fb5b588.jpg'
    },
    {
      name: 'Дымка',
      gender: 'девочка',
      age: '2 месяца',
      size: 'котенок',
      description: 'серая полосатая малышка, очень ласковая и нежная, обожает играть с мячиками и перышками, быстро привязывается к людям',
      image: '/img/caf85db5-6fad-4f6b-b53b-20151e444163.jpg'
    },
    {
      name: 'Снежок',
      gender: 'мальчик',
      age: '2.5 месяца',
      size: 'котенок',
      description: 'черно-белый котенок с озорным характером, любит лазить и прыгать, очень активный и смешной, подарит массу радости',
      image: '/img/d5b8a991-5935-4164-9e2c-967e5cedb3ba.jpg'
    }
  ];

  const helpOptions = [
    {
      icon: 'ShoppingBag',
      title: 'Корм для животных',
      description: 'Наш приют для животных нуждается в специальном корме, поэтому вы можете принести его нам'
    },
    {
      icon: 'Pill',
      title: 'Медикаменты',
      description: 'Воспитанники нашего приюта для животных нуждаются в специальных медицинских препаратах'
    },
    {
      icon: 'Coins',
      title: 'Денежные пожертвования',
      description: 'У нашего приюта не хватает средств для проведения многочисленных обследований и операций'
    },
    {
      icon: 'Bug',
      title: 'Средства от эктопаразитов',
      description: 'Наш приют для животных нуждается в специальных средствах для обработки животных от блох и клещей'
    },
    {
      icon: 'Wheat',
      title: 'Различные крупы',
      description: 'Любой желающий может привезти в наш приют для животных различные крупы (гречку, овсянку и т.д.)'
    },
    {
      icon: 'Syringe',
      title: 'Средства для гельментизации',
      description: 'Наш приют для животных нуждается в специальных средствах для обработки животных от глистов'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-6 px-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon name="Heart" size={32} className="text-primary-foreground" />
            <h1 className="text-2xl md:text-3xl font-bold">Приют для животных</h1>
          </div>
          <a href="tel:88003332233" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Icon name="Phone" size={20} />
            <span className="hidden md:inline">8 800 333 22 33</span>
          </a>
        </div>
      </header>

      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Добро пожаловать в<br />ПРИЮТ ДЛЯ ЖИВОТНЫХ</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Добро пожаловать на официальный сайт нашего приюта для животных, который помогает заботиться о кошках и собаках
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Icon name="PawPrint" size={40} className="text-primary animate-pulse" />
            <Icon name="Heart" size={40} className="text-primary animate-pulse delay-100" />
            <Icon name="Home" size={40} className="text-primary animate-pulse delay-200" />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Немного о приюте для животных</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-6">
                Наша компания занимается заботой о бездомных животных
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="p-8 border-2 border-primary/20 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Scissors" size={32} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Стерилизуем животных</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Наши работники занимаются отловом безнадзорных животных, дальнейшей их вакцинацией, лечением и стерилизацией.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Мы сотрудничаем с ветеринарными клиниками, поэтому стерилизация и кастрация обходятся чуть дешевле, чем обычно.
                  </p>
                </div>
              </Card>

              <Card className="p-8 border-2 border-primary/20 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Home" size={32} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Содержим животных</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Наша компания старается привлекать жителей города к оказанию материальной, ветеринарной и иной помощи бездомным животным.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Наши работники стараются доносить до владельцев домашних животных необходимую информацию об их правильном содержании.
                  </p>
                </div>
              </Card>

              <Card className="p-8 border-2 border-primary/20 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Stethoscope" size={32} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Лечим животных</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Наш приют старается оказывать медицинскую помощь бездомным животным в зависимости от финансового положения.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Мы своевременно проводим вакцинацию всех животных и лечим тех, кто болеет.
                  </p>
                </div>
              </Card>

              <Card className="p-8 border-2 border-primary/20 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="HandHeart" size={32} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Пристраиваем животных</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    В нашем приюте любой желающий может забрать к себе домой понравившееся животное.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Наша компания предоставляет услуги передержки и социализации бездомных животных за умеренную плату или пожертвование.
                  </p>
                </div>
              </Card>
            </div>

            <div className="bg-accent/20 rounded-2xl p-8 md:p-12 text-center">
              <Icon name="Users" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Присоединяйтесь к нашей миссии</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                Каждое животное заслуживает любви и заботы. Вместе мы можем изменить их жизнь к лучшему!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Заберите к себе животное из приюта</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Если у вас появилось желание забрать к себе домой животное из нашего приюта, оставьте заявку на сайте или позвоните по номеру{' '}
            <a href="tel:88003332233" className="text-primary font-semibold hover:underline">8 800 333 22 33</a>
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Воспитанники приюта</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Любой желающий может забрать к себе животное из приюта
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {animals.map((animal, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-2 border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img 
                    src={animal.image} 
                    alt={animal.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-2xl font-bold">{animal.name}</h3>
                    <span className="text-muted-foreground">({animal.gender})</span>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex items-start gap-2">
                      <Icon name="Calendar" size={18} className="mt-0.5 flex-shrink-0" />
                      <span>{animal.age}</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Icon name="Ruler" size={18} className="mt-0.5 flex-shrink-0" />
                      <span>{animal.size}</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Icon name="Sparkles" size={18} className="mt-0.5 flex-shrink-0" />
                      <span>{animal.description}</span>
                    </p>
                  </div>
                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                    Забрать домой
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-accent/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Если вы хотите помочь приюту</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Что вы можете сделать, чтобы помочь нашему приюту для животных
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpOptions.map((option, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-accent/40"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name={option.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{option.title}</h3>
                  <p className="text-muted-foreground">{option.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-b from-background to-accent/20">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Истории счастливых хозяев</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Наши воспитанники нашли свои любящие семьи
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            <Card className="p-6 border-2 border-primary/20 hover:shadow-lg transition-all">
              <div className="flex gap-2 mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Icon key={star} name="Star" size={20} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Взяли Алису из приюта полгода назад. Она стала настоящим членом нашей семьи! Спокойная, ласковая, обожает детей. Спасибо приюту за такое чудо!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="User" size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Мария Петрова</p>
                  <p className="text-sm text-muted-foreground">Москва</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-primary/20 hover:shadow-lg transition-all">
              <div className="flex gap-2 mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Icon key={star} name="Star" size={20} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Мухтар — лучший пес на свете! Умный, преданный, отлично ладит с детьми. Каждый день благодарим судьбу, что встретили его в приюте. Рекомендую всем!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="User" size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Дмитрий Сидоров</p>
                  <p className="text-sm text-muted-foreground">Санкт-Петербург</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-primary/20 hover:shadow-lg transition-all">
              <div className="flex gap-2 mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Icon key={star} name="Star" size={20} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Мурка принесла в наш дом столько радости! Она игривая, ласковая и очень общительная. Спасибо сотрудникам приюта за их заботу и профессионализм!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="User" size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Анна Иванова</p>
                  <p className="text-sm text-muted-foreground">Казань</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Наш приют</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Посмотрите, как мы заботимся о наших воспитанниках
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src="/img/1cf323e8-25db-4790-98f5-d90533ae61cc.jpg" 
                alt="Интерьер приюта"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Комфортные условия</h3>
                  <p className="text-sm">Чистые и уютные вольеры для каждого питомца</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src="/img/e7025812-2615-42b8-a29e-3bc381230a4f.jpg" 
                alt="Площадка для выгула"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Площадка для прогулок</h3>
                  <p className="text-sm">Просторная территория для игр и активностей</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src="/img/96aaadea-c400-4b4d-a146-665a14ef54d9.jpg" 
                alt="Ветеринарная помощь"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Ветеринарная помощь</h3>
                  <p className="text-sm">Профессиональный уход и медицинское обслуживание</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Часто задаваемые вопросы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Ответы на популярные вопросы о приюте и усыновлении
          </p>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-2 border-primary/20 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Как можно забрать животное из приюта?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Позвоните нам по телефону 8 800 333 22 33 или оставьте заявку на сайте. Мы пригласим вас в приют для знакомства с питомцем. После собеседования и проверки условий проживания вы сможете забрать животное домой.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-2 border-primary/20 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Все ли животные привиты и здоровы?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, все наши воспитанники проходят обязательный ветеринарный осмотр, вакцинацию и обработку от паразитов. При усыновлении вы получите полную медицинскую карту питомца.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-2 border-primary/20 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Нужно ли платить за усыновление?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Усыновление бесплатное, но мы принимаем добровольные пожертвования, которые идут на содержание и лечение других животных в приюте.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-2 border-primary/20 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Можно ли вернуть животное обратно?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Мы понимаем, что иногда возникают непредвиденные обстоятельства. Если по какой-то причине вы не сможете оставить питомца, мы всегда готовы забрать его обратно. Главное — благополучие животного.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-2 border-primary/20 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Как я могу помочь приюту?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Вы можете помочь кормом, медикаментами, денежными пожертвованиями или стать волонтером. Любая помощь очень важна для нас и наших воспитанников!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-2 border-primary/20 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Можно ли посетить приют и познакомиться с животными?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Конечно! Мы работаем ежедневно с 10:00 до 18:00. Приходите знакомиться с нашими воспитанниками. Предварительная запись не требуется, но мы будем рады, если вы позвоните заранее.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary/10">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Оставьте заявку на сайте</h2>
          <p className="text-center text-muted-foreground mb-8">если хотите нам помочь</p>
          <Card className="p-8 border-2 border-primary/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Введите имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="text-lg py-6"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="mail@mail.ru"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="text-lg py-6"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="xxx-xxx-xxx"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="text-lg py-6"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Ваше сообщение (необязательно)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-32 text-lg"
                />
              </div>
              <Button type="submit" className="w-full text-lg py-6 bg-primary hover:bg-primary/90">
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Icon name="Heart" size={28} />
            <h3 className="text-2xl font-bold">Приют для животных</h3>
          </div>
          <p className="text-background/80 mb-4">Помогаем кошкам и собакам найти любящий дом</p>
          <a href="tel:88003332233" className="text-xl font-semibold hover:opacity-80 transition-opacity block mb-4">
            8 800 333 22 33
          </a>
          <div className="flex items-center justify-center gap-2 text-background/80 mb-4">
            <Icon name="MapPin" size={20} />
            <p>г. Екатеринбург, Чкаловский район</p>
          </div>
          <div className="mt-8 pt-8 border-t border-background/20">
            <p className="text-background/60">© 2024 Приют для животных. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;