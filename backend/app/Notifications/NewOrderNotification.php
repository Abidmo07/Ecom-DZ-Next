<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class NewOrderNotification extends Notification
{
    use Queueable;
    public $orderItem;

    /**
     * Create a new notification instance.
     */
    public function __construct($orderItem)
    {
        $this->orderItem = $orderItem;

    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
        ->subject('New Order Received')
        ->greeting('Hello ' . $notifiable->name)
        ->line('You have received a new order for your product: ' . $this->orderItem->product->name)
        ->line('Quantity: ' . $this->orderItem->quantity)
        ->line('Total Price: ' . $this->orderItem->order->total_price . 'DA')
        ->action('Check your orders', url('http://localhost:8000/admin/orders')) // adjust this URL
        ->line('Thank you for using our app!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            'product_name' => $this->orderItem->product->name,
            'quantity' => $this->orderItem->quantity,
            'price' => $this->orderItem->price_at_purchase,
        ];
    }
}
