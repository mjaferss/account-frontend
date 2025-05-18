import React from 'react';
import { Box, Typography, Grid, Card, Avatar, Button, Paper, Container } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StorefrontIcon from '@mui/icons-material/Storefront';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const testimonials = [
  {
    name: 'محمد العتيبي',
    feedback: 'خدمة ممتازة وسرعة في إنهاء الإجراءات الجمركية. أنصح الجميع بالتعامل معهم!'
  },
  {
    name: 'سارة المطيري',
    feedback: 'دعم العملاء متعاون جدًا، وكل شيء كان سهل وواضح.'
  },
  {
    name: 'تركي الحربي',
    feedback: 'أفضل شركة تخليص جمركي تعاملت معها. احترافية في العمل.'
  }
];

const clients = [
  { name: 'شركة النقل السريع', icon: <StorefrontIcon color="primary" sx={{ fontSize: 36 }} /> },
  { name: 'مؤسسة الشاحنات المتحدة', icon: <LocalShippingIcon color="success" sx={{ fontSize: 36 }} /> },
  { name: 'شركة الخليج للسيارات', icon: <DirectionsCarFilledIcon color="info" sx={{ fontSize: 36 }} /> },
  { name: 'مؤسسة التميز', icon: <EmojiEventsIcon color="warning" sx={{ fontSize: 36 }} /> },
];

const stats = [
  { label: 'عدد العملاء', value: 12, icon: <PersonIcon color="primary" sx={{ fontSize: 36 }} /> },
  { label: 'عدد السيارات اليومية', value: 60, icon: <DirectionsCarFilledIcon color="success" sx={{ fontSize: 36 }} /> },
  { label: 'عدد الشاحنات المسجلة', value: '12,000', icon: <LocalShippingIcon color="info" sx={{ fontSize: 36 }} /> },
  { label: 'عدد المنافذ', value: 12, icon: <StorefrontIcon color="warning" sx={{ fontSize: 36 }} /> },
];

const prices = [
  { title: 'خدمة شهرية', price: '5,000 ريال', details: 'عدد لا محدود من السيارات، التخليص قبل وصول السيارة، حجز الموعد (فارغ للرجوع)' },
  { title: 'الخدمة حسب السيارة', price: '100 ريال', details: 'بدون حجز موعد (فارغ)' },
  { title: 'خدمة الترانزيت', price: '200 ريال', details: 'مع كامل المواعيد' },
  { title: 'خدمة الاستشارات الجمركية', price: 'مجانا', details: 'للعملاء فقط' },
];

export default function TestimonialsAndStats() {
  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      {/* سكشن ماذا يقول عنا عملاؤنا */}
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
        ماذا يقول عنا عملاؤنا
      </Typography>
      <Grid container spacing={4} justifyContent="center" mb={6} alignItems="stretch" className="section-spacing">
        {testimonials.map((t, i) => (
          <Grid item xs={12} sm={6} md={4} key={i} display="flex" sx={{ width: '100%', justifyContent: 'center' }}>
            <Card elevation={5} sx={{
              borderRadius: 4, p: 2, minHeight: 200, height: '100%', maxWidth: 320, width: '100%',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              py: { xs: 3, md: 4 },
              mx: { xs: 0, md: 2 }
            }}>
              <Avatar sx={{ bgcolor: 'primary.main', mb: 2 }}><StarIcon /></Avatar>
              <Box sx={{flex: 1, textAlign: 'center'}}>
                <Typography fontWeight="bold" mb={1}>{t.name}</Typography>
                <Typography color="text.secondary">{t.feedback}</Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* سكشن عملاؤنا */}
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
        عملاؤنا
      </Typography>
      <Grid container spacing={4} justifyContent="center" mb={6} alignItems="stretch" className="section-spacing">
        {clients.map((c, i) => (
          <Grid item xs={6} sm={6} md={3} key={i} display="flex" sx={{ width: '100%', justifyContent: 'center' }}>
            <Paper elevation={3} sx={{
              borderRadius: 4, p: 3, textAlign: 'center', bgcolor: '#fff', minHeight: 120, height: '100%', maxWidth: 320, width: '100%',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              py: { xs: 3, md: 4 },
              mx: { xs: 0, md: 2 }
            }}>
              {c.icon}
              <Typography fontWeight="bold" mt={1}>{c.name}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* سكشن الأسعار */}
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
        الأسعار
      </Typography>
      <Grid container spacing={4} justifyContent="center" mb={6} alignItems="stretch" className="section-spacing">
        {prices.map((p, i) => (
          <Grid item xs={12} sm={6} md={3} key={i} display="flex" sx={{ width: '100%', justifyContent: 'center' }}>
            <Card elevation={4} sx={{
              borderRadius: 4, p: 3, minHeight: 200, height: '100%', maxWidth: 320, width: '100%',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              bgcolor: '#f5f7fa',
              justifyContent: 'center',
              py: { xs: 3, md: 4 },
              mx: { xs: 0, md: 2 }
            }}>
              <Typography variant="h6" fontWeight="bold" mb={1}>{p.title}</Typography>
              <Typography color="primary" fontWeight="bold" fontSize={22} mb={1}>{p.price}</Typography>
              <Typography color="text.secondary" textAlign="center">{p.details}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* سكشن الإحصائيات */}
      <Grid container spacing={4} justifyContent="center" mb={6} alignItems="stretch" className="section-spacing">
        {stats.map((s, i) => (
          <Grid item xs={6} sm={6} md={3} key={i} display="flex" sx={{ width: '100%', justifyContent: 'center' }}>
            <Paper elevation={3} sx={{
              borderRadius: 4, p: 3, textAlign: 'center', bgcolor: '#fff', minHeight: 120, height: '100%', maxWidth: 320, width: '100%',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              py: { xs: 3, md: 4 },
              mx: { xs: 0, md: 2 }
            }}>
              {s.icon}
              <Typography variant="h5" fontWeight="bold" mt={1}>{s.value}</Typography>
              <Typography color="text.secondary">{s.label}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* الفوتر */}
      <Box component="footer" sx={{ mt: 10, bgcolor: '#222', color: '#fff', py: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h6" fontWeight="bold">مؤسسة الفضيلي للتخليص الجمركي</Typography>
              <Typography color="#bdbdbd" fontSize={15} my={1}>
                جميع الحقوق محفوظة &copy; {new Date().getFullYear()}
              </Typography>
              <Box mt={2}>
                <Button href="#" color="inherit" sx={{ fontSize: 14, mr: 1 }}>سياسة الخصوصية</Button>
                <Button href="#" color="inherit" sx={{ fontSize: 14, mr: 1 }}>شروط الاستخدام</Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" justifyContent={{ xs: 'flex-start', md: 'flex-end' }} alignItems="center" gap={2}>
                <Button href="#" color="inherit"><FacebookIcon /></Button>
                <Button href="#" color="inherit"><TwitterIcon /></Button>
                <Button href="#" color="inherit"><InstagramIcon /></Button>
                <Button href="#" color="inherit"><WhatsAppIcon /></Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
