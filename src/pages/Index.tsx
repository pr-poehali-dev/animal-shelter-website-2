import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
      age: 'около 5 лет',
      size: 'среднего размера',
      description: 'добродушный, хороший пес, благородный и мудрый, старается не конфликтовать с другими животными',
      image: '/img/bd7ded08-4541-41b2-a503-430a11ad95b8.jpg'
    },
    {
      name: 'Алиса',
      gender: 'девочка',
      age: 'около 5 лет',
      size: 'среднего размера',
      description: 'добродушная, хорошая собака, благородная и мудрая, старается не конфликтовать с другими животными',
      image: '/img/88567e97-b9ad-43bd-b803-3831b7caffbf.jpg'
    },
    {
      name: 'Алекс',
      gender: 'мальчик',
      age: 'около 5 лет',
      size: 'среднего размера',
      description: 'добродушный, хороший пес, благородный и мудрый, старается не конфликтовать с другими животными',
      image: '/img/bd7ded08-4541-41b2-a503-430a11ad95b8.jpg'
    },
    {
      name: 'Мурка',
      gender: 'девочка',
      age: 'около 5 лет',
      size: 'среднего размера',
      description: 'добродушная, хорошая кошка, благородная и мудрая, старается не конфликтовать с другими животными',
      image: '/img/4ca53869-b392-4f5d-a589-a21f963ac43e.jpg'
    },
    {
      name: 'Тимошка',
      gender: 'мальчик',
      age: 'около 5 лет',
      size: 'среднего размера',
      description: 'добродушный, хороший кот, благородный и мудрый, старается не конфликтовать с другими животными',
      image: '/img/4ca53869-b392-4f5d-a589-a21f963ac43e.jpg'
    },
    {
      name: 'Ласка',
      gender: 'девочка',
      age: 'около 5 лет',
      size: 'среднего размера',
      description: 'добродушная, хорошая кошка, благородная и мудрая, старается не конфликтовать с другими животными',
      image: '/img/4ca53869-b392-4f5d-a589-a21f963ac43e.jpg'
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
          <a href="tel:88003332233" className="text-xl font-semibold hover:opacity-80 transition-opacity">
            8 800 333 22 33
          </a>
          <div className="mt-8 pt-8 border-t border-background/20">
            <p className="text-background/60">© 2024 Приют для животных. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;